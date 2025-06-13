---
ID: 2025-06-13T09:42:13.835Z
tags:
  - paper
  - taintAnalysis
  - dynamicAnalysis
  - JavaScript
Rank: A*
---
## Context

Web applications are frequently the target of cyberattacks, and subtle bugs in JavaScript can lead to many dangerous vulnerabilities, including [[format string attack]], [[SQLIA (SQL injection attack)]], [[XSS (cross site scripting)]], command injection (shell code), [[directory traversal (path traversal)]]

[[DTA (dynamic taint analysis)]] has a long history of detecting the above vulnerabilities

Many existing DTA tools for JavaScript do not support the JavaScript language features introduced in ECMAScript 7

**Contribution**
In this paper, we present Augur, a dynamic taint analysis tool for JavaScript. The technique underpinning Augur is one of VM-supported instrumentation; Augur is implemented in the NodeProf framework for GraalVM, which exposes a stable instrumentation API upon which to build a dynamic analysis.

JavaScript instrumentation can be done:
- via program rewriting
- via VM modification/browser modification

## Approach

AUGUR first instruments JS to produce instructions for a stack machine. The stack machine is then responsible for ==finding the information flows==

## Evaluation

We ran AUGUR on a benchmark suite comprised of 22 real JavaScript applications known to present 2 common injection vulnerabilities in JavaScript: eval (evaluates arbitrary code) and exec (executes arbitrary shell commands

AUGUR outperforms a similar tool (Ichnaea) on 17 of the 20 benchmarks

---
#### References
- [[(Aldrich, Turcotte, et al., 2023)]]
- open source repo at https://github.com/nuprl/augur