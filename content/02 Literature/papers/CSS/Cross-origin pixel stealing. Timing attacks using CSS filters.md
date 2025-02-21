---
ID: 2025-02-21-14:53
tags:
  - paper
  - CSS
  - timingAttack
  - cyberSecurity
  - clientSideAttacks
  - HTML
---
## Context

Timing attacks rely on systems that take different amounts of time to process different input values.
- This is usually the result of either conditional branching in code, or differences in input size.

Using CSS default filters, we have discovered a variety of timing attacks that work in multiple browsers and devices.
- The first attack exploits differences in time taken to render various DOM trees. This knowledge can be used to ==determine boolean values such as whether or not a user has an account== on a particular website
- Second, we introduce pixel stealing. ==Pixel stealing attacks can be used to sniff user history and read text tokens==

## Approach

Describe the paper approach in simple term.


---
#### References
- [[(Kotcher, Pei, Jumde, et al., 2013)]]