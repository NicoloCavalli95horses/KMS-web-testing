async function main(params) {
  const paperFolder = await params.quickAddApi.inputPrompt("Insert the paper's folder");
  const bibCode     = await params.quickAddApi.inputPrompt("Insert a valid BibTeX code");
  const refURL      = await params.quickAddApi.inputPrompt("Insert the paper's URL, if any");

  const bibObj = parseBibTeX(bibCode);
  const paperName = bibObj.title;
  const refName = bibObj.ref;

  if (!paperName || !bibCode || !paperFolder || !refName) { return };

  const refPath = `03 References/${refName}.md`;
  const folderPath = `02 Literature/papers/${paperFolder}`;
  const folderExists = app.vault.getAbstractFileByPath(folderPath);
  const paperPath = `${folderPath}/${paperName}.md`;

  if (!folderExists) {
    await app.vault.createFolder(folderPath);
  }

  const paperContent = getPaperContent(refName);
  const refContent = getRefContent(bibCode, refURL);

  await app.vault.create(refPath, refContent);
  await app.vault.create(paperPath, paperContent);

  app.workspace.openLinkText(paperName, "", true);
  app.workspace.openLinkText(refName, "", true);
};

function parseBibTeX(bibtex) {
  bibtex = bibtex.toString().replace(/\s/g, '');
  const titleMatch = bibtex.match(/,\s*title\s*=\s*{(.*?)}/i);
  const authorMatch = bibtex.match(/,\s*author\s*=\s*{(.*?)}/i);
  const yearMatch = bibtex.match(/,\s*year\s*=\s*{(\d{4})}/i);


  if (!titleMatch || !authorMatch || !yearMatch) {
    throw new Error("BibTeX format invalid or missing required fields");
  }

  const title = titleMatch[1];
  const authors = authorMatch[1].split(/\s+and\s+/i);  // split using 'and' with optional spaces
  const year = yearMatch[1];

  let ref;
  if (authors.length > 1) {
    const firstAuthor = authors[0].split(',')[0];  // Only take the first part of the name
    const secondAuthor = authors[1].split(',')[0];  // Same for the second author
    ref = `(${firstAuthor}, ${secondAuthor}, et al., ${year})`;
  } else {
    const singleAuthor = authors[0].split(',')[0];  // Handle single author case
    ref = `(${singleAuthor}, ${year})`;
  }

  return { title, ref };
}



function getPaperContent(refName) {
  return `---
ID: ${new Date().toISOString().slice(0, 10)}
tags:
  - paper
---
## Context

High-level description of the problem. Use links to low-level notes to specify the context details

## Approach

Describe the paper approach in simple term.

---
#### References
- [[${refName}]]
`;
}


function getRefContent(refURL, bibCode) {
  return `---
ID: ${new Date().toISOString().slice(0, 10)}
tags:
  - ref
---
## External Link

${refURL || ''}

## BibTeX

${bibCode}
`;
}

module.exports = main;