---
ID: 2024-12-09-11:50
tags:
  - definition
  - testingTechniques
---
## Definition

Once all the components of a [[GUI (graphical user interface)]] have been represented as a [[EFG (event flow graph)]], the remaining step is to identify event flows among components.

An integration tree is a structure built to identify interactions (invocations) among components. 

Intuitively:
- Component A invokes component B if A contains a restricted-focus event that invokes B

Formally, an integration tree is a 3-tuple  <N, R B>, where:
- N is the whole set of components
- R is part of N, and it is the root component (main component)
- B is the set of directed links showing the invokes relation between components

![[integration_tree.png]]
## References
[[ref_coverage_criteria_gui_testing]]
[[ref_gui_ripping_reverse_engineering_of_gui]]