---
ID: 2024-12-30-14:20
tags:
  - "#definition"
  - testingTechniques
  - blackBoxTesting
---
## Definition
One weakness of [[boundary value analysis]] and [[EPM (Equivalence Partitioning Method)]] is that they do not explore combinations of inputs.
- For instance, out of memory issues cannot simply be detected with a boundary value analysis

A cause-effect graph is a method used in [[black-box testing]]  to translate natural-language specifications into a formal language:
1. the specification is divided into workable pieces
2. the causes and effects in the specification are identified (input > output). Each cause-effect chain is assigned a unique number
3. a boolean graph linking the causes and effects is created
4. impossible chains are annotated (due to syntactic or environmental contraints)
5. the graph is converted into a limited-entry [[decision table]]
6. each column in the decision table is converted into a test case

**Basic cause-effect graph symbols**

![[cause_effect_graph_symbols.png]]
## References
[[04 Test-case Design]]