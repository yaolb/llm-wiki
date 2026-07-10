import type { WikiPage, PageMeta } from '../types';

// Map of ALL page H1 titles found across wiki files, plus their file paths
// This enables wikilink resolution even for pages not listed in index.md
let globalTitleMap: Map<string, string> = new Map();

// Minimal browser-compatible frontmatter parser (replaces gray-matter which requires Node Buffer)
function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const lines = raw.split('\n');
  const data: Record<string, any> = {};
  let bodyStart = 0;

  if (lines[0]?.trim() === '---') {
    const end = lines.indexOf('---', 1);
    if (end > 0) {
      bodyStart = end + 1;
      const fmLines = lines.slice(1, end);
      for (const line of fmLines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const m = trimmed.match(/^([\w_-]+):\s*(.+)$/);
        if (!m) continue;
        const key = m[1];
        let value: any = m[2].trim();
        // Parse YAML array: [a, b, c]
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/^['"]|['"]$/g, ''));
        }
        // Parse unquoted strings that look like numbers
        if (typeof value === 'string' && /^\d+$/.test(value)) {
          // Keep as string for dates/timestamps — frontmatter uses strings
        }
        data[key] = value;
      }
    }
  }

  const content = lines.slice(bodyStart).join('\n');
  return { data, content };
}

export function setGlobalTitleMap(map: Map<string, string>) {
  globalTitleMap = map;
}

export function resolveWikilink(target: string): string | null {
  // Direct match against index entries
  if (globalTitleMap.has(target)) {
    return globalTitleMap.get(target)!;
  }
  // Case-insensitive match
  for (const [key, val] of globalTitleMap) {
    if (key.toLowerCase() === target.toLowerCase()) {
      return val;
    }
  }
  return null;
}

// Parse raw markdown into WikiPage
export function parseWikiPage(raw: string, filePath: string): WikiPage {
  const { data, content } = parseFrontmatter(raw);
  const meta: PageMeta = {
    type: data.type || '',
    tags: data.tags || [],
    created: data.created || '',
    updated: data.updated || '',
    title: data.title || extractH1(content),
  };
  return { path: filePath, meta, content: content.trim(), raw };
}

function extractH1(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

// Scan all wiki files and build a comprehensive title map
export function buildTitleMapFromPages(pages: WikiPage[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const page of pages) {
    // Extract title from H1
    const h1Match = page.content.match(/^#\s+(.+)$/m);
    const title = h1Match ? h1Match[1].trim() : '';
    if (title) {
      map.set(title, page.path);
    }
    // Also add the filename without extension
    const basename = page.path.split('/').pop()?.replace('.md', '') || '';
    if (basename && !map.has(basename)) {
      map.set(basename, page.path);
    }
    // Add meta title
    if (page.meta.title && page.meta.title !== title) {
      map.set(page.meta.title, page.path);
    }
  }
  return map;
}

// Build title map from API page listing (used before pages are loaded into cache)
export function buildTitleMapFromListing(
  entries: { title: string; path: string }[]
): Map<string, string> {
  const map = new Map<string, string>();
  for (const entry of entries) {
    if (entry.title) {
      map.set(entry.title, entry.path);
    }
    const basename = entry.path.split('/').pop()?.replace('.md', '') || '';
    if (basename && !map.has(basename)) {
      map.set(basename, entry.path);
    }
  }
  return map;
}

// Convert wikilinks [[target]] or [[target|text]] in markdown to HTML links
// Returns the modified markdown with wikilinks converted
export function convertWikilinks(markdown: string): string {
  // Match [[target]] or [[target|display text]]
  return markdown.replace(
    /\[\[([^\]|]+?)(?:\|(.+?))?\]\]/g,
    (_match, target: string, display: string) => {
      const cleanTarget = target.trim();
      const resolved = resolveWikilink(cleanTarget);
      const text = display?.trim() || cleanTarget;

      if (resolved) {
        const relPath = resolved.replace(/.*\/wiki\//, 'wiki/');
        return `[${text}](#wiki:${relPath})`;
      }
      return `[${text} (待创建)](#wiki:${cleanTarget})`;
    }
  );
}

// Search across all wiki pages
export function searchPages(query: string, pages: WikiPage[]): { title: string; path: string; snippet: string; score: number }[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  const results: { title: string; path: string; snippet: string; score: number }[] = [];

  for (const page of pages) {
    if (page.path.includes('index.md') || page.path.includes('log.md')) continue;

    const title = page.meta.title || extractH1(page.content);
    const contentLower = page.content.toLowerCase();
    let score = 0;

    // Title match (high weight)
    if (title.toLowerCase().includes(q)) {
      score += 100;
    }
    // Tag match
    if (page.meta.tags.some((t) => t.toLowerCase().includes(q))) {
      score += 50;
    }
    // Content match
    const idx = contentLower.indexOf(q);
    if (idx >= 0) {
      score += 10;
    }

    if (score > 0) {
      // Extract snippet
      let snippet = '';
      if (idx >= 0) {
        const start = Math.max(0, idx - 40);
        const end = Math.min(page.content.length, idx + q.length + 60);
        snippet = (start > 0 ? '...' : '') + page.content.slice(start, end) + (end < page.content.length ? '...' : '');
      } else {
        snippet = title;
      }

      results.push({ title, path: page.path, snippet, score });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 10);
}
