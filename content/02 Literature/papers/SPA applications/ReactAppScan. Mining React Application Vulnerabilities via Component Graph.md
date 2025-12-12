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

React uses a syntax extension to JavaScript, called JSX (JavaScript and XML), which embeds HTML snippets as part of JavaScript and models them as components, thus reducing web developers’ efforts in maintaining and synchronizing state. 

While React has revolutionized web application design, React applications—just like traditional web applications—may still be vulnerable to classic vulnerabilities such as [[XSS (cross site scripting)]].
- However, many state-of-the-art works on web application vulnerability detection, such as FAST and ODGen, cannot detect React application vulnerabilities because 1) they do not support JSX 2) they cannot scale to JavaScript code that is transpiled from simple JSX due to state explosion
- CodeQL is a commercial tool that support JSX and that has been used to find vulnerabilities in React applications. However, CodeQL does not fully support the complex react data flow, failing to understand  props and state in different components. Consequently, many false negatives are reported by the tool

In this paper, we design a framework, called ReactAppScan, to mine React application vulnerabilities via a so-called **Component Graph (CoG).**

Our key idea is to ==represent React components, together with props and state, in a graph== so that one object instance — no matter as props or state of different components—has ==only one node representation but multiple edges from different props or state in the graph==.

**ReactAppScan** ==queries the graph for paths between sources== (e.g., HTTP requests) and ==vulnerability-specific sinks== (e.g., `dangerouslySetInnerHTML`) to detect vulnerabilities.

The tool performs advanced [[static analysis]] in the form of abstract interpretation

## Approach

Finding XSS in React is not simple. A simplified scenario is derived from CVE-2023-22462. Let's consider a blog application: 
- the user can save a new article
- the article is rendered without proper sanification, and the content is served as HTML using `dangerouslySetInnerHTML` (XSS sink for React)

There are three main research challenges in detecting this XSS vulnerability in React:
- there are more than one data flow to monitor
- the vulnerability appears only when `dangerouslySetInnerHTML` is invoked
- client-server communication is involved, i.e. only with certain data retrieved via fetch we have a real vulnerability, and we need to distinguish between attacker-controlled server (stored XSS) and independent server behavior (i.e, a fixed constant response)
- the same keyword (eg., `content`) has a very different meaning during the flow (in the scenario, content is used both for DB reading and writing)

In a nutshell, our objective is ==to find data flows== from user input (i.e., the req object) to a sensitive [[sink function]]

ReactAppScan models React components as a CoG: all components, e.g., `BlogDetail` and `BlogContent`, are modeled as nodes following their parent-child relations. The states and props of components are also represented as nodes under the component nodes.

The proposed CoG is complementary to and can be combined with existing program analysis data structures, such as **Object Dependence Graph (ODG)**, **Code Property Graph (CPG)**, or **Program Dependency Graph (PDG).**

**Threat model**
- The adversary attacks the server of the vulnerable React application by sending a malicious request, which could be saved into the databased and served to a victim client (stored XSS)
- The adversary trick the victim into clicking on a malicious URL which contains attacker-controlled parameters, that will be reflected on the web client as soon as the victim clicks (reflected XSS)
- The adversary could sends a malicious message via `postMessage` to attack the React website opened in another tab. This could lead to improper authorization and trigger another reflected XSS


> [!NOTE] How does ReactAppScan work
> ReactAppScan ==takes the source code of a React package or application as input==and ==outputs detected vulnerabilities==. The high-level idea is that ReactAppScan follows the rendering process of native React on an application to **abstractly interpret its code and to build a CoG**, ==which can be queried== for vulnerability detection. The process is technically an advanced [[static analysis]] called **abstract interpretation**

**Approach**
- First, in the ==mounting== phase, ReactAppScan builds an initial CoG based on the static JSX file. Specifically, ReactAppScan starts from the entry points of the Abstract Syntax Tree (AST) and **abstractly interprets** each AST node with modeled React.js APIs and client-side APIs to generate this CoG. ReactAppScan also queues asynchronous callbacks for preparation of the next phase.
- Second, in the ==updating== phase, ReactAppScan processes asynchronous callbacks and hooks/lifecycle methods, and then updates the CoG based on prop and state updates by abstractly interpreting the render method of the component that needs to be updated
- Third, in the ==unmounting== phase, ReactAppScan looks up clean-up functions or unmount methods to simulate the unmounting process
- In the end, after three phases, ReactAppScan ==queries== the graph for an unsanitized path between an adversary-controlled source and a vulnerability-specific sink to detect vulnerabilities.

---
#### References
- [[(Guo, Kang, et al., 2024)]]
