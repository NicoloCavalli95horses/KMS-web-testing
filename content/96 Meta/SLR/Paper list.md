---
ID: 2025-03-13-14:31
tags:
  - meta
---
```dataviewjs
dv.table(["Name", "Date"], 
    dv.pages()
        .filter(p => p.Project && p.Project.includes("SLR") && p.tags && p.tags.includes("paper"))
        .map(p => ({
            name: dv.fileLink(p.file.path),
            date: p.ID ? new Date(p.ID) : null 
        }))
        .sort((a, b) => (b.date || 0) - (a.date || 0))
        .map(p => [p.name, p.date ? p.date.toLocaleDateString("it-IT") : "N/A"])
);
```





















































