---
ID: 2025-04-23T14:30:11.127Z
tags:
  - paper
  - projectSLR
  - SQLIA
  - SQL
Project:
  - SLR
---
## Context

[[SQLIA (SQL injection attack)]] exploits the application’s input validation mechanisms to illegitimately get information from the database
- for example, an attacker may retrieve other user's account information without providing the admin's credential

In this paper, we present a black-box approach for automated detection of state violation attacks with a focus on securing the back-end database. To be more specific, we aim to identify and block malicious SQL queries

**Contributions**
- black-box approach for deriving the application specification and detecting malicious SQL queries
- implement a prototype detection system SENTINEL and evaluate it with a set of real-world web applications

## Approach

The [[SUT (system under test)]] is modeled as an extended [[FSM (finite-state machine)]] that considers not only state transitions but also data contraints associated with transitions
- the EFSM is defined considering seven information: the set of the application states (S), the set of context variables (V, such as global/local variables), input symbols (I, such as the users' requests), output symbols (O, such as server responses), the set of data constraints associated with state transitions (P, e.g., `if $row[‘role’] == professor`)
- To derive the EFSM, we first construct SQL signatures from observed SQL queries
- we extract a set of invariants for each SQL signature from both session variables and SQL responses (that represent basically the application state and the associated data constraints).
- Value-based invariants are extracted using a daikon engine
- dependencies between SQL signatures are extracted
- the set of invariants describe the application behavior (can be considered as program specifications)
- the incoming SQL queries are evaluated at runtime
- suspicious SQL queries, which violate any invariant associated with their respective signatures, are identified as potential attack, and blocked

## Evaluation

Often a tool or a solution is implemented. How was that solution evaluated?

## Results

Describe the results in simple terms

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Li, Yan, et al., 2012)]]
