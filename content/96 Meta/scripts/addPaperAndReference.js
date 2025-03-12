async function main(params) {
  const paperName   = await params.quickAddApi.inputPrompt("Insert the full title of the scientific paper");
  const paperFolder = await params.quickAddApi.inputPrompt("Insert the paper's folder");
  const refName     = await params.quickAddApi.inputPrompt("Insert the reference title. Example: (Rossi et al., 2024)");
  const refURL      = await params.quickAddApi.inputPrompt("Insert the reference URL, if any");
  const bibCode     = await params.quickAddApi.inputPrompt("Insert a valid BibTeX code");
  
  if (!paperName || !refName || !bibCode || !paperFolder) {return};
  
  const refPath   = `03 References/${refName}.md`;
  const folderPath = `02 Literature/papers/${paperFolder}`;
  const folderExists = app.vault.getAbstractFileByPath(folderPath);
  const paperPath = `${folderPath}/${paperName}.md`;

  if (!folderExists) {
    await app.vault.createFolder(folderPath);
  }

  const paperContent = `---
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
    
    const refContent = `---
ID: ${new Date().toISOString().slice(0, 10)}
tags:
  - ref
---
## External Link

${refURL || ''}

## BibTeX

${bibCode}
`;
   
  await app.vault.create(refPath, refContent);
  await app.vault.create(paperPath, paperContent);

  app.workspace.openLinkText(paperName, "", true);
  app.workspace.openLinkText(refName, "", true);
};


module.exports = main;