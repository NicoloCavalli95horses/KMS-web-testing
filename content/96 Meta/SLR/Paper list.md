---
ID: 2025-03-13-14:31
tags:
  - meta
---
```dataviewjs
const data = dv.pages("#projectSLR")
    .map(p => ({
        name: dv.fileLink(p.file.path),
        date: p.ID ? new Date(p.ID) : null 
    }))
    .sort((a, b) => (b.date || 0) - (a.date || 0))
    .map(p => [p.name, p.date ? p.date.toLocaleDateString("it-IT") : "N/A"]);

dv.table(["Name", "Date"], data);
```



































































