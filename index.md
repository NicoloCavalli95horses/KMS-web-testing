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
const today = new Date(); // to empty on starting date
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

const countNotes = (folder) => dv.pages(`"${folder}"`).length;
const nBooks = dv.pages("#book").length;
const nPapers = countNotes("02 Literature/papers");
const nRef = countNotes("03 References");

dv.table(["Category", "Count"], [
  ["Papers read", nPapers],
  ["Books read", nBooks],
]);


```