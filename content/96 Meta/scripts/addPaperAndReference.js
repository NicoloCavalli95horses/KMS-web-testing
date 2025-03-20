async function main(params) {
  const paperFolder = await params.quickAddApi.inputPrompt("Insert the paper's folder");
  const bibCode     = await params.quickAddApi.inputPrompt("Insert a valid BibTeX code");
  const refURL      = await params.quickAddApi.inputPrompt("Insert the paper's URL, if any");
  const project     = await params.quickAddApi.inputPrompt("Insert the project name, if any");

  const bibObj = parseBibTeX(bibCode);
  const paperName = bibObj.title;
  const refName = bibObj.ref;
  const paperKeywords = bibObj.keywords;

  if (!paperName || !bibCode || !paperFolder || !refName) { 
    new Notice("Aborted");
    return;
   };

  const refPath = `03 References/${refName}.md`;
  const folderPath = `02 Literature/papers/${paperFolder}`;
  const folderExists = app.vault.getAbstractFileByPath(folderPath);
  const paperPath = `${folderPath}/${paperName}.md`;

  if (!folderExists) {
    await app.vault.createFolder(folderPath);
    new Notice(`Created new ${folderPath} folder`);
  }

  const paperContent = getPaperContent(refName, paperKeywords, project);
  const refContent = getRefContent(refURL, bibCode, project);

  const refExist = app.vault.getAbstractFileByPath(refPath);
  if (refExist) {
    new Notice(`A similar reference was found at: ${refPath}. Unable to solve the merge conflict`);
  } else {
    // Creating files
    await app.vault.create(refPath, refContent);
    new Notice(`Created new reference at: ${refPath}`);
    await app.vault.create(paperPath, paperContent);
    new Notice(`Created new paper's note at: ${paperPath}`);

    // Open new files
    app.workspace.openLinkText(paperName, "", true);
    app.workspace.openLinkText(refName, "", true);
  }
};

function parseBibTeX(bibtex) {
  bibtex = bibtex.toString();
  const titleMatch = bibtex.match(/,\s*title\s*=\s*{\s*(.*?)\s*}/i);
  const authorMatch = bibtex.match(/,\s*author\s*=\s*{\s*(.*?)\s*}/i);
  const yearMatch = bibtex.match(/,\s*year\s*=\s*{\s*(\d{4})\s*}/i);
  const keywordsMatch = bibtex.match(/,\s*keywords\s*=\s*{\s*(.*?)\s*}/i);
  const keywords = keywordsMatch ? keywordsMatch[1].split(/\s*;\s*/) : [];


  if (!titleMatch || !authorMatch || !yearMatch) {
    new Notice("BibTeX format invalid or missing required fields");
    return;
  }

  const title = titleMatch[1].replace(/[*"\\/<>:|?]/g, '.');
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

  return { title, ref, keywords };
}



function getPaperContent(refName, keywords = [], project) {
  return `---
ID: ${new Date().toISOString()}
tags: paper ${toCamelCase(keywords)}
${project ? '\nProject:\n - ' + project : ''}
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


function getRefContent(refURL, bibCode, project) {
  return `---
ID: ${new Date().toISOString()}
tags: ref
${project ? '\nProject:\n - ' + project : ''}
---
## External Link

${refURL || ''}

## BibTeX

${bibCode}
`;
}

function toCamelCase(arr) {
  return arr
    .map(tag => 
      tag
        .replace(/\./g, '')
        .split(/\s+/)
        .map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('')
    )
    .join(' ');
}

module.exports = main;