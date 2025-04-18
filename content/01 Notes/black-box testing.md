---
ID: 2024-12-06-13:34
tags:
  - definition
  - testingTechniques
  - blackBox
---
## Definition

A *black box* approach does not consider the internal structure, design, and product implementation. In other words, the tester does not know the internal functioning of the [[SUT (system under test)]]. 

The black box approach only evaluates the *external behavior* of the system. The inputs received by the system and the outputs or responses it produces are tested.

**Key features:**
- considers only external behavior
- carried out by testers (with an end-user perspective)
- no need to have knowledge on specific programming languages or implementation details
- it exposes ambiguities or inconsistencies in the requirements specifications
- used in system testing or [[acceptance testing]]
- less time consuming compared to [[white-box testing]]
- it focuses on the behavior of the system
- it is not suitable for algorithms testing

**Exhaustive input testing** (p.9, [[(Myers et al., 2011)]]): making use of every possible input condition as test case. Since you cannot test a program to guarantee that is [[error]] free, the ultimate goal is to find as many issues as possible given time and resources constraints.

**Black-box techniques**
- [[EPM (Equivalence Partitioning Method)]]
- [[boundary value analysis]]
- [[cause-effect graphing]]
- [[error guessing]]
- [[decision table]]

Also known as: *data-driven testing, functional testing, closed-box testing, input-output-driven testing*

---
## References
- [[(Nidhra, Dondeti, 2012)]]
- [[(Myers et al., 2011)]]