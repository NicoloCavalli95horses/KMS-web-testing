
function YAMLtoObject(yamlText) {
  let yamlLines = yamlText.split("\n");
  let yamlData = {};
  let currentKey = null;

  yamlLines.forEach(line => {
    let trimmedLine = line.trim();

    if (trimmedLine.startsWith("-")) {
      if (currentKey) {
        yamlData[currentKey].push(trimmedLine.substring(1).trim());
      }
    } else {
      let [key, ...value] = line.split(":");
      if (key && value) {
        let cleanKey = key.trim();
        let cleanValue = value.join(":").trim();

        if (cleanValue === "") {
          yamlData[cleanKey] = [];
          currentKey = cleanKey;
        } else {
          yamlData[cleanKey] = cleanValue;
          currentKey = null;
        }
      }
    }
  });

  return yamlData;
}


async function main(params) {
  const vault = app.vault;

  // Request file name
  const fileName = await params.quickAddApi.inputPrompt("Insert the BibTex file name (without extension)");
  if (!fileName) {
    new Notice("Aborted");
    return;
  }

  let bibtexEntries = [];
  let filesChecked = 0;

  const files = vault.getMarkdownFiles();

  for (let file of files) {
    filesChecked++;
    let content = await vault.read(file);

    const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);
    if (!frontmatterMatch) { continue; }

    const yamlData = YAMLtoObject(frontmatterMatch[1]);
    const isMatch = yamlData.tags.includes('ref') && !!yamlData['SLR'];

    if (isMatch) {
      console.log(`Match found: ${file.path}`);

      let match = content.match(/@[\s\S]*/); // everything that follows '@'
      if (match) {
        bibtexEntries.push(match[0]);
      }
    }
  }

  if (bibtexEntries.length === 0) {
    new Notice("No BibTeX was found");
    return;
  }

  new Notice(`${bibtexEntries.length} BibTeX found in ${filesChecked} files`);

  const bibFilePath = `99 Output/${fileName}.bib`;
  await vault.create(bibFilePath, bibtexEntries.join("\n\n"));

  new Notice(`File BibTeX created at: ${bibFilePath}`);
}

module.exports = main;
