import { useMemo, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { WikiPage } from '../types';
import { convertWikilinks } from '../utils/wikilinks';

interface ContentViewerProps {
  page: WikiPage | null;
  onNavigate: (path: string) => void;
  onTagSelect: (tag: string) => void;
}

export function ContentViewer({ page, onNavigate, onTagSelect }: ContentViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Event delegation: intercept clicks on wikilinks (rendered as #wiki: paths)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#wiki:"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href')!;
        const target = href.replace('#wiki:', '');
        console.log('[ContentViewer] wikilink clicked, target:', target);
        onNavigate(target);
      }
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, [onNavigate]);

  const processedContent = useMemo(() => {
    if (!page) return '';
    return convertWikilinks(page.content);
  }, [page]);

  if (!page) {
    return (
      <div className="content-empty">
        <div style={{ textAlign: 'center' }}>
          <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p style={{ fontSize: 13 }}>从左侧选择页面开始阅读</p>
        </div>
      </div>
    );
  }

  const { meta } = page;

  return (
    <div ref={containerRef} className="content">
      <div className="content-inner">
        <div className="meta-row">
          {meta.type && <span className={`meta-type ${meta.type}`}>{meta.type}</span>}
          {meta.created && <span className="meta-date">创建: {meta.created}</span>}
          {meta.updated && meta.updated !== meta.created && <span className="meta-date">更新: {meta.updated}</span>}
        </div>

        {meta.tags.length > 0 && (
          <div className="tags-row">
            {meta.tags.map((tag) => (
              <button
                key={tag}
                className="tag tag-clickable"
                onClick={() => onTagSelect(tag)}
                title="按此标签筛选"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        <div className="md-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {processedContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
