import { useState, useRef, useEffect } from 'react';
import type { SearchResult } from '../types';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  onSearch: (query: string) => SearchResult[];
  onSelect: (path: string) => void;
}

export function SearchModal({ open, onClose, onSearch, onSelect }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setResults([]);
      setSelectedIdx(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx((i) => Math.max(i - 1, 0)); }
      if (e.key === 'Enter' && results[selectedIdx]) { onSelect(results[selectedIdx].path); onClose(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, results, selectedIdx, onClose, onSelect]);

  const handleChange = (val: string) => {
    setQuery(val);
    setSelectedIdx(0);
    setResults(val.length >= 2 ? onSearch(val) : []);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-input">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="搜索页面、概念、实体..."
          />
          <kbd style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: 'var(--surface)', color: 'var(--text-muted)' }}>ESC</kbd>
        </div>
        <div className="modal-results">
          {results.length === 0 && query.length >= 2 && <div className="modal-empty">未找到匹配结果</div>}
          {results.length === 0 && query.length < 2 && <div className="modal-empty">输入至少 2 个字符搜索</div>}
          {results.map((r, i) => (
            <button
              key={r.path}
              onClick={() => { onSelect(r.path); onClose(); }}
              className={'modal-result' + (i === selectedIdx ? ' sel' : '')}
            >
              <div className="rtitle">{r.title}</div>
              <div className="rsnippet">{r.snippet}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
