#!/usr/bin/env bash
# 重新生成 wiki/tags-index.md — 从所有 wiki 页面的 frontmatter tags 构建标签索引
set -euo pipefail
cd "$(dirname "$0")/.."

python3 << 'PYEOF'
import os, re
from collections import defaultdict

wiki_dir = 'wiki'
tags = defaultdict(list)

for root, dirs, files in os.walk(wiki_dir):
    for fname in files:
        if not fname.endswith('.md'):
            continue
        fpath = os.path.join(root, fname)
        relpath = os.path.relpath(fpath, 'wiki')
        if relpath in ('index.md', 'log.md', 'tags-index.md'):
            continue
        
        with open(fpath, 'r') as f:
            content = f.read()
        
        fm = {}
        if content.startswith('---'):
            end = content.find('---', 3)
            if end > 0:
                fm_text = content[3:end]
                for line in fm_text.strip().split('\n'):
                    m = re.match(r'^(\w[\w_-]*):\s*(.+)$', line)
                    if m:
                        key = m.group(1)
                        val = m.group(2).strip()
                        if val.startswith('[') and val.endswith(']'):
                            val = [v.strip().strip("'\"") for v in val[1:-1].split(',')]
                        fm[key] = val
        
        title_m = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        title = title_m.group(1).strip() if title_m else (fm.get('title', '') or fname.replace('.md', ''))
        
        page_tags = fm.get('tags', [])
        if isinstance(page_tags, str):
            page_tags = [t.strip() for t in page_tags.split(',')]
        if not isinstance(page_tags, list):
            page_tags = []
        
        for tag in page_tags:
            tags[tag].append((relpath, title))

lines = ['# 标签索引', '', '> 按标签浏览 Wiki 页面，自动生成。', '', '---', '']
for tag in sorted(tags.keys()):
    pages = sorted(tags[tag], key=lambda x: x[1])
    lines.append(f'## {tag}')
    lines.append('')
    for relpath, title in pages:
        safe_path = relpath.replace('\\', '/')
        lines.append(f'- [{title}]({safe_path})')
    lines.append('')

with open(os.path.join(wiki_dir, 'tags-index.md'), 'w') as f:
    f.write('\n'.join(lines) + '\n')

print(f"✅ tags-index.md 已更新：{len(tags)} 个标签")
PYEOF