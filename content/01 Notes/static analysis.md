---
ID: 2024-07-28-18:28
tags:
  - definition
  - codeAnalysis
  - AST
  - RegEx
---
## Main concepts

Static Analysis is the automated analysis of the source code that happens ==without executing the code.==

When the analysis is performed during program execution then it is known as [[dynamic analysis]].

Static Analysis is often used to detect:
- Syntax errors
- Conventional rules violations
- Bug and issues
- Security vulnerabilities
- Performance issues
- Non-compliance with standards
- Use of deprecated programming constructs

### Types of static analysis

From [[(Kluban, Mannan, et al., 2024)]]:

**Textual similarity approaches**
The main principle of textual similarity methods is finding ==matches between examined code instances, and a known vulnerable code dataset.==
The instances are usually represented in a generalized version, e.g., bag-of-tokens, [[AST (Abstract Syntax Tree)]], and then compared:
- directly
- using transformations such as cryptographic hashing or vectorization (e.g., with Word2Vec)
- using other abstract representations, such as CFG (Control Flow Graph), or PDG (Program Dependency Graph)
- context-sensitive hashing may be used to allow limited alterations in the examined code 

**Semantic similarity approaches**
These methods detect semantic (functional) similarities by searching for vulnerability patterns and can be divided into two categories based on how patterns are developed:
- **manual**: developed by researcher for ad-hoc situations or specific
- **automated**:

### Methods

**Source code parsing technology to create an [[AST (Abstract Syntax Tree)]]**
- AST matching treats the source code as program code, and not just files filled with text, this allows for more specific, contextual matching and can reduce the number of false positives reported against the code.

**Text [[RegEx (Regular Expression)]] matching**
- Very flexible method, easy to write rules to match, but can often lead to a lot of false positives and the matching rules are ignorant of the surrounding code context.

### Advantages

- Fast error detection, especially syntax ones (see [[static invariants]])
- Automation of the process
- More efficient than dynamic analysis and therefore more suitable for large scale analysis

### Limits

- **False positives**: errors or issues that are not really errors can be mistakenly detected because the program logic is not actually followed
- **Blindness**: runtime errors cannot be detected

### Tools

- **SonarQube**: a static analysis tool to detect bugs, vulnerabilities and code smells
- **ESlint**: a JavaScript linting tool that aims at identifying and correcting syntax issues
- **Coverity**: a defect detector available for several programming languages

---
## References
- [[(Kluban, Mannan, et al., 2024)]]