#!/usr/bin/env python3
"""从微信公众号 / 今日头条文章链接抓取正文（纯标准库，无第三方依赖）。

用法：
    python3 scripts/fetch-article.py <url> [--out FILE] [--html]

输出：Markdown（front-matter 风格的引用块 + 正文）到 stdout 或 --out 文件；
      --html 时输出原始 HTML 正文（不转 Markdown）。

已验证来源：
  - mp.weixin.qq.com  → <div id="js_content"> 直接解析
  - m.toutiao.com / www.toutiao.com/article/<id>/ → 内联 URL 编码 JSON，取 articleInfo.content

注意：先试 web_fetch 之类的通用抓取工具，失败再用本脚本；不要反复重试同一工具。
"""
import argparse
import datetime as _dt
import html
import json
import re
import sys
import urllib.parse
import urllib.request

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126 Safari/537.36")
MOBILE_UA = ("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 "
             "(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1")


def http_get(url, mobile=False):
    req = urllib.request.Request(url, headers={
        "User-Agent": MOBILE_UA if mobile else UA,
        "Accept-Language": "zh-CN,zh;q=0.9",
    })
    with urllib.request.urlopen(req, timeout=60) as r:
        raw = r.read()
    for enc in ("utf-8", "gbk", "latin-1"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", errors="ignore")


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
        raise SystemExit("wechat: js_content not found (page may be blocked/removed)")
    body = m.group(1)
    cut = body.find("预览时标签不可点")          # 微信 UI 尾巴
    if cut > 0:
        body = body[:cut]
    return title, author, date, body


def fetch_toutiao(url):
    page = http_get(url, mobile=True)
    m = re.search(r"(\%7B%22sessionConfig[^<]{5000,})", page) or re.search(r"(\%7B[^<]{5000,})", page)
    if not m:
        raise SystemExit("toutiao: inline payload not found (try the m.toutiao.com article URL)")
    data = json.loads(urllib.parse.unquote(m.group(1)))
    ai = data.get("articleInfo") or {}
    title = ai.get("title") or ""
    author = ai.get("detailSource") or ai.get("source") or ""
    pt = ai.get("publishTime")
    date = _dt.datetime.fromtimestamp(int(pt)).strftime("%Y-%m-%d %H:%M") if pt else ""
    origin = ai.get("url") or ""
    return title, author, date, ai.get("content", ""), origin


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("url")
    ap.add_argument("--out")
    ap.add_argument("--html", action="store_true")
    a = ap.parse_args()

    if "mp.weixin.qq.com" in a.url:
        title, author, date, body = fetch_wechat(a.url)
        origin = ""
    elif "toutiao.com" in a.url:
        title, author, date, body, origin = fetch_toutiao(a.url)
    else:
        raise SystemExit("unsupported source: only mp.weixin.qq.com and toutiao.com are implemented")

    text = body if a.html else html_to_md(body)
    header = [f"# {title}" if title else "# (untitled)",
              "",
              f"> 来源：{author}" if author else "",
              f"> 链接（原文）：{a.url}",
              f"> 链接（原发）：{origin}" if origin else "",
              f"> 日期：{date}" if date else "",
              "",
              ""]
    out = "\n".join(h for h in header if h is not None) + text + "\n"
    if a.out:
        with open(a.out, "w", encoding="utf-8") as f:
            f.write(out)
        print(f"written: {a.out} ({len(out)} chars)")
    else:
        sys.stdout.write(out)


if __name__ == "__main__":
    main()
