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
- **textual similarity approaches**: the main principle of textual similarity methods is finding matches between examined code instances, and a known vulnerable code dataset
- **semantic similarity approaches**: use previously discovered vulnerable code to extract vulnerable behaviors and develop patterns of this behavior in an abstracted representation

### Tools

- **SonarQube**: a static analysis tool to detect bugs, vulnerabilities and code smells
- **ESlint**: a JavaScript linting tool that aims at identifying and correcting syntax issues
- **Coverity**: a defect detector available for several programming languages

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

---
## References
- [[(Kluban, Mannan, et al., 2024)]]