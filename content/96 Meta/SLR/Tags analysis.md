---
ID: 2025-03-13-14:31
tags:
  - meta
---
```dataviewjs
let pages = dv.pages()
    .filter(p => p.Project && p.Project.includes("SLR") && p.tags && p.tags.includes("paper"));

let tagCounts = {};

pages.forEach(p => {
    if (p.tags.length) {
        p.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    }
});

delete tagCounts["paper"];

dv.table(["Tag", "Count"], Object.entries(tagCounts).sort((a, b) => b[1] - a[1]));
```






























