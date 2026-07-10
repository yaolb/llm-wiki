import { useState, useMemo, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentViewer } from './components/ContentViewer';
import { SearchModal } from './components/SearchModal';
import { parseWikiPage, buildTitleMapFromPages, buildTitleMapFromListing, setGlobalTitleMap, searchPages, resolveWikilink } from './utils/wikilinks';
import type { Category, PageEntry, WikiPage, TagCount } from './types';

interface PageInfo {
  path: string;
  title: string;
  type: string;
  tags: string[];
  summary: string;
  category: string;
  created: string;
  updated: string;
}

const CATEGORY_ORDER = ['实体', '概念', '论文', '主题', '综述'];

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
  const [loaded, setLoaded] = useState(false);

  // Runtime state: fetched from API
  const [pageInfos, setPageInfos] = useState<PageInfo[]>([]);
  const [pageCache, setPageCache] = useState<Map<string, WikiPage>>(new Map());

  // ── Fetch page listing on mount ──
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch('/api/pages');
        if (!resp.ok) throw new Error('Failed to fetch pages');
        const { pages } = await resp.json();
        setPageInfos(pages);

        // If there's a hash, preload that page
        const hash = readHash();
        if (hash) {
          const matching = pages.find((p: PageInfo) => p.path === hash);
          if (matching) {
            loadPageContent(hash);
          }
        }
      } catch (err) {
        console.error('[App] Failed to load pages:', err);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  // ── Load page content from API ──
  const loadPageContent = useCallback(async (path: string) => {
    setPageCache((prev) => {
      // already cached
      return prev;
    });
    try {
      const resp = await fetch(`/api/page?path=${encodeURIComponent(path)}`);
      if (!resp.ok) throw new Error(`Failed to load: ${path}`);
      const { content: raw } = await resp.json();
      const relPath = path.startsWith('wiki/') ? `../../${path}` : path;
      const parsed = parseWikiPage(raw, relPath);
      setPageCache((prev) => {
        const next = new Map(prev);
        next.set(path, parsed);
        return next;
      });
    } catch (err) {
      console.error('[App] Failed to load page content:', err);
    }
  }, []);

  // ── Build sidebar categories from API data ──
  const { categories, allTags } = useMemo(() => {
    const catMap = new Map<string, PageEntry[]>();
    const tagMap = new Map<string, number>();

    for (const info of pageInfos) {
      const cat = info.category;
      if (!catMap.has(cat)) catMap.set(cat, []);
      catMap.get(cat)!.push({
        title: info.title,
        path: info.path,
        summary: info.summary,
        tags: info.tags,
      });
      for (const tag of info.tags) {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      }
    }

    // Build sorted categories
    const cats: Category[] = [];
    const seen = new Set<string>();
    for (const name of CATEGORY_ORDER) {
      const pgs = catMap.get(name);
      if (pgs && pgs.length > 0) {
        cats.push({ name, pages: pgs, collapsed: collapsedCats.has(name) });
        seen.add(name);
      }
    }
    for (const [name, pgs] of catMap) {
      if (!seen.has(name)) {
        cats.push({ name, pages: pgs, collapsed: collapsedCats.has(name) });
      }
    }

    const tags: TagCount[] = Array.from(tagMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

    return { categories: cats, allTags: tags };
  }, [pageInfos, collapsedCats]);

  // ── Build title map for wikilink resolution (from both listing + cached content) ──
  const allPages = useMemo(() => {
    return Array.from(pageCache.values());
  }, [pageCache]);

  useEffect(() => {
    // Build from API listing first (covers all pages even before loading)
    const fromListing = buildTitleMapFromListing(pageInfos);
    // Merge with cached page content (adds H1 titles from loaded pages)
    const fromCache = buildTitleMapFromPages(allPages);
    const merged = new Map([...fromListing, ...fromCache]);
    setGlobalTitleMap(merged);
  }, [pageInfos, allPages]);

  // ── Get active page content ──
  const activePage = useMemo<WikiPage | null>(() => {
    if (!activePath) return null;
    return pageCache.get(activePath) || null;
  }, [activePath, pageCache]);

  // ── Sync activePath → URL hash ──
  useEffect(() => {
    if (activePath) {
      window.location.hash = '#' + activePath;
    } else {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [activePath]);

  // ── Listen for browser back/forward ──
  useEffect(() => {
    const onHashChange = () => {
      const hash = readHash();
      setActivePath(hash);
      if (hash && !pageCache.has(hash)) {
        loadPageContent(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // ── Handlers ──
  const handleSelect = useCallback((page: PageEntry) => {
    setActivePath(page.path);
    setActiveTag(null);
    setMobileSidebar(false);
    // Load content if not cached
    if (!pageCache.has(page.path)) {
      loadPageContent(page.path);
    }
  }, [pageCache, loadPageContent]);

  const handleNavigate = useCallback((path: string) => {
    const resolved = resolveWikilink(path);
    const target = resolved || path;
    setActivePath(target);
    if (!pageCache.has(target)) {
      loadPageContent(target);
    }
  }, [pageCache, loadPageContent]);

  const handleToggleCategory = useCallback((name: string) => {
    setCollapsedCats((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }, []);

  const handleSearch = useCallback((query: string) => {
    // Search across all page infos (no need to load full content)
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results: { title: string; path: string; snippet: string; score: number }[] = [];
    for (const info of pageInfos) {
      let score = 0;
      if (info.title.toLowerCase().includes(q)) score += 100;
      if (info.tags.some((t) => t.toLowerCase().includes(q))) score += 50;
      if (info.summary.toLowerCase().includes(q)) score += 10;
      if (score > 0) {
        results.push({
          title: info.title,
          path: info.path,
          snippet: info.summary || info.title,
          score,
        });
      }
    }
    const searchResults = searchPages(query, allPages);
    // Merge results (allPages already cached pages have content search)
    const seen = new Set(results.map(r => r.path));
    for (const sr of searchResults) {
      if (!seen.has(sr.path)) results.push(sr);
    }
    return results.sort((a, b) => b.score - a.score).slice(0, 10);
  }, [pageInfos, allPages]);

  const handleSearchSelect = useCallback((path: string) => {
    setActivePath(path);
    setActiveTag(null);
    if (!pageCache.has(path)) {
      loadPageContent(path);
    }
  }, [pageCache, loadPageContent]);

  // ── Handle page save: clear cache and reload ──
  const handlePageSave = useCallback(async (path: string) => {
    // Clear cache for this path
    setPageCache((prev) => {
      const next = new Map(prev);
      next.delete(path);
      return next;
    });
    // Also re-fetch the page listing to update metadata
    try {
      const resp = await fetch('/api/pages');
      if (resp.ok) {
        const { pages } = await resp.json();
        setPageInfos(pages);
      }
    } catch {}
    // Re-fetch page content from API
    loadPageContent(path);
  }, [loadPageContent]);

  const handleTagSelect = useCallback((tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  }, [activeTag]);

  // ── Keyboard shortcuts ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setSearchOpen((p) => !p); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // ── Filter categories by active tag ──
  const filteredCategories = useMemo(() => {
    if (!activeTag) return categories;
    return categories.map((cat) => ({
      ...cat,
      pages: cat.pages.filter((p) => p.tags.includes(activeTag!)),
    })).filter((cat) => cat.pages.length > 0);
  }, [categories, activeTag]);

  const totalPages = pageInfos.length;
  const filteredPageCount = activeTag
    ? filteredCategories.reduce((s, c) => s + c.pages.length, 0)
    : totalPages;

  if (!loaded) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, marginBottom: 8 }}>加载中...</div>
          <div style={{ fontSize: 11 }}>LLM Wiki</div>
        </div>
      </div>
    );
  }

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
          onSave={handlePageSave}
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
