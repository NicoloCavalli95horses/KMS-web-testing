---
ID: 2025-12-12T09:47:28.473Z
tags:
  - paper
  - SPA
  - React
  - XSS
  - BAC
  - graphModel
Rank: A*
Project:
  - BAC-SPA
---
## Context

React uses a syntax extension to JavaScript, called JSX (JavaScript and XML), which embeds HTML snippets as part of JavaScript and models them as components, thus reducing web developers’ efforts in maintaining and synchronizing state. While React has revolutionized web application design, React applications—just like traditional web applications—may still be vulnerable to classic vulnerabilities such as [[XSS (cross site scripting)]].
- However, many state-of-the-art works on web application vulnerability detection, such as FAST and ODGen, cannot detect React application vulnerabilities because 1) they do not support JSX 2) they cannot scale to JavaScript code that is transpiled from simple JSX due to state explosion
- CodeQL is a commercial tool that support JSX and that has been used to find vulnerabilities in React applications. However, CodeQL does not fully support the complex react data flow, failing to understand  props and state in different components. Consequently, many false negatives are reported by the tool

In this paper, we design a framework, called ReactAppScan, to mine React application vulnerabilities via a so-called Component Graph (CoG).

Our key idea is to ==represent React components, together with props and state, in a graph== so that one object instance — no matter as props or state of different components—has ==only one node representation but multiple edges from different props or state in the graph==.

**ReactAppScan** ==queries the graph for paths between sources== (e.g., HTTP requests) and ==vulnerability-specific sinks== (e.g., `dangerouslySetInnertHTML`) to detect vulnerabilities.

## Approach


## Evaluation


## Results


## Limits


---
#### References
- [[(Guo, Kang, et al., 2024)]]
