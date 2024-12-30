---
ID: 2024-12-30-13:33
tags:
  - "#definition"
  - testingTechniques
  - blackBoxTesting
---
## Definition

Experience shows that test cases that explore boundary conditions have a
higher payoff than test cases that do not. Boundary conditions are those situations directly *on, above, and beneath the edges*:

> [!NOTE] Boundary values
*if ( x > 0 && x <= 10 ) { ... } *
 Most of the time, unexpected behaviors occur exactly when x = 0, or x = 10

This method is an improvement of the [[EPM (Equivalence Partitioning Method)]]
that defines equivalence classes and input conditions.
- It requires ==one or more tests to consider boundary values==.

**Examples**
- if the valid domain of an input value is –1.0 to 1.0, write test cases for the situations –1.0, 1.0, –1.001, and 1.001
- if an input file can contain 1–255 records, write test cases for 0, 1, 255, and 256 records
- If the input or output of a program is an ordered set (a sequential file, for example, or a linear list or a table), focus attention on **the first and last elements of the set**
- 
## References
[[04 Test-case Design]]