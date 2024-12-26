---
ID: 2024-12-13-14:49
tags:
  - definition
  - testingTechniques
---
## Definition

Concolic testing is a hybrid software verification technique that performs [[symbolic execution]], a classical technique that treats program variables as symbolic variables, along a concrete execution (testing on particular inputs) path. 

Symbolic execution is used in conjunction with
- an automated theorem prover or
- constraint solver based on constraint logic programming
to generate new concrete inputs (test cases), with the aim of maximizing code coverage. 

Its main focus is finding bugs in real-world software, rather than demonstrating program correctness.

## References
https://en.wikipedia.org/wiki/Concolic_testing