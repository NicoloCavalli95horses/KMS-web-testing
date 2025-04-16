---
ID: 2024-12-13-14:49
tags:
  - definition
  - testingTechniques
  - softwareEngineering
  - concolicExecution
---
## Definition

Concolic testing, also known as dynamic symbolic execution (DSE), is a hybrid software verification technique that performs [[symbolic execution]], a classical technique that treats program variables as symbolic variables, together with a concrete execution (testing on particular inputs) path. 

[[symbolic execution]] is used in conjunction with an automated theorem prover or a constraint solver based on constraint logic programming.

**Output**
- The output of a concolic execution is a ==new concrete input (test case)==

The aim is ==maximizing code coverage== and ==exploring new paths of the program==


**Use cases**
- Its main focus is finding bugs in real-world software, rather than demonstrating program correctness

---
## References
- [[(Li, Xie, 2023)]]
- Used by [[(Liu, An, et al., 2024)]] 