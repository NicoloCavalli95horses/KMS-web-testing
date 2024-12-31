---
ID: 2024-12-31-11:18
tags:
  - "#definition"
  - whiteBoxTesting
  - testingTechniques
---
## Definition

Non-incremental testing, also known as big-bang testing, is a software testing approach where all components or modules of a system are integrated simultaneously, and the entire system is tested as a whole. Unlike [[incremental or integration testing]], which involves integrating and testing components or modules incrementally, non-incremental testing takes a ==more holistic approach to testing the entire system at once==.
### Example

```Mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

```

## References
https://www.geeksforgeeks.org/introduction-to-non-incremental-testing/
[[05 Module (Unit) Testing]] (p.98)