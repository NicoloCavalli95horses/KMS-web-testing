---
ID: 2025-04-16T07:55:20.890Z
tags:
  - paper
  - Javascript
  - projectSLR
  - prototypePollution
  - gadget
Project:
  - SLR
---
## Context

[[prototype pollution]] allows an adversary to contaminate a property of a prototypical object in JavaScript, which further alters the vulnerable program’s logic for the adversary’s purpose.

In this paper, we design and implement the first automated framework, called Undefined-oriented Programming Framework (UOPF), to detect and chain [[prototype pollution gadgets]] for malicious consequences via [[concolic execution]] of JavaScript programs, with undefined properties as symbols.

**Contributions**
- UoPF (Undefined oriented Programming Framework), to detect direct and chained gadgets
- a first gadget dataset

## Approach

**Phase 1**
UoPF produces a program which consists of three parts:
- a target Node.js program (source code)
- normal inputs to the program (template inputs)
- prototype pollution inputs, represented as symbols

**Phase 2**
UoPF concolicly executes the output of the phase 1 exploring different paths related to the prototype pollution inputs
- it solves constraints related to the current symbolic prototype pollution inputs
- it records additional undefined values encountered during concolic execution

**Phase 3**
- If the previous concolic execution reaches a sink function, UoPF outputs the current gadgets and the prototype pollution outputs based on constraint solving results
- Else, it adds additional undefined values to the undefined pool and lets the scheduler to select additional prototype inputs for a repeat of phase 1 and 2

## Evaluation

- UOPF was compared to Silent Spring on the dataset and the results show that UOPF outperforms Silent Spring with lower false positives and negatives
- UOPF was tested on latest Node.js template engines, which revealed many zero-day gadgets including chained ones

## Limits

- Only tested on Node.js, not ready for client-side JavaScript
- Nested arrays are currently not supported
- scalability issues with large search space

---
#### References
- [[(Liu, An, et al., 2024)]]
