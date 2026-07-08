import { useState, useMemo, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentViewer } from './components/ContentViewer';
import { SearchModal } from './components/SearchModal';
import { parseWikiPage, buildTitleMapFromPages, setGlobalTitleMap, searchPages, resolveWikilink } from './utils/wikilinks';
import type { Category, PageEntry, WikiPage, TagCount } from './types';

const wikiFileModules = import.meta.glob('../../wiki/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const CATEGORY_MAP: Record<string, string> = {
  entities: '实体',
  concepts: '概念',
  papers: '论文',
  topics: '主题',
  synthesis: '综述',
};

function extractPageInfo(raw: string, filePath: string): PageEntry {
  const lines = raw.split('\n');
  const frontmatter: Record<string, any> = {};
  let bodyStart = 0;
  if (lines[0]?.trim() === '---') {
    const end = lines.indexOf('---', 1);
    if (end > 0) {
      const fm = lines.slice(1, end).join('\n');
      bodyStart = end + 1;
      fm.split('\n').forEach((line) => {
        const m = line.match(/^(\w+):\s*(.+)$/);
        if (m) frontmatter[m[1]] = m[2].trim();
      });
    }
  }
  const content = lines.slice(bodyStart).join('\n');
  const h1Match = content.match(/^#\s+(.+)/m);
  const title = h1Match ? h1Match[1].trim() : (frontmatter.title || filePath.split('/').pop()?.replace('.md', '') || 'Untitled');
  const dir = filePath.split('/').slice(-2, -1)[0] || '';
  const category = CATEGORY_MAP[dir] || dir;
  let tags: string[] = [];
  if (frontmatter.tags) {
    if (Array.isArray(frontmatter.tags)) tags = frontmatter.tags;
    else if (typeof frontmatter.tags === 'string') tags = frontmatter.tags.split(',').map((t: string) => t.trim());
  }
  const relPath = filePath.replace(/.*\/wiki\//, 'wiki/');
  return { title, path: relPath, summary: frontmatter.summary || '', tags };
}

function readHash(): string | null {
  const h = window.location.hash.slice(1);
  return h || null;
}

export default function App() {
  const [activePath, setActivePath] = useState<string | null>(() => readHash());
  const [collapsedCats, setCollapsedCats] = useState<Set<string>>(new Set(['实体', '概念', '论文', '综述']));
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Sync activePath → URL hash
  useEffect(() => {
    if (activePath) {
      window.location.hash = '#' + activePath;
    } else {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [activePath]);

  // Listen for browser back/forward
  useEffect(() => {
    const onHashChange = () => setActivePath(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const { allPages, categories, allTags } = useMemo(() => {
    const pages: WikiPage[] = [];
    const catMap = new Map<string, PageEntry[]>();
    const tagMap = new Map<string, number>();
    for (const [filePath, raw] of Object.entries(wikiFileModules)) {
      if (filePath.includes('/index.md') || filePath.includes('/log.md')) continue;
      try {
        const relPath = filePath.replace(/.*\/wiki\//, 'wiki/');
        const page = parseWikiPage(raw, relPath);
        pages.push(page);
      } catch (e) {
        console.error('[App] Failed to parse:', filePath, e);
      }
      const info = extractPageInfo(raw, filePath);
      const dir = filePath.split('/').slice(-2, -1)[0] || '';
      const catName = CATEGORY_MAP[dir] || dir;
      // Collect tags for tag cloud
      for (const tag of info.tags) {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      }
      if (!catMap.has(catName)) catMap.set(catName, []);
      catMap.get(catName)!.push(info);
    }
    const cats: Category[] = [];
    for (const name of ['实体', '概念', '论文', '主题', '综述']) {
      const pgs = catMap.get(name);
      if (pgs && pgs.length > 0) {
        cats.push({ name, pages: pgs, collapsed: collapsedCats.has(name) });
        catMap.delete(name);
      }
    }
    for (const [name, pgs] of catMap) {
      cats.push({ name, pages: pgs, collapsed: collapsedCats.has(name) });
    }
    // Build sorted tag list
    const tags: TagCount[] = Array.from(tagMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
    return { allPages: pages, categories: cats, allTags: tags };
  }, [collapsedCats]);

  useEffect(() => {
    setGlobalTitleMap(buildTitleMapFromPages(allPages));
  }, [allPages]);

  const activePage = useMemo<WikiPage | null>(() => {
    if (!activePath) return null;
    const globPath = '../../' + activePath;
    const raw = wikiFileModules[globPath];
    if (!raw) return null;
    return parseWikiPage(raw, globPath);
  }, [activePath]);

  const handleSelect = useCallback((page: PageEntry) => {
    setActivePath(page.path);
    setActiveTag(null);
    setMobileSidebar(false);
  }, []);

  const handleNavigate = useCallback((path: string) => {
    const resolved = resolveWikilink(path);
    setActivePath(resolved || path);
  }, []);

  const handleToggleCategory = useCallback((name: string) => {
    setCollapsedCats((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }, []);

  const handleSearch = useCallback((query: string) => searchPages(query, allPages), [allPages]);

  const handleSearchSelect = useCallback((path: string) => {
    setActivePath(path);
    setActiveTag(null);
  }, []);

  const handleTagSelect = useCallback((tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  }, [activeTag]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setSearchOpen((p) => !p); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Filter categories by active tag
  const filteredCategories = useMemo(() => {
    if (!activeTag) return categories;
    return categories.map((cat) => ({
      ...cat,
      pages: cat.pages.filter((p) => p.tags.includes(activeTag!)),
    })).filter((cat) => cat.pages.length > 0);
  }, [categories, activeTag]);

  const totalPages = allPages.length;
  const filteredPageCount = activeTag
    ? filteredCategories.reduce((s, c) => s + c.pages.length, 0)
    : totalPages;

  return (
    <div className="app">
      <div className="mobile-header">
        <button onClick={() => setMobileSidebar(!mobileSidebar)} style={{ padding: 6, borderRadius: 8 }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>LLM Wiki</h1>
        <button onClick={() => setSearchOpen(true)} style={{ marginLeft: 'auto', padding: 6, borderRadius: 8 }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="main-area">
        <div className="sidebar-desktop" style={{ height: '100%' }}>
          <Sidebar
            categories={filteredCategories}
            activePath={activePath}
            onSelect={handleSelect}
            onToggleCategory={handleToggleCategory}
            onSearch={() => setSearchOpen(true)}
            pageCount={filteredPageCount}
            allTags={allTags}
            activeTag={activeTag}
            onTagSelect={handleTagSelect}
          />
        </div>

        {mobileSidebar && (
          <div className="mobile-overlay">
            <div className="mobile-overlay-bg" onClick={() => setMobileSidebar(false)} />
            <div className="mobile-overlay-sidebar">
              <Sidebar
                categories={filteredCategories}
                activePath={activePath}
                onSelect={handleSelect}
                onToggleCategory={handleToggleCategory}
                onSearch={() => { setMobileSidebar(false); setSearchOpen(true); }}
                pageCount={filteredPageCount}
                allTags={allTags}
                activeTag={activeTag}
                onTagSelect={handleTagSelect}
              />
            </div>
          </div>
        )}

        <ContentViewer
          page={activePage}
          onNavigate={handleNavigate}
          onTagSelect={handleTagSelect}
        />
      </div>

      <div className="status-bar">
        <span>{filteredPageCount} 个页面</span>
        {activeTag && <><span>·</span><span style={{ color: 'var(--accent)' }}>标签: #{activeTag}</span></>}
        {activePage && !activeTag && <><span style={{ color: 'var(--border)' }}>|</span><span>{activePage.path}</span></>}
      </div>

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={handleSearch}
        onSelect={handleSearchSelect}
      />
    </div>
  );
}
