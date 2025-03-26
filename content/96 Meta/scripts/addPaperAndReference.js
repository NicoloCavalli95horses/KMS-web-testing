//==============================
// Import
//==============================

const fs = require('fs');
const path = require('path');


//==============================
// Functions
//==============================

async function main(params) {
  // Select a paper or create one (mandatory)
  const paperFolder = await selectOrCreateFolder(params);

  if (!paperFolder) {
    new Notice("Invalid paper folder");
    return;
  };

  // Provide a valid bibCode
  const bibCode = await params.quickAddApi.inputPrompt("Insert a valid BibTeX code");

  if (!bibCode) {
    new Notice("Invalid bibCode");
    return;
  };

  // Provide ref URL and project (not mandatory)
  const refURL = await params.quickAddApi.inputPrompt("Insert the paper's URL, if any");
  const project = await params.quickAddApi.inputPrompt("Insert the project name, if any");

  const bibObj = parseBibTeX(bibCode);
  const noteTitle = bibObj.title;
  const bibRef = bibObj.ref;
  const tags = bibObj.tags;

  const refPath = `03 References/${bibRef}.md`;
  const folderPath = `02 Literature/papers/${paperFolder}`;
  const folderExists = app.vault.getAbstractFileByPath(folderPath);
  const paperPath = `${folderPath}/${noteTitle}.md`;

  if (!folderExists) {
    await app.vault.createFolder(folderPath);
    new Notice(`Created new ${folderPath} folder`);
  }

  const paperContent = getPaperContent({ ref: bibRef, tags, project });
  const refContent = getRefContent({ url: refURL, bibCode, project });

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
    app.workspace.openLinkText(noteTitle, "", true);
  }
};


/**
 * Select or create a new folder that will contain the new paper
 */
async function selectOrCreateFolder(params) {
  const folders = await getPapersFolders();
  const NEW_FOLDER = "➕ New folder...";
  const options = [NEW_FOLDER, ...folders];
  const selectedFolder = await params.quickAddApi.suggester(options, options);

  return selectedFolder === NEW_FOLDER
    ? await params.quickAddApi.inputPrompt("Insert the new folder name")
    : selectedFolder
}

/**
 * Return all the folders that contain papers
 */
async function getPapersFolders() {
  const parentFolder = app.vault.adapter.getFullPath("02 Literature/papers");
  try {
    const subfolders = fs.readdirSync(parentFolder, { withFileTypes: true }).filter(dir => dir.isDirectory()).map(dir => dir.name);
    return subfolders;
  } catch (error) {
    console.error("Unable to read folders: ", error);
    return;
  }
}

/**
 * Parse the bibtex code and return an object
 * @param {string} bibtex 
 * @returns an object { title, ref, tags }
 */
function parseBibTeX(bibtex) {
  bibtex = bibtex?.toString();
  const titleMatch = bibtex.match(/,\s*title\s*=\s*{\s*(.*?)\s*}/i);
  const authorMatch = bibtex.match(/,\s*author\s*=\s*{\s*(.*?)\s*}/i);
  const yearMatch = bibtex.match(/,\s*year\s*=\s*{\s*(\d{4})\s*}/i);
  const tagsMatch = bibtex.match(/,\s*keywords\s*=\s*{\s*(.*?)\s*}/i);
  const tags = tagsMatch ? tagsMatch[1].split(/\s*;\s*/) : [];


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

  return { title, ref, tags };
}


/**
 * Get paper note content in .md
 * @param {Object} obj
 * @param {string} obj.ref      - The link to the ref note
 * @param {string} obj.tags - The tags associated with the paper
 * @param {string} obj.project  - The project to which the paper belongs
 */
function getPaperContent({ ref, tags = [], project }) {
  return `---
ID: ${new Date().toISOString()}
tags: paper ${toCamelCase(tags) + ' project'+ project }
${project ? '\nProject:\n - ' + project : ''}
---
## Context

High-level description of the problem. Use links to low-level notes to specify the context details

## Approach

Describe the paper approach in simple term.

---
#### References
- [[${ref}]]
`;
}


/**
 * Get ref note content in .md
 * @param {Object} obj
 * @param {string} obj.url     - The URL of the ref
 * @param {string} obj.bibCode - The research bibCode
 * @param {string} obj.project - The project to which the paper belongs
 */
function getRefContent({ url, bibCode, project }) {
  return `---
ID: ${new Date().toISOString()}
tags: ref
${project ? '\nProject:\n - ' + project : ''}
---
## External Link

${url || ''}

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