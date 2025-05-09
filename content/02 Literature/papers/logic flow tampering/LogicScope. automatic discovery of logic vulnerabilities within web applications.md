---
ID: 2025-03-31T14:17:34.152Z
tags:
  - paper
  - projectSLR
  - businessFlowTampering
  - HTTP
  - parameterTampering
  - forcedBrowsing
Rank: A
Project:
  - SLR
---
## Context

Two classes of web vulnerabilities:
- input validation ([[string validation]], file upload validation, etc)
- logic flaws, that can lead to [[BFT (business flow tampering)]]

The key issue to address web application logic flaws is to infer the application logic specification.

In this paper, we model the logic of a web application in a black-box fashion using a [[FSM (finite-state machine)]]. We then formalize logic vulnerabilities ==as the discrepancies between the intended FSM and the implementation FSM.==
- with *expected input* (e.g., the user follows the links on an application), the behavior of the intended FSM and the implementation FSM are consistent
- with *unexpected input* (e.g., URL manipulation, parameter tampering), there are differences between the intended FSM and the implementation

**Contributions**
- black-box approach to identify logic flaws that depend on URL manipulation (parameter tampering, [[forced browsing]], [[IDOR (Insecure Direct Object Reference)]])
- a proof-of-concept tool, LogicScope, evaluated on real world web apps

## Approach

1. **HTTP traces analysis**: we first construct a partial FSM over the *expected input* [[domain]] by observing and recording the executions of the application, when a user follows the navigation paths (see [[HTTP trace collection]])
2. **Test input generation**: *unexpected inputs* are derived from the previous partial FSM, in two ways
	- **parameter manipulation**: the keys of the input are maintained but the value are randomized/changed with a function (e.g., expected URL input: `...?id=123`, unexpected URL input `...?id=124`)
	- **forceful browsing**: the keys of the input are changed but the values are kept (e.g., expected URL input: `...?id=123`, unexpected URL input `...?user=123`)

## Evaluation

- We select six real-world PHP web applications to evaluate our prototype system LogicScope ([[benchmark testing]])
- we generate 233 test input vectors for all the applications and get 25 attack instances reported, among which, 18 are real attack vectors and 7 are false positives.

## Limits

- our technique relies on the collected traces, which may not completely characterize the application behavior
- manual effort is required to check the validity of the logic flaws found
- LogicScope can not handle AJAX web applications
- LogicScope has limited capability in handling complex relationships/constraints within the database.

---
#### References
- [[(Li, Xue, et al., 2013)]]
