---
ID: "2025-04-14-11:56"
tags:
  - "#definition"
---
## Definition

HPG are unified representations of client-side JavaScript programs that integrate static code representations and runtime state values into a graph-based structure.
- State values are concrete program values observed during execution, e.g., web storage values and cookies

HPGs integrate several static code representations, i.e., [[AST (Abstract Syntax Tree)]], [[CFG (Control Flow Graph)]], Call Graph (CG), Program Dependence Graph (PDG), Event Registration, Dispatch and Dependency Graph (ERDDG)

HPGs also incorporate Semantic Types, which are labels assigned to nodes (e.g., sinks and sources) to capture the semantic meaning of instructions. Encoded as a directed graph, HPGs employ a labeled property graph structure, where nodes and edges possess labels and key value properties

---
#### References
- [[(Khodayari, Barber, et al., 2024)]]