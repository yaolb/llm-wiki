import React, { useMemo, useEffect, useRef, useState } from 'react';
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
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [editSaving, setEditSaving] = useState(false);
  const [editMsg, setEditMsg] = useState('');
  const [liveOverride, setLiveOverride] = useState<string | null>(null);

  // Reset live override when navigating to a different page
  useEffect(() => {
    setLiveOverride(null);
  }, [page?.path]);

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

  const [tocCollapsed, setTocCollapsed] = useState(false);
  const [activeHeading, setActiveHeading] = useState('');
  const headingObserver = useRef<IntersectionObserver | null>(null);

  // Extract headings for table of contents
  const headings = useMemo(() => {
    if (!page) return [];
    const raw = page.content;
    const regex = /^(#{2,4})\s+(.+)$/gm;
    const result: { level: number; text: string; id: string }[] = [];
    let m;
    while ((m = regex.exec(raw)) !== null) {
      const level = m[1].length;
      const text = m[2].trim().replace(/`(.+?)`/g, '$1');
      const id = text
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fff\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      result.push({ level, text, id });
    }
    return result;
  }, [page]);

  // Custom renderers with heading IDs
  const renderers = useMemo(() => ({
    h2: ({ children, ...props }: any) => {
      const text = extractPlainText(children);
      const id = slugify(text);
      return React.createElement('h2', { id, ...props }, children);
    },
    h3: ({ children, ...props }: any) => {
      const text = extractPlainText(children);
      const id = slugify(text);
      return React.createElement('h3', { id, ...props }, children);
    },
    h4: ({ children, ...props }: any) => {
      const text = extractPlainText(children);
      const id = slugify(text);
      return React.createElement('h4', { id, ...props }, children);
    },
  }), []);

  const processedContent = useMemo(() => {
    if (liveOverride) return convertWikilinks(liveOverride);
    if (!page) return '';
    return convertWikilinks(page.content);
  }, [page, liveOverride]);

  // Scroll to top when page changes
  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = 0;
    setActiveHeading('');
  }, [page?.path]);

  // Track visible heading via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container || headings.length === 0) return;

    headingObserver.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        let best = '';
        let bestTop = Infinity;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const top = entry.boundingClientRect.top;
            if (top >= 0 && top < bestTop) {
              bestTop = top;
              best = entry.target.id;
            }
          }
        }
        if (best) setActiveHeading(best);
      },
      { root: container, rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    headingObserver.current = observer;
    return () => observer.disconnect();
  }, [headings, page?.path]);

  const handleTocClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHeading(id);
    }
  };

  // Edit mode handlers
  const startEditing = () => {
    setEditContent(liveOverride || page?.raw || '');
    setEditing(true);
    setEditMsg('');
  };

  const cancelEditing = () => {
    setEditing(false);
    setEditContent('');
    setEditMsg('');
  };

  const saveEditing = async () => {
    if (!page) return;
    setEditSaving(true);
    setEditMsg('');
    try {
      const relPath = page.path.replace(/.*\/wiki\//, 'wiki/');
      const resp = await fetch('/api/save-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: relPath, content: editContent }),
      });
      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || 'save failed');
      }
      setLiveOverride(editContent);
      setEditing(false);
      setEditMsg('✅ 保存成功！');
      setEditSaving(false);
    } catch (err: any) {
      setEditMsg('❌ 保存失败: ' + err.message);
      setEditSaving(false);
    }
  };

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

  // Edit mode: show editor
  if (editing) {
    return (
      <div ref={containerRef} className="content">
        <div className="content-inner">
          <div className="edit-bar">
            <span className="edit-bar-title">编辑: {page.path.replace(/.*\/wiki\//, '')}</span>
            <div className="edit-actions">
              {editMsg && <span className="edit-msg">{editMsg}</span>}
              <button className="edit-btn edit-btn-secondary" onClick={cancelEditing} disabled={editSaving}>取消</button>
              <button className="edit-btn edit-btn-primary" onClick={saveEditing} disabled={editSaving}>
                {editSaving ? '保存中...' : '💾 保存'}
              </button>
            </div>
          </div>
          <textarea
            className="edit-textarea"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            spellCheck={false}
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="content">
      {/* Floating TOC on the right */}
      {headings.length > 2 && (
        <div className="toc-float">
          <button className="toc-toggle" onClick={() => setTocCollapsed(!tocCollapsed)} title="目录">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="toc-toggle-count">{headings.length}</span>
          </button>
          {!tocCollapsed && (
            <div className="toc-float-body">
              <div className="toc-float-header">
                目录
                <button className="toc-close" onClick={() => setTocCollapsed(true)}>✕</button>
              </div>
              <nav className="toc-float-nav">
                {headings.map((h, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`toc-link toc-level-${h.level}${activeHeading === h.id ? ' toc-active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleTocClick(h.id); }}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      )}

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
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
            {processedContent}
          </ReactMarkdown>
        </div>

        {/* Edit button */}
        <button className="edit-page-btn" onClick={startEditing} title="编辑此页面">
          ✏️
        </button>
      </div>
    </div>
  );
}

// Helpers
function extractPlainText(children: any): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractPlainText).join('');
  if (children?.props?.children) return extractPlainText(children.props.children);
  return '';
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
