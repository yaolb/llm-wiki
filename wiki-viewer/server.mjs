import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5174;
const WIKI_DIR = path.resolve(__dirname, '../wiki');
// 归档文档目录（与 llm-wiki 平级，位于 workspace/meishi_docs）
const MEISHI_DIR = path.resolve(__dirname, '../../meishi_docs');

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.resolve(__dirname, 'dist')));

// ─── 归档文档静态服务：/meishi_docs/... 直接可访问 ───
// 浏览器直接访问 .md 时服务端渲染为 HTML（兜底，不依赖前端 JS 拦截）
const staticHandler = express.static(MEISHI_DIR, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.md')) {
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    }
  }
});

app.get('/meishi_docs/*.md', async (req, res) => {
  const accept = req.headers.accept || '';
  const noop = () => {};
  // 非浏览器（fetch/curl）请求：返回 markdown 源码
  if (!accept.includes('text/html')) return staticHandler(req, res, noop);
  try {
    // req.path 是 URL 编码的，需解码后才是真实中文路径
    const decoded = decodeURIComponent(req.path).replace(/^\/meishi_docs\//, '');
    const fullPath = path.resolve(MEISHI_DIR, decoded);
    if (!fullPath.startsWith(MEISHI_DIR)) return res.status(403).send('invalid path');
    const raw = await fs.readFile(fullPath, 'utf-8');
    const md = raw.replace(/^---[\s\S]*?---\s*/, ''); // 去掉 frontmatter
    const title = md.match(/^#\s+(.+)$/m)?.[1] || path.basename(fullPath, '.md');
    const body = renderToStaticMarkup(
      React.createElement(ReactMarkdown, { remarkPlugins: [remarkGfm] }, md)
    );
    const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
  body { margin: 0; background: #f5f5f7; color: #1d1d1f; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; }
  .doc-wrap { max-width: 860px; margin: 32px auto; padding: 40px 56px; background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); line-height: 1.75; font-size: 15px; }
  h1, h2, h3, h4 { color: #111; margin-top: 1.6em; }
  h1 { border-bottom: 1px solid #e5e5e7; padding-bottom: 0.4em; }
  h2 { border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
  code { background: #f2f2f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  pre { background: #f6f6f8; padding: 16px; border-radius: 8px; overflow-x: auto; }
  pre code { background: none; padding: 0; }
  table { border-collapse: collapse; width: 100%; margin: 16px 0; }
  th, td { border: 1px solid #e0e0e2; padding: 8px 12px; text-align: left; }
  th { background: #f8f8fa; }
  blockquote { border-left: 4px solid #d0d0d4; margin: 12px 0; padding: 4px 16px; color: #666; background: #fafafa; }
  img { max-width: 100%; }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .doc-bar { max-width: 860px; margin: 24px auto 0; font-size: 12px; color: #999; padding: 0 8px; }
</style>
</head>
<body>
<div class="doc-bar">📂 meishi_docs/${escapeHtml(req.path.replace(/^\/meishi_docs\//, ''))}</div>
<div class="doc-wrap">${body}</div>
</body>
</html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  } catch (err) {
    console.error('[SSR] render failed:', err.message);
    staticHandler(req, res, noop);
  }
});

app.use('/meishi_docs', staticHandler);

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ─── API: 读取归档文档内容（前端渲染用）───
app.get('/api/meishi-doc', async (req, res) => {
  try {
    const docPath = req.query.path;
    if (!docPath) return res.status(400).json({ error: 'missing path' });
    // 安全校验：禁止路径穿越
    const fullPath = path.resolve(MEISHI_DIR, docPath);
    if (!fullPath.startsWith(MEISHI_DIR)) {
      return res.status(403).json({ error: 'invalid path' });
    }
    const raw = await fs.readFile(fullPath, 'utf-8');
    res.json({ content: raw, path: docPath });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// ─── API: 列出归档文档目录树（可选）───
app.get('/api/meishi-docs-tree', async (req, res) => {
  try {
    const base = req.query.dir || '';
    const dir = path.resolve(MEISHI_DIR, base);
    if (!dir.startsWith(MEISHI_DIR)) return res.status(403).json({ error: 'invalid path' });
    const items = await fs.readdir(dir, { withFileTypes: true });
    const tree = items
      .filter(i => !i.name.startsWith('.'))
      .map(i => ({
        name: i.name,
        type: i.isDirectory() ? 'dir' : 'file',
        path: path.join(base, i.name).replace(/\\/g, '/'),
      }))
      .sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === 'dir' ? -1 : 1));
    res.json({ dir: base, items: tree });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── Helper: parse frontmatter from raw markdown ───
function parseFrontmatter(raw) {
  const lines = raw.split('\n');
  const data = {};
  if (lines[0]?.trim() !== '---') return { data, content: raw };
  const end = lines.indexOf('---', 1);
  if (end < 0) return { data, content: raw };
  for (let i = 1; i < end; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const m = line.match(/^([\w_-]+):\s*(.+)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
    } else if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1);
    }
    data[m[1]] = val;
  }
  return { data, content: lines.slice(end + 1).join('\n') };
}

// ─── Helper: extract first H1 from markdown ───
function extractH1(content) {
  const m = content.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

// ─── Helper: recursively walk directory ───
async function walkDir(dir, baseDir) {
  const entries = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    const rel = path.relative(baseDir, full);
    if (item.name.startsWith('.')) continue;
    if (item.isDirectory()) {
      entries.push(...await walkDir(full, baseDir));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const basename = item.name.replace('.md', '');
      if (basename === 'index' || basename === 'log') continue;
      entries.push({ full, rel });
    }
  }
  return entries;
}

// ─── Helper: determine category from directory name ───
const CAT_MAP = { entities: '实体', concepts: '概念', papers: '论文', topics: '主题', synthesis: '综述' };
function getCategory(relPath) {
  const dir = relPath.split(path.sep)[0];
  return CAT_MAP[dir] || dir || '其他';
}

// ─── GET /api/pages — list all wiki pages with metadata (runtime, not bundled) ───
app.get('/api/pages', async (_req, res) => {
  try {
    const files = await walkDir(WIKI_DIR, WIKI_DIR);
    const pages = [];
    for (const f of files) {
      const raw = await fs.readFile(f.full, 'utf-8');
      const { data, content } = parseFrontmatter(raw);
      const title = data.title || extractH1(content) || f.rel.replace('.md', '').split(path.sep).pop();
      const tags = Array.isArray(data.tags) ? data.tags : (typeof data.tags === 'string' ? data.tags.split(',').map(t => t.trim()) : []);
      pages.push({
        path: 'wiki/' + f.rel.replace(/\\/g, '/'),
        title,
        type: data.type || '',
        tags,
        summary: data.summary || data.description || '',
        category: getCategory(f.rel),
        created: data.created || '',
        updated: data.updated || '',
      });
    }
    res.json({ pages });
  } catch (err) {
    console.error('[Pages Error]', err);
    res.status(500).json({ error: err.message });
  }
});

// Save page content
app.post('/api/save-page', async (req, res) => {
  try {
    const { path: pagePath, content, frontmatter } = req.body;
    if (!pagePath || content === undefined) {
      return res.status(400).json({ error: 'missing path or content' });
    }

    // Security: ensure path is within wiki directory
    const safePath = pagePath.replace(/^wiki\//, '');
    const fullPath = path.resolve(WIKI_DIR, safePath);
    if (!fullPath.startsWith(WIKI_DIR)) {
      return res.status(403).json({ error: 'invalid path' });
    }

    // Build final content with frontmatter
    let finalContent = content;
    if (frontmatter && Object.keys(frontmatter).length > 0) {
      const fmLines = ['---'];
      for (const [k, v] of Object.entries(frontmatter)) {
        if (Array.isArray(v)) {
          fmLines.push(`${k}: [${v.map(t => `"${t}"`).join(', ')}]`);
        } else if (typeof v === 'string' && v.includes(' ')) {
          fmLines.push(`${k}: "${v}"`);
        } else {
          fmLines.push(`${k}: ${v}`);
        }
      }
      fmLines.push('---');
      finalContent = fmLines.join('\n') + '\n\n' + content;
    }

    // Write file
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, finalContent, 'utf-8');

    res.json({ success: true, path: pagePath });
  } catch (err) {
    console.error('[Save Error]', err);
    res.status(500).json({ error: err.message });
  }
});

// Get page raw content
app.get('/api/page', async (req, res) => {
  try {
    const pagePath = req.query.path;
    if (!pagePath) return res.status(400).json({ error: 'missing path' });

    const safePath = pagePath.replace(/^wiki\//, '');
    const fullPath = path.resolve(WIKI_DIR, safePath);
    if (!fullPath.startsWith(WIKI_DIR)) {
      return res.status(403).json({ error: 'invalid path' });
    }

    const raw = await fs.readFile(fullPath, 'utf-8');
    res.json({ content: raw });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ LLM Wiki Server running at http://localhost:${PORT}`);
  console.log(`   API: POST /api/save-page  GET /api/page?path=wiki/...`);
});
