---
ID: 2025-03-31T14:17:34.152Z
tags:
  - paper
  - projectSLR
  - businessFlowTampering
  - HTTP
Project:
  - SLR
---
## Context

Two classes of web vulnerabilities:
- input validation ([[string validation]], file upload validation, etc)
- logic flaws, that can lead to [[BFT (business flow tampering)]]

In this paper, we model the logic of a web application in a black-box fashion using a [[FSM (finite-state machine)]]. We then formalize logic vulnerabilities ==as the discrepancies between the intended FSM and the implementation FSM.==
- with *expected input* (e.g., the user follows the links on an application), the behavior of the intended FSM and the implementation FSM are consistent
- with *unexpected input* (e.g., URL manipulation, parameter tampering), there are differences between the intended FSM and the implementation

**Contributions**
- black-box approach to identify logic flaws that depend on URL manipulation (parameter tampering, [[forced browsing]])
- a proof-of-concept tool, LogicScope, evaluated on real world web apps

## Approach

1. **HTTP traces analysis**: we first construct a partial FSM over the *expected input* domain by observing the executions of the application when users follow the navigation paths (see [[HTTP trace collection]])
2. **Test input generation**: *unexpected inputs* are derived from the previous partial FSM


---
#### References
- [[(Li, Xue, et al., 2013)]]
