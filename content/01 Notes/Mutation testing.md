---
ID: 2025-01-23-14:34
tags:
  - "#definition"
  - mutationTesting
---
## Definition

Mutation testing is a technique used from many years to evaluate the effectiveness of test suites in detecting bugs. The idea is to modify the source code and observing whether the tests respond correctly to those changes, with the end goal of improving the quality of the tests

> [!SUMMARY]
> The application’s source code is automatically modified by inserting variations that simulate typical errors a developer could make. High-quality tests should immediately detect such editing, otherwise they are not good enough and need to be improved

**Types of mutations**
Mutation operations are the core of the mutation phase:
- minor changes in logical/mathematical operation (AND instead of OR, < instead of >)
- boolean substitution
- conditional removal

Manually generating mutants in a real application is often infeasible, and possibly biased.

[[Pitest]] is an automated tool that provide operators for generating a large number of mutants
## References
[[ref_mutta_e2e_mutation_testing]]