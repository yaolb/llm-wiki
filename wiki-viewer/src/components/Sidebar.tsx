import { useState, useEffect } from 'react';
import type { Category, PageEntry, TagCount } from '../types';

interface SidebarProps {
  categories: Category[];
  activePath: string | null;
  onSelect: (page: PageEntry) => void;
  onToggleCategory: (name: string) => void;
  onSearch: () => void;
  pageCount: number;
  allTags: TagCount[];
  activeTag: string | null;
  onTagSelect: (tag: string) => void;
}

export function Sidebar({ categories, activePath, onSelect, onToggleCategory, onSearch, pageCount, allTags, activeTag, onTagSelect }: SidebarProps) {
  const [tagCollapsed, setTagCollapsed] = useState(true);
  const [tagQuery, setTagQuery] = useState('');

  // Auto-expand when a tag filter is activated
  useEffect(() => {
    if (activeTag) setTagCollapsed(false);
  }, [activeTag]);

  // Reset search when collapsing
  useEffect(() => {
    if (tagCollapsed) setTagQuery('');
  }, [tagCollapsed]);

  // Filter tags by fuzzy query
  const q = tagQuery.toLowerCase().trim();
  const filteredTags = q.length >= 1
    ? allTags.filter((t) => t.name.toLowerCase().includes(q))
    : allTags;
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>LLM Wiki</h1>
        <p>{pageCount} 个页面</p>
      </div>

      <div className="sidebar-search">
        <button onClick={onSearch}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>搜索页面...</span>
          <kbd>Ctrl+K</kbd>
        </button>
      </div>

      <nav className="sidebar-nav">
        {categories.map((cat) => (
          <div key={cat.name} style={{ marginBottom: 4 }}>
            <button onClick={() => onToggleCategory(cat.name)} className="cat-btn">
              <span className={`arrow ${cat.collapsed ? '' : 'open'}`}>&#9654;</span>
              {cat.name}
              <span className="count">{cat.pages.length}</span>
            </button>
            {!cat.collapsed && (
              <div className="cat-pages">
                {cat.pages.map((page) => (
                  <div key={page.path}>
                    <button
                      onClick={() => onSelect(page)}
                      className={`page-btn${activePath === page.path ? ' active' : ''}`}
                      title={page.summary || page.title}
                    >
                      {page.title}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Tag Cloud — placed at bottom */}
        {allTags.length > 0 && (
          <div style={{ padding: '8px 0', marginTop: 8, borderTop: '1px solid var(--border)' }}>
            <button
              onClick={() => setTagCollapsed(!tagCollapsed)}
              className="cat-btn"
              style={{ marginBottom: 4 }}
            >
              <span className={`arrow ${tagCollapsed ? '' : 'open'}`}>&#9654;</span>
              标签
              <span className="count">{allTags.length}</span>
            </button>
            {!tagCollapsed && !activeTag && (
              <div>
                {/* Tag search input */}
                <div style={{ padding: '4px 8px 6px' }}>
                  <input
                    type="text"
                    value={tagQuery}
                    onChange={(e) => setTagQuery(e.target.value)}
                    placeholder="搜索标签..."
                    className="tag-search-input"
                  />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: '4px 8px', maxHeight: 300, overflowY: 'auto' }}>
                  {filteredTags.length === 0 && (
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', padding: '4px 0' }}>无匹配标签</span>
                  )}
                  {filteredTags.map((tag) => (
                    <button
                      key={tag.name}
                      onClick={(e) => { e.stopPropagation(); onTagSelect(tag.name); }}
                      className="tag-btn"
                    >
                      {tag.name}
                      <span className="tag-count">{tag.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!tagCollapsed && activeTag && (
              <div style={{ padding: '4px 8px', fontSize: 12, color: 'var(--text-muted)' }}>
                已选: <strong style={{ color: 'var(--accent)' }}>#{activeTag}</strong>
                <button
                  onClick={(e) => { e.stopPropagation(); onTagSelect(activeTag); }}
                  style={{ marginLeft: 8, fontSize: 11, color: 'var(--text-muted)', textDecoration: 'underline' }}
                >
                  清除
                </button>
              </div>
            )}
            {tagCollapsed && activeTag && (
              <div style={{ padding: '4px 8px', fontSize: 12, color: 'var(--text-muted)' }}>
                已选: <strong style={{ color: 'var(--accent)' }}>#{activeTag}</strong>
                <button
                  onClick={(e) => { e.stopPropagation(); onTagSelect(activeTag); }}
                  style={{ marginLeft: 8, fontSize: 11, color: 'var(--text-muted)', textDecoration: 'underline' }}
                >
                  清除
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      <div className="sidebar-footer">LLM Wiki Viewer · 自动索引</div>
    </aside>
  );
}
