---
ID: 2024-07-28-18:38
tags:
  - definition
  - testingTechniques
  - codeAnalysis
---
## Definition

Dynamic program analysis is the act of ==analyzing software that involves executing a program== – as opposed to [[static analysis]], which does not execute it. This method involves running a program on a suite of tests to observe its behavior in real-time, that means its performance and the final output.

Dynamic analysis can focus on different aspects of the software, including but not limited to:
- behavior
- test coverage
- performance
- security
 
 **Approaches**:
- [[DFS (depth-first search)]]: technique used to explore components and transitions in a GUI. With DFS, each root path is explored deeply until a final state is found, then a second root path is explored, and so on, until the whole paths are mapped.
- **non-uniform distribution search**: only relevant parts of the application are executed/analyzed, based on priority or needs

**Advantages**
- Runtime bug detection
- Performance analysis
- Input/output check (see [[dynamic invariants]])

**Example tools**
- **Valgrind**: a framework used to detect memory losses or error and profiling
- **JMeter**: a tool used to test performances in web application
- [[Iroh.js]]: intercept and manipulate data during execution

**Limits**
- The analysis is strongly dependent on the tests, that are manually provided (input dependency)
- Bugs and issues are detected late and only in execution

---
## References
- [[(Linares-Vasquez, White, et al., 2018)]]
