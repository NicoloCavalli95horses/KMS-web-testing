---
ID: 2024-12-30-14:20
tags:
  - "#definition"
  - testingTechniques
  - blackBox
---
## Definition

> [!SUMMARY]
> Produces Boolean graphical representations of potential test case results, to aid in selecting efficient and complete test cases

One weakness of [[boundary value analysis]] and [[EPM (Equivalence Partitioning Method)]] is that they do not explore combinations of inputs.
- For instance, out of memory issues cannot simply be detected with a boundary value analysis

A cause-effect graph is a method used in [[black-box testing]] to translate natural-language specifications into a formal language:
1. the specification is divided into workable pieces
2. the causes and effects in the specification are identified (input > output). Each cause-effect chain is assigned a unique number
3. a boolean graph linking the causes and effects is created
4. impossible chains are annotated (due to syntactic or environmental contraints)
5. the graph is converted into a limited-entry [[decision table]]
6. each column in the decision table is converted into a test case

**Basic cause-effect graph symbols**

![[cause_effect_graph_symbols.png]]

Since cause-effect graphing requires the translation of a specification into a Boolean logic network, it gives you a different perspective on, and additional insight into, the specification.
- In fact, ==the cause-effect graph often uncovers ambiguities and incompleteness in specifications==

### Example

A system allow an user to login only if the password is valid and the user has the permission

**Causes**: password validity, permission
**Effects**: login, no login

A graph similar to the last case scenario in the image can be created.
A decision table could be derived:

| **Test case** | C1 <br>(valid password) | C2 <br>(valid permission) | E1 <br>(login) | E2 <br>(no login) |
| ------------- | ----------------------- | ------------------------- | -------------- | ----------------- |
| TC1           | true                    | true                      | true           | false             |
| TC2           | true                    | false                     | false          | true              |
| TC3           | false                   | true                      | false          | true              |
| TC4           | false                   | false                     | false          | true              |

## References
[[04 Test-case Design]]