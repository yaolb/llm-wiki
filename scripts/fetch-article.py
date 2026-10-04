#!/usr/bin/env python3
"""从微信公众号 / 今日头条文章链接抓取正文与原始素材（纯标准库，无第三方依赖）。

用法：
    python3 scripts/fetch-article.py <url> [--out FILE] [--html]
                                     [--assets DIR] [--asset-rel REL] [--max-images N]

输出：Markdown（引用块头部 + 正文）到 stdout 或 --out 文件；
      --html 时输出原始 HTML 正文（不转 Markdown）。

带 --assets DIR 时（原始素材本地化）：
  - 原始网页存为 DIR/original.html
  - 正文内图片下载为 DIR/img-NN.<ext>（带 Referer，绕微信防盗链）
  - Markdown 在图片原位置插入 ![img-NN](REL/img-NN.ext)，REL 取 --asset-rel

已验证来源：
  - mp.weixin.qq.com  → <div id="js_content"> 直接解析
  - m.toutiao.com / www.toutiao.com/article/<id>/ → 内联 URL 编码 JSON，取 articleInfo.content

注意：先试 web_fetch 之类的通用抓取工具，失败再用本脚本；不要反复重试同一工具。

抓取兜底：微信新壳页（正文由前端 JS 注入，HTTP 直接拿不到 js_content）或头条内联 JSON
未命中时，本脚本会自动调用同目录的 render-html.js，用无头 Chromium 渲染后再解析
——自动定位 playwright 包与已安装的 Chromium 构建，无需手设 NODE_PATH / executablePath。
"""
import argparse
import datetime as _dt
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126 Safari/537.36")
MOBILE_UA = ("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 "
             "(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1")

IMG_TOKEN = "\x01IMG{}\x01"
TOKEN_RE = re.compile("\x01IMG(\\d+)\x01")
# 微信正文之后的 UI 尾巴：小助手二维码 / 推荐位 / 点赞提示
TAIL_MARKERS = ("预览时标签不可点", "长按添加小助手", "扫描二维码添加小助手", "技术交流群邀请函")
EXT_BY_CTYPE = {
    "image/jpeg": ".jpg", "image/jpg": ".jpg", "image/png": ".png",
    "image/gif": ".gif", "image/webp": ".webp", "image/svg+xml": ".svg",
    "image/bmp": ".bmp", "image/avif": ".avif",
}

# 各站点首选的无头渲染入口（render-html.js 内部按此顺序找正文容器）
RENDER_SELECTORS = ["#js_content", ".rich_media_content", "article", "body"]


class ExtractFailed(Exception):
    """静态解析拿不到正文（典型：微信新壳页 / 头条内联 JSON 未命中），转渲染兜底。"""


def http_get(url, mobile=False, referer=""):
    headers = {
        "User-Agent": MOBILE_UA if mobile else UA,
        "Accept-Language": "zh-CN,zh;q=0.9",
    }
    if referer:
        headers["Referer"] = referer
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=60) as r:
        raw = r.read()
    for enc in ("utf-8", "gbk", "latin-1"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", errors="ignore")


def _attr(tag, *names):
    for n in names:
        m = re.search(n + r'\s*=\s*["\']([^"\']+)["\']', tag, re.I)
        if m and m.group(1).strip():
            return html.unescape(m.group(1).strip())
    return ""


def clean_img_url(u):
    """去掉 tp=webp（微信据此转码），拿回原始格式。"""
    p = urllib.parse.urlsplit(u)
    q = [(k, v) for k, v in urllib.parse.parse_qsl(p.query, keep_blank_values=True) if k != "tp"]
    return urllib.parse.urlunsplit((p.scheme, p.netloc, p.path, urllib.parse.urlencode(q), p.fragment))


def extract_images(body):
    """把 <img> 换成占位 token，返回 (body, [src, ...])，顺序即图片出现顺序。"""
    srcs = []

    def repl(m):
        src = _attr(m.group(0), "data-src", "data-original", "src")
        if not src or src.startswith("data:"):
            return ""                      # 懒加载占位图直接丢掉
        srcs.append(clean_img_url(src))
        return IMG_TOKEN.format(len(srcs) - 1)

    return re.sub(r"<img\b[^>]*>", repl, body, flags=re.I), srcs


def html_to_md(body):
    body = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", body, flags=re.S | re.I)
    body = re.sub(r"<br\s*/?>", "\n", body, flags=re.I)
    body = re.sub(r"</t[dh]>", " | ", body, flags=re.I)
    body = re.sub(r"</(p|div|section|li|h[1-6]|tr|table)>", "\n", body, flags=re.I)
    body = re.sub(r"<[^>]+>", "", body)
    body = html.unescape(body)
    body = re.sub(r"[ \t\u00a0]+", " ", body)
    body = re.sub(r"\n[ \t]*\n{2,}", "\n\n", body)
    return body.strip()


def guess_ext(url, ctype=""):
    q = urllib.parse.parse_qs(urllib.parse.urlparse(url).query)
    fmt = (q.get("wx_fmt") or [""])[0].lower()      # 优先 URL 声明的原始格式
    if fmt in ("jpg", "jpeg", "png", "gif", "webp", "bmp", "svg"):
        return ".jpg" if fmt == "jpeg" else "." + fmt
    ct = (ctype or "").split(";")[0].strip().lower()
    if ct in EXT_BY_CTYPE:
        return EXT_BY_CTYPE[ct]
    suffix = os.path.splitext(urllib.parse.urlparse(url).path)[1].lower()
    if suffix in (".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".avif"):
        return ".jpg" if suffix == ".jpeg" else suffix
    return ".jpg"


def download_images(srcs, outdir, referer, max_images=0, min_bytes=512, verbose=True):
    """下载图片到 outdir，返回 {src 下标: 本地文件名}（失败/装饰图不在结果里）。"""
    os.makedirs(outdir, exist_ok=True)
    mapping, n = {}, 0
    for i, src in enumerate(srcs):
        if max_images and n >= max_images:
            break
        try:
            req = urllib.request.Request(src, headers={
                "User-Agent": UA, "Referer": referer,
                "Accept": "image/png,image/gif,image/jpeg,image/*;q=0.8,*/*;q=0.5",
            })
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
                ext = guess_ext(src, r.headers.get("Content-Type", ""))
            if len(data) < min_bytes:               # 防盗链占位图 / 16px 间距图
                raise ValueError("too small (%d bytes < %d)" % (len(data), min_bytes))
            name = "img-%02d%s" % (n + 1, ext)
            with open(os.path.join(outdir, name), "wb") as f:
                f.write(data)
            mapping[i] = name
            n += 1
            if verbose:
                print("  %s  %d bytes  <- %s" % (name, len(data), src[:90]), file=sys.stderr)
        except Exception as e:                      # 单张失败不影响整体
            if verbose:
                print("  SKIP (failed: %s) <- %s" % (e, src[:90]), file=sys.stderr)
    return mapping


def inline_images(text, mapping, asset_rel):
    """把 token 换成 markdown 图片引用；下载失败的 token 直接删掉。"""
    def repl(m):
        name = mapping.get(int(m.group(1)))
        return "![%s](%s/%s)" % (os.path.splitext(name)[0], asset_rel, name) if name else ""

    return TOKEN_RE.sub(repl, text)


def fetch_wechat(url):
    page = http_get(url)

    def first(*pats):
        for p in pats:
            m = re.search(p, page, re.S)
            if m:
                v = html.unescape(re.sub("<[^>]+>", "", m.group(1))).strip()
                if v:
                    return v
        return ""

    title = first(r'var msg_title\s*=\s*"([^"]+)"',
                  r'property="og:title"\s+content="([^"]+)"',
                  r"<title>(.*?)</title>")
    author = first(r'var nickname\s*=\s*"([^"]+)"', r'id="js_name"[^>]*>(.*?)</')
    ct = first(r'var ct\s*=\s*"(\d+)"')
    date = ""
    if ct.isdigit():
        date = _dt.datetime.fromtimestamp(int(ct)).strftime("%Y-%m-%d")
    m = re.search(r'id="js_content"[^>]*>(.*)', page, re.S)
    if not m:
        raise ExtractFailed("wechat: js_content not found (新壳页或被删，转渲染兜底)")
    body = m.group(1)
    cuts = [i for i in (body.find(k) for k in TAIL_MARKERS) if i > 0]
    if cuts:
        body = body[:min(cuts)]
    return title, author, date, body, page


def fetch_toutiao(url):
    page = http_get(url, mobile=True)
    m = re.search(r"(\%7B%22sessionConfig[^<]{5000,})", page) or re.search(r"(\%7B[^<]{5000,})", page)
    if not m:
        raise ExtractFailed("toutiao: inline payload not found (转渲染兜底，或改用 m.toutiao.com 文章 URL)")
    data = json.loads(urllib.parse.unquote(m.group(1)))
    ai = data.get("articleInfo") or {}
    title = ai.get("title") or ""
    author = ai.get("detailSource") or ai.get("source") or ""
    pt = ai.get("publishTime")
    date = _dt.datetime.fromtimestamp(int(pt)).strftime("%Y-%m-%d %H:%M") if pt else ""
    origin = ai.get("url") or ""
    return title, author, date, ai.get("content", ""), origin, page


def _node_bin():
    """优先用 conda llm 环境的 node（系统 node 版本可能过低）。"""
    for c in ("/Users/yaolianbin/soft/miniconda3/envs/llm/bin/node",):
        if os.path.exists(c):
            return c
    return shutil.which("node") or "node"


def render_page(url):
    """无头 Chromium 渲染兜底；返回 (title, author, date, body_html, full_html)。"""
    helper = os.path.join(os.path.dirname(os.path.abspath(__file__)), "render-html.js")
    if not os.path.exists(helper):
        raise SystemExit("render-html.js not found next to fetch-article.py")
    tmpd = tempfile.mkdtemp(prefix="render-")
    out_html = os.path.join(tmpd, "page.html")
    out_json = os.path.join(tmpd, "data.json")
    r = subprocess.run([_node_bin(), helper, url, out_html, out_json],
                       capture_output=True, text=True, timeout=300)
    if r.returncode != 0 or not os.path.exists(out_json):
        raise SystemExit("render fallback failed: " + ((r.stderr or "")[-800:]))
    data = json.load(open(out_json, encoding="utf-8"))
    page = open(out_html, encoding="utf-8", errors="ignore").read()
    return (data.get("title", ""), data.get("acct", ""), data.get("date", ""),
            data.get("bodyHtml", "") or data.get("text", ""), page)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("url")
    ap.add_argument("--out")
    ap.add_argument("--html", action="store_true")
    ap.add_argument("--assets", help="原始素材落盘目录（存 original.html + 图片）")
    ap.add_argument("--asset-rel", help="Markdown 中引用素材的相对前缀，默认由 --assets 推导")
    ap.add_argument("--max-images", type=int, default=0, help="最多下载几张图（0=不限）")
    ap.add_argument("--min-image-bytes", type=int, default=512, help="小于该字节数的图视为装饰/占位，跳过")
    a = ap.parse_args()

    if "mp.weixin.qq.com" in a.url:
        try:
            title, author, date, body, page = fetch_wechat(a.url)
        except ExtractFailed as e:
            print("  wechat 静态解析失败（%s）→ 无头渲染兜底 …" % e, file=sys.stderr)
            title, author, date, body, page = render_page(a.url)
        origin = ""
    elif "toutiao.com" in a.url:
        try:
            title, author, date, body, origin, page = fetch_toutiao(a.url)
        except ExtractFailed as e:
            print("  toutiao 静态解析失败（%s）→ 无头渲染兜底 …" % e, file=sys.stderr)
            title, author, date, body, page = render_page(a.url)
            origin = ""
    else:
        raise SystemExit("unsupported source: only mp.weixin.qq.com and toutiao.com are implemented")

    # ---- 原始素材本地化 ----
    asset_rel, mapping = "", {}
    if a.assets:
        norm = os.path.normpath(a.assets).replace("\\", "/")
        asset_rel = (a.asset_rel or (norm[4:] if norm.startswith("raw/") else os.path.basename(norm))).rstrip("/")
        os.makedirs(a.assets, exist_ok=True)
        with open(os.path.join(a.assets, "original.html"), "w", encoding="utf-8") as f:
            f.write(page)
        body, srcs = extract_images(body)
        mapping = download_images(srcs, a.assets, referer=a.url, max_images=a.max_images,
                                  min_bytes=a.min_image_bytes)
        print("assets: %s （图片 %d/%d 张）" % (a.assets, len(mapping), len(srcs)), file=sys.stderr)

    text = body if a.html else html_to_md(body)
    if asset_rel:
        text = inline_images(text, mapping, asset_rel)

    header = [f"# {title}" if title else "# (untitled)", ""] + [x for x in (
              f"> 来源：{author}" if author else "",
              f"> 链接（原文）：{a.url}",
              f"> 链接（原发）：{origin}" if origin else "",
              f"> 日期：{date}" if date else "",
              f"> 原始素材：`{asset_rel}/`（original.html + {len(mapping)} 张图）" if asset_rel else "",
          ) if x] + ["", ""]
    out = "\n".join(header) + text + "\n"
    if a.out:
        with open(a.out, "w", encoding="utf-8") as f:
            f.write(out)
        print(f"written: {a.out} ({len(out)} chars)")
    else:
        sys.stdout.write(out)


if __name__ == "__main__":
    main()
