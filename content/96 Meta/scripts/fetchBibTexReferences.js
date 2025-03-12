async function main(params) {
  const vault = app.vault;

  // Request file name
  const fileName = await params.quickAddApi.inputPrompt("Inserisci il nome del file BibTeX (senza estensione)");
  if (!fileName) {
    new Notice("Operazione annullata.");
    return;
  }

  let bibtexEntries = [];
  let filesChecked = 0; // Contatore per le note esaminate

  // 2️⃣ Scansiona tutte le note Markdown
  const files = vault.getMarkdownFiles();
  console.log(`📂 Trovati ${files.length} file Markdown nel vault.`);

  for (let file of files) {
    filesChecked++;
    let content = await vault.read(file);

    // 🛠️ Estrai il frontmatter YAML
    const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);
    let tags = [];
    let slrExists = false;

    if (frontmatterMatch) {
      try {
        let yamlData = jsyaml.load(frontmatterMatch[1]); // Converte YAML in oggetto JS
        tags = yamlData.tags || [];
        slrExists = yamlData.slr !== undefined; // Controlla se la proprietà SLR esiste
      } catch (error) {
        console.error(`⚠️ Errore parsing YAML in ${file.path}:`, error);
      }
    }

    // Controlla se la nota contiene il tag #ref e la proprietà slr
    if (tags.includes("#ref") && slrExists) {
      console.log(`✅ MATCH trovato in: ${file.path}`);

      // Cerca il codice BibTeX (tutto ciò che segue '@')
      let match = content.match(/@[\s\S]*/);
      if (match) {
        console.log(`📌 BibTeX estratto da ${file.path}`);
        bibtexEntries.push(match[0]); // Salva il codice BibTeX
      } else {
        console.log(`⚠️ Nessun BibTeX trovato in ${file.path}`);
      }
    }
  }

  console.log(`🔎 ${filesChecked} file controllati.`);
  console.log(`📚 ${bibtexEntries.length} codici BibTeX trovati.`);

  if (bibtexEntries.length === 0) {
    new Notice("Nessun codice BibTeX trovato.");
    return;
  }

  // 3️⃣ Salva il file BibTeX
  const bibFilePath = `SLR web application security/${fileName}.bib`;
  console.log(`💾 Salvataggio file BibTeX: ${bibFilePath}`);
  await vault.create(bibFilePath, bibtexEntries.join("\n\n"));

  new Notice(`File BibTeX creato: ${bibFilePath}`);
}

module.exports = main;
