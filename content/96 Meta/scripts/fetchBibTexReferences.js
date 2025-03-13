
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
  // Get the custom property that identifies the references
  const key = await params.quickAddApi.inputPrompt("Insert the project's name (e.g., SLR)");
  const bibtexEntries = [];
  let filesChecked = 0;

  if (!key) {
    new Notice("Aborted");
    return;
  }

  // Get all the notes
  const files = app.vault.getMarkdownFiles();

  for (let file of files) {
    filesChecked++;
    const content = await app.vault.read(file);

    // Get the YAML header
    const yamlHeader = content.match(/^---\n([\s\S]+?)\n---/);
    if (!yamlHeader) { continue; }

    // Convert the YAML header to an object
    const yamlData = YAMLtoObject(yamlHeader[1]);

    // Consider all the notes that are references and that contain the custom property
    if (!yamlData.tags.includes('ref') || !yamlData?.Project?.includes(key)) { continue; }

    let match = content.match(/@[\s\S]*/); // everything that follows '@'
    if (!match) { continue; }

    bibtexEntries.push(match[0]);
  }

  if (bibtexEntries.length === 0) {
    new Notice("No BibTeX was found");
    return;
  }

  new Notice(`${bibtexEntries.length} BibTeX found in ${filesChecked} files`);

  // Create the .bib file
  const bibFilePath = `99 Output/${key}.bib`;

  if (await app.vault.adapter.exists(bibFilePath)) {
    await app.vault.adapter.remove(bibFilePath);
  }
  
  await app.vault.create(bibFilePath, bibtexEntries.join("\n\n"));

  new Notice(`File BibTeX created at: ${bibFilePath}`);
}

module.exports = main;
