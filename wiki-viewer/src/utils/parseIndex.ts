import type { Category, PageEntry } from '../types';

export function parseIndex(indexContent: string): Category[] {
  const categories: Category[] = [];
  const lines = indexContent.split('\n');
  let currentCategory: Category | null = null;

  for (const line of lines) {
    // Match category headers: ## 实体, ## 概念, etc.
    const catMatch = line.match(/^##\s+(.+)/);
    if (catMatch) {
      if (currentCategory && currentCategory.pages.length > 0) {
        categories.push(currentCategory);
      }
      const name = catMatch[1].trim();
      if (['实体', '概念', '论文', '主题', '综述'].includes(name)) {
        currentCategory = { name, pages: [], collapsed: false };
      } else {
        currentCategory = null; // Skip non-wiki headers
      }
      continue;
    }

    // Stop at the separator or next major section
    if (line.startsWith('---') && currentCategory) {
      continue;
    }

    // Match page entries: - [Title](path) — summary #tag1 #tag2
    const pageMatch = line.match(/^-\s+\[(.+?)\]\((.+?)\)\s*[—\-]\s*(.+)/);
    if (pageMatch && currentCategory) {
      const title = pageMatch[1].trim();
      const path = pageMatch[2].trim();
      const rest = pageMatch[3].trim();

      // Extract tags from the summary+tags part
      const tagMatches = rest.match(/#([^\s#]+)/g);
      const tags = tagMatches ? tagMatches.map((t) => t.replace(/^#/, '')) : [];

      // Remove tags from summary for cleaner display
      const summary = rest.replace(/#[^\s#]+/g, '').replace(/\s+/g, ' ').trim();

      currentCategory.pages.push({ title, path, summary, tags });
    }
  }

  if (currentCategory && currentCategory.pages.length > 0) {
    categories.push(currentCategory);
  }

  return categories;
}

// Build a map of page title -> file path for wikilink resolution
export function buildTitleMap(categories: Category[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const cat of categories) {
    for (const page of cat.pages) {
      map.set(page.title, page.path);
      // Also add the page basename without extension for matching
      const basename = page.path.split('/').pop()?.replace('.md', '') || '';
      map.set(basename, page.path);
    }
  }
  return map;
}
