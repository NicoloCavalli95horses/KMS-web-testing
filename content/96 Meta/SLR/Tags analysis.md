---
ID: 2025-03-13-14:31
tags:
  - meta
---
```dataviewjs
const GENERAL_TAGS = ['paper', 'cyberSecurity', 'projectSLR'];
let pages = dv.pages("#projectSLR");

let tagCounts = {};

pages.forEach(p => {
    if (p.tags.length) {
        p.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    }
});

GENERAL_TAGS.forEach(t => delete tagCounts[t])

dv.table(["Tag", "Count"], Object.entries(tagCounts).sort((a, b) => b[1] - a[1]));
```
















































