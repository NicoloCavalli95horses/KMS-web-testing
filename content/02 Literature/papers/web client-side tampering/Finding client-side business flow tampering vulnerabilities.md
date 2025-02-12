---
ID: 2025-01-28-16:34
tags:
  - paper
  - JavaScript
  - businessFlowTampering
  - codeAnalysis
  - cyberSecurity
  - clientSideAttacks
---
## Introduction

[[BFT (business flow tampering)]] can lead to severe business losses, making the attackers access protected resources or executing client-side functions in a way that was not predicted.

This paper propose a technique to automatically identify client-side tampering opportunities in 200 websites.

### Technique description

**Site information gathering**
The system records user interactions with the target website to identify DOM objects related to business logic and to generate site navigation automation scripts.
- ==each target website has been manually explored by human testers== to collect the exact interaction needed to reach the vulnerability

**Identification of potentially vulnerable JavaScript functions**
The system monitors DOM mutation events and collects the corresponding [[callstack]]. By analyzing the functions in these stacks, the system identifies those that may be related to business logic.

**Business control flow analysis**
For each candidate function, the system dynamically builds a [[BCFG (Business Control Flow Graph)]], which abstracts path conditions that are not related to access control in the business logic.
- This graph allows identifying potential tampering points.

**Generating tampering proposals**
Based on BCFG, the system generates tampering proposals that ==specify the location of the code to be tampered with and the tampering operation to be performed ==. Tampering operation considered:
- **disable [[callee]]**: skip a call that should be executed
- **disable caller**: override a function with an empty function, to keep the function but to make it useless
- **forced branching**: a conditional path is forced
- **repeat callee**: a function is executed multiple times

**Evaluating candidate functions**
The system uses a machine learning method to rank functions based on their likelihood of containing enterprise access controls. This ranking helps focus analysis on the most relevant functions.

**Tampering tests**
The system repeatedly runs the website with the generated tampering proposals to filter out those that do not lead to tampering attacks (using image comparison with [[SSIM (Structural Similarity Index Method)]]).
True positives were grouped and a representative candidate was manually checked .

**Vulnerability reporting**
The system generates a report for each identified vulnerability, explaining the attack.

*Tool used*: Python, Node.js, Puppeteer

---
## References
- [[ref_finding_client_side_business_tampering]]
- https://sites.google.com/view/tampering-cases (examples of tampering)