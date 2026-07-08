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
