---
ID: 2025-02-17-15:37
tags:
  - meta
  - script
---
### Time tracker

```dataviewjs

const t1 = new Date("2024-12-01"); // start
const t2 = new Date("2027-12-01"); // end
const now = new Date();
const totalDuration = t2 - t1;
const elapsedDuration = now - t1;

let progressPerc = (elapsedDuration / totalDuration) * 100;
progressPerc = Math.min(Math.max(progressPerc, 0), 100);

// HTML progress bar
const progressBar = `
  <div style="background-color: #f3f3f3; border: 1px solid #ccc; border-radius: 5px; width: 100%; height: 20px;">
    <div style="background-color: green; height: 100%; width: ${progressPerc}%; border-radius: 4px;"></div>
  </div>
`;

dv.paragraph(`PhD progress: ${progressPerc.toFixed(2)}%`);
dv.paragraph(progressBar);
```

