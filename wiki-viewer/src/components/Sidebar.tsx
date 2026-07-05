import type { Category, PageEntry } from '../types';

interface SidebarProps {
  categories: Category[];
  activePath: string | null;
  onSelect: (page: PageEntry) => void;
  onToggleCategory: (name: string) => void;
  onSearch: () => void;
  pageCount: number;
}

export function Sidebar({ categories, activePath, onSelect, onToggleCategory, onSearch, pageCount }: SidebarProps) {
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
      </nav>

      <div className="sidebar-footer">LLM Wiki Viewer · 自动索引</div>
    </aside>
  );
}
