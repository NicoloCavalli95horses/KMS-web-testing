```dataviewjs
const antilibNotes = dv.pages(`"00 Antilibrary"`);
const reviewedNotes = dv.pages(`"01 Notes"`);
const paperNotes = dv.pages(`"02 Literature/papers"`);
const totNotes = antilibNotes.length+reviewedNotes.length+paperNotes.length;

const relAntilibraryNotes = (antilibNotes.length*100/totNotes).toFixed(2);
const relReviewedNotes = (reviewedNotes.length*100/totNotes).toFixed(2);
const relPaperNotes = (paperNotes.length*100/totNotes).toFixed(2);

dv.paragraph(`Tot. notes: ${totNotes}`);

dv.paragraph(`Tot. antilibrary notes: ${antilibNotes.length} (${relAntilibraryNotes}%)`);

dv.paragraph(`Tot. reviewed notes: ${reviewedNotes.length} (${relReviewedNotes}%)`);

dv.paragraph(`Tot. papers: ${paperNotes.length} (${relPaperNotes}%)`);

dv.table(
    ["Category", "Total Notes", "Percentage"],
    [
        ["Tot. Notes", totNotes, "100%"], 
        ["Tot. Antilibrary Notes", antilibNotes.length, `${relAntilibraryNotes}%`],
        ["Tot. Reviewed Notes", reviewedNotes.length, `${relReviewedNotes}%`],
        ["Tot. Papers", paperNotes.length, `${relPaperNotes.}%`]
    ]
);
```
