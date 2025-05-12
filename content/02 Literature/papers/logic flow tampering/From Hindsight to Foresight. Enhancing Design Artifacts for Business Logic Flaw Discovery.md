---
ID: 2025-04-30T16:52:54.509Z
tags:
  - paper
  - projectSLR
  - logicVulnerability
  - designFlaws
Rank: A
Project:
  - SLR
---
## Context

Vulnerability scanners focus on the code implementation, and often miss security issues caused by design flaws or business logic flaw. These issues are weaknesses that allow an attacker to abuse the legitimate processing flow of that application to cause negative consequences ([[BFT (business flow tampering)]]). Examples:
- improper enforcement of an action
- parameter tampering
- workflow tampering

**2018, Uber**: a design flaw caused passenger to have a free ride, by specifying and invalid payment method

Vulnerability scanners find flaws in the code in production. A better approach would be to find and fix design flaws *before* the code is actually deployed.
## Approach

Our approach guide developers to think systematically about important design conditions. Misuse case scenarios are automatically generated leveraging system specification descriptions provided by developers.
- use case scenarios in [[Gherkin]] syntax are provided as initial input, in collaboration with developers. They specify normal user workflow
- these case scenarios are combined with additional inputs regarding design constraints
- the output is integrated in the testing framework used by the [[SUT (system under test)]]
- design flaws are identified automatically

## Evaluation

A systematic evaluation was done on a widely used open-source eCommerce web **application**, **Sylius**, and a popular open-source file sharing application, ownCloud
- seven design-level issues were identified, with several of them discovered only after code deployment, and some yet to be flagged out
- reported and confirmed the new flaws  with the Sylius developers

---
#### References
- [[(Cheh, Tay, et al., 2022)]]
- https://github.com/cheh2/ACSAC-Artifacts
