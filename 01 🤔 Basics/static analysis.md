
| ID       | 2024-07-28-18:28          |
| -------- | ------------------------- |
| **Tags** | #AST #RegEx #codeAnalysis |
# Main concepts

Static Analysis is the automated analysis of the source code that happens ==without executing the code.==

When the analysis is performed during program execution then it is known as [[dynamic analysis]].

Static Analysis is often used to detect:
- Syntax errors
- Security vulnerabilities.
- Performance issues.
- Non-compliance with standards.
- Use of out of date programming constructs.

## How does a Static Analysis tool work?

The basic concept common to all Static Analysis tools is searching source code to identify specific coding patterns that have some sort of warning or information associated with them.

## Static Analysis methods

**Source code parsing technology to create an [[AST (Abstract Syntax Tree)]]**
- AST matching treats the source code as program code, and not just files filled with text, this allows for more specific, contextual matching and can reduce the number of false positives reported against the code.

**Text [[regular expression]] matching**
- Very flexible method, easy to write rules to match, but can often lead to a lot of false positives and the matching rules are ignorant of the surrounding code context.

