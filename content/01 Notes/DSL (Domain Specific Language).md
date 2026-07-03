---
ID: 2026-07-03
tags:
  - "#definition"
  - DSL
  - programmingLanguage
---
## Definition

Each programming language is tailored to a specific domain to better meet its needs
- eg., JavaScript is helpful in the web, because easily permits async operations, C is helpful in embedded systems, because it permits a precise control over memory layout

 A Domain-Specific Language is simply a programming language that is extremely optimized for a given class of problems, called a **domain**. It is based on abstractions that are closely aligned with the domain for which the language is built.

Examples of DSL:
- CSS
- HTML
- R
- SQL

However, if every general programming language is, a bit, a DSL, not all DSLs are general programming languages (Turing complete)
- this may happen for security reasons (eg. would be risky to write general purpose functions in pure CSS)

**Why introducing a DSL?**
- get rid of all the unnecessary clutter and solve an essential problem in a clear way
- define a notation that makes more sense in the context you are trying to work
- with a DSL you can introduce static analyses and checks, code completion, syntax highlighting, to ease the writing of the DSL according to your needs


---
#### References
- https://voelter.de/data/books/markusvoelter-dslengineering-1.0.pdf