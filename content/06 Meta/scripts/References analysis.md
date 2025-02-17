---
ID: 2025-02-17-15:38
tags:
  - meta
  - script
---
### Notes analysis

```dataviewjs
const antilibNotes = dv.pages(`"00 Antilibrary"`);
const reviewedNotes = dv.pages(`"01 Notes"`);
const paperNotes = dv.pages(`"02 Literature/papers"`);
const totNotes = antilibNotes.length+reviewedNotes.length+paperNotes.length;

const relAntilibraryNotes = (antilibNotes.length*100/totNotes).toFixed(2);
const relReviewedNotes = (reviewedNotes.length*100/totNotes).toFixed(2);
const relPaperNotes = (paperNotes.length*100/totNotes).toFixed(2);

dv.table(
    ["Category", "Total Notes", "Percentage"],
    [
        ["Antilibrary Notes", antilibNotes.length, `${relAntilibraryNotes}%`],
        ["Reviewed Notes", reviewedNotes.length, `${relReviewedNotes}%`],
        ["Papers", paperNotes.length, `${relPaperNotes}%`],
        [ "Total", totNotes, "100%"]
    ]
);
```

### Papers from year

```dataviewjs
const folderPath = dv.pages(`"03 References"`);
const yearPattern = /\b(19\d{2}|20\d{2}|2100)\b/;
const tot = folderPath.length;

let yearCounts = {};

for (let note of folderPath) {
  let match = note.file.name.match(yearPattern);
  if (match) {
    let year = match[1];
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  }
}

let sortedYears = Object.entries(yearCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([year, count]) => [year, count, ((count / tot) * 100).toFixed(2) + "%"]); 

dv.table(["Years", "N. of References", "Frequency (%)"], sortedYears);
```
