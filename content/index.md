---
title: Web front-end testing
ID: index
tags:
  - index
  - homepage
---

| **Topic**          | Web front-end testing. Large scale analysis and techniques improvement |
| ------------------ | ---------------------------------------------------------------------- |
| **Supervisors**    | Arnaud Blouin, Olivier Barais, Djamel-Eddine Khelladi                  |
| **Duration**       | 3 years                                                                |
| **Start Date**     | 01/12/2024                                                             |
| **End (estimate)** | 01/12/2027                                                             |
| **Site**           | Institute for Research in Computer Science and Random Systems IRISA    |
## Project structure

**00 Antilibrary**
An antilibrary is a collection of books that are owned but have not yet been read. The term was coined by Nassim Nicholas Taleb in *The Black Swan: The Impact of the Highly Improbable*. Hence, the antilibrary includes all the notes that are not yet written.

**01 Notes**
All notes taken so far. Each note has a unique ID and one or more tags that classify its content, making it easier to find notes related to the same topic.

 **02 Literature**
Books and articles are summarized here. The main concepts and ideas extracted from articles or books are linked to notes included in the previous section.

**03 References**
This folder includes all references used by articles or notes in general. References are in `BibTeX` format and (may) include a link to the original source, if any.

 **04 Canvases**
This folder includes all canvases used to summarize or map concepts

**05 Dataset**
This folder includes datasets or links to dataset

**06 Courses, Webinars**
This folder includes courses and webinars notes

**96 Meta**
This folder includes `dataviewjs` scripts used to analyze the notes and to get useful statistics

**98 Templates**
Templates are boilerplate notes to standardize the note taking process.

## Scientific paper notes workflow

A new paper is taken into consideration
- The paper reference is inserted into `03 References`, with its `BibTeX` ID
- A new note is inserted in `02 Literature/papers`. If a relevant sub-folder is not found, a new folder must be created
- The paper's notes are build on top of the `Temp_Literature` template
- The paper's main concepts and the author's approach to the problem belongs to the paper's note scope, whereas the details of the topic addressed by the study belong to `01 Notes`. The latter includes low-level note, while `02 Literature/papers` just highlights the unique approach or the solution proposed by the authors. In this way *low-level concepts grow in details and nuances as more papers are added*
- Low-level notes always include references to documents that discuss that concept. This references are both in the paragraph, justifying important statements, and in the footer, referring to the context in which that concept was addressed. I.e., [[cookie]] banners and [[XSS (cross site scripting)]] (Klein, Musch, et al., 2022).
- Each document and note must have its own `tags`, which facilitate the process of information retrieval
- Custom property might be added to group specific papers. For example, papers that are actually part of a [[SLR (systematic literature review)]] present the property `SRL`, whose value is the URL of the OverLeaf project. This ease the retrieval of all the scientific studies used in a specific project. Obviously, a paper may be part of more projects: in this case, a new custom property is added
- Custom `Bookmarks` are added when new custom properties are nedded


---
## Contacts

[GitHub](https://github.com/NicoloCavalli95horses) | [LinkedIn](https://www.linkedin.com/in/nicolo-cavalli/) | [Portfolio](https://nicolocavalli.com/)
