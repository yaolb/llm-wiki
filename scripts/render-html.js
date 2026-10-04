#!/usr/bin/env node
/*
 * 无头浏览器渲染抓取（兜底）：脚本/curl 拿到的 HTML 里根本没有正文时使用。
 *
 * 用法：
 *   node scripts/render-html.js <URL> [out.html] [out.json]
 *
 * 自动定位 playwright 包与已安装的 Chromium 构建，无需手设 NODE_PATH / executablePath。
 * out.json 内容：title / acct / date / text（正文纯文本）/ bodyHtml（#js_content 内层 HTML，
 *   供 fetch-article.py 按原位置插入图片引用）/ imgs（图片 URL 清单）。
 *
 * fetch-article.py 在静态解析失败时会自动调用本脚本，一般无需手动执行。
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const URL_ = process.argv[2];
const OUT_HTML = process.argv[3];
const OUT_JSON = process.argv[4];
if (!URL_) {
  console.error('用法: node scripts/render-html.js <URL> [out.html] [out.json]');
  process.exit(2);
}

function findPlaywright() {
  const cands = [];
  try { cands.push(path.dirname(require.resolve('playwright'))); } catch (e) {}
  const npx = path.join(os.homedir(), '.npm/_npx');
  if (fs.existsSync(npx)) {
    for (const d of fs.readdirSync(npx)) cands.push(path.join(npx, d, 'node_modules/playwright'));
  }
  cands.push('/Users/yaolianbin/.npm-global/lib/node_modules/playwright');
  cands.push('/Users/yaolianbin/soft/miniconda3/envs/llm/lib/node_modules/playwright');
  const hit = cands.find(p => { try { return fs.existsSync(path.join(p, 'package.json')); } catch (e) { return false; } });
  if (!hit) throw new Error('找不到 playwright 包（npx 缓存 / 全局 / conda llm 环境都试过了）');
  return hit;
}

// 已安装的 Chromium 构建常与 playwright 期望的版本号不一致，必须显式指定可执行文件
function findChromium() {
  const cache = path.join(os.homedir(), 'Library/Caches/ms-playwright');
  if (!fs.existsSync(cache)) return undefined;
  const builds = fs.readdirSync(cache).filter(d => d.startsWith('chromium_headless_shell-'))
    .sort((a, b) => parseInt(b.split('-')[1], 10) - parseInt(a.split('-')[1], 10)); // 版本最高的优先
  for (const b of builds) {
    const dir = path.join(cache, b);
    for (const inner of fs.readdirSync(dir)) {
      const exe = path.join(dir, inner, 'chrome-headless-shell');
      if (fs.existsSync(exe)) return exe;
    }
  }
  // 退路：完整版 Chromium
  const full = fs.readdirSync(cache).filter(d => d.startsWith('chromium-'))
    .sort((a, b) => parseInt(b.split('-')[1], 10) - parseInt(a.split('-')[1], 10));
  for (const b of full) {
    const exe = path.join(cache, b, 'chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium');
    if (fs.existsSync(exe)) return exe;
  }
  return undefined;
}

const MOBILE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 '
  + '(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

(async () => {
  const pwPath = findPlaywright();
  const exe = findChromium();
  console.error('[render] playwright:', pwPath);
  console.error('[render] chromium  :', exe || '(用 playwright 默认解析)');
  const { chromium } = require(pwPath);
  const browser = await chromium.launch({ headless: true, ...(exe ? { executablePath: exe } : {}) });
  const ctx = await browser.newContext({
    userAgent: MOBILE_UA, viewport: { width: 430, height: 932 }, deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.goto(URL_, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);
  try { await page.waitForSelector('#js_content', { timeout: 20000 }); } catch (e) { console.error('[render] 无 #js_content，按全文取'); }
  // 懒加载图片：滚到底再回顶
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 800) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 250));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(4000);
  const data = await page.evaluate(() => {
    const c = document.querySelector('#js_content') || document.querySelector('.rich_media_content') || document.body;
    const imgs = [...c.querySelectorAll('img')]
      .map(i => i.getAttribute('data-src') || i.currentSrc || i.src || '').filter(Boolean);
    const pick = s => { const el = document.querySelector(s); return el ? el.innerText.trim() : ''; };
    return {
      title: document.title,
      acct: pick('#js_name'),
      date: pick('#publish_time'),
      text: c.innerText,
      bodyHtml: c.innerHTML,
      imgs,
    };
  });
  if (OUT_HTML) fs.writeFileSync(OUT_HTML, await page.content());
  if (OUT_JSON) fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  console.log(`title: ${data.title} | acct: ${data.acct} | date: ${data.date}`);
  console.log(`text length: ${data.text.length} | images: ${data.imgs.length} | bodyHtml: ${data.bodyHtml.length}`);
  if (!OUT_JSON) {
    console.log('---- TEXT ----');
    console.log(data.text);
    console.log('---- IMGS ----');
    data.imgs.forEach((u, i) => console.log(`${i + 1}. ${u}`));
  }
  await browser.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
