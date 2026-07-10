import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5174;
const WIKI_DIR = path.resolve(__dirname, '../wiki');

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.resolve(__dirname, 'dist')));

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
