---
ID: 2025-06-30T07:13:54.750Z
tags:
  - paper
  - parameterTampering
Rank: A
---
## Context

[[parameter tampering]] is a [[logic vulnerability]] that affects many web application, even the largest and most popular one. Exploiting [[IDOR (Insecure Direct Object Reference)]], an attacker can craft an HTTP communication to commit unauthorized banking transfers.

Existing parameter tampering scanners do not consider the enforcement of, among others, the intended workflow, one-time use tokens, and parameter dependency across requests, which are all common in multi-request applications.

**Contributions**
- A field study on online banking applications to understand their workflow and implementations, and how they can be intercepted for vulnerability scanning
- A novel approach that respects the intended workflow and cross-request parameter dependency while fuzzing, as well as to correlate the dependency in both requests and responses for automatic detection of server acceptances
- An “in-context fuzzing” technique to build a blackbox vulnerability scanner that drives fuzzing in the application context allowing dynamic features to be preserved, and thus improving coverage and accuracy
- The discovery of real-world vulnerabilities

**Four representative banking transfer applications are described** (Citibank, HSBC, Bank of China, Bank of East Asia)
1. A user specifies a source (i.e., FROM) and a destination (i.e., TO) account besides setting an amount (i.e., AMT) to transfer
2. The user reviews the transaction details returned by the server
3. The transfer instruction is acknowledged with a transaction number.

## Approach

This paper presents Cross-Request Scanner (CRS), a novel approach that respects and leverages the intended workflow and parameter dependency controls while scanning for parameter tampering vulnerabilities
- *capturing*: CRS records a set of valid user actions, identifies the one-time tokens, tracks the cross-request parameter dependencies, and learns key features
- *fuzzing*: CRS replays the user actions to fetch new responses while keeping those confirmed intact, so as to preserve the intended workflow. Basically, some parameters are mutated while the critical ones are fixed, until the server accepts the mutated parameters and gives responses that are in line with the legitimate ones captured at the beginning. The critical ones are inferred based on the server responses (they broke the communication)

## Evaluation


## Results


## Limits


---
#### References
- [[(Fung, Wang, et al., 2014)]]
