[Job description](https://www.diverse-team.fr/positions/front-end-analysis/)

| **Topic**          | Web front-end testing. Large scale analysis and techniques improvement |
| ------------------ | ---------------------------------------------------------------------- |
| **Supervisors**    | Arnaud Blouin, Olivier Barais, Djamel-Eddine Khelladi                  |
| **Duration**       | 3 years                                                                |
| **Start Date**     | 01/11/2024                                                             |
| **End (estimate)** | 01/11/2027                                                             |
| **Site**           | Department of Computer Science, University of Rennes 1                 |
## PhD progress

```dataviewjs

const startDate = new Date("2024-12-01");
const endDate = new Date("2027-12-01");
const today = new Date("2025-11-01"); // to empty on starting date
const total = (endDate - startDate) / (1000 * 60 * 60 * 24);
const elapsed = (today - startDate) / (1000 * 60 * 60 * 24);
const progressPerc = Math.min(100, (elapsed / total) * 100).toFixed(2);
const barLength = 28;
const filledLength = Math.round((barLength * progressPerc) / 100);
const emptyLength = barLength - filledLength;
const progressBar = `${'🟩'.repeat(filledLength)}${'🟪'.repeat(emptyLength)} ${progressPerc}%`;
dv.span(progressBar);

```

```dataviewjs

function countNotes(folder) {
    return dv.pages(`"${folder}"`).length;
}

const nBooks = dv.pages("#book").length;
const nPapers = countNotes("02 Literature/papers");
const nRef = countNotes("03 References");
const tot = nBooks + nPapers - nRef;
dv.header(2, 'Read count');
dv.el('li', `Papers: ${nPapers}`);
dv.el('li', `Papers: ${nPapers}`);
dv.header(2, 'Missing references');

if (tot === 0) {
dv.paragraph('<span style="color: #90EE90;">No missing references. Every paper and every book has a reference</span>');
} else {
dv.paragraph(`<span style="color: #ff474c;">Missing references: ${tot}</span>`);
}

```