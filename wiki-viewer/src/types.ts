export interface PageEntry {
  title: string;
  path: string;
  summary: string;
  tags: string[];
}

export interface Category {
  name: string;
  pages: PageEntry[];
  collapsed: boolean;
}

export interface PageMeta {
  type?: string;
  tags: string[];
  created?: string;
  updated?: string;
  title: string;
}

export interface WikiPage {
  path: string;
  meta: PageMeta;
  content: string;
  raw: string;
}

export interface SearchResult {
  title: string;
  path: string;
  snippet: string;
  score: number;
}
