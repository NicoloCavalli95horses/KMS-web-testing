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

In this paper, we design and implement the first automated framework, called Undefined-oriented Programming Framework (UOPF), to detect and chain [[prototype pollution gadgets]] for malicious consequences via concolic execution of JavaScript programs with undefined properties as symbols.

**Contributions**
- we propose UoPF (Undefined oriented Programming Framework), to detect direct and chained gadgets
- we curated the first gadget dataset

## Approach

- 

## Evaluation

- UOPF was compared to Silent Spring on the dataset and the results show that UOPF outperforms Silent Spring with lower false positives and negatives
- UOPF was tested on latest Node.js template engines, which revealed many zero-day gadgets including chained ones

## Limits

- 

---
#### References
- [[(Liu, An, et al., 2024)]]
