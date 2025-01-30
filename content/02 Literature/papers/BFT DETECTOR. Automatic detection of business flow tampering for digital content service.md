---
ID: 2025-01-30-14:55
tags:
  - paper
  - blackBoxTesting
  - clientSideAttacks
  - businessFlowTampering
  - JavaScript
  - codeAnalysis
  - cyberSecurity
---
## Introduction

[[BFT (business flow tampering)]] is a serious issue. Most of the digital content services (Amazon, Netflix, etc) implements one of the following business model:
- **advertising**: content providers earn revenue from advertisers, which are often protected by anti-adblocker
- **subscription**: [[paywalls]] are used 
- **donation**: from the user
- **non-profit** model (Wikipedia)

In this paper, we propose an automated approach that discovers BFT flaws in the web client programs of digital content services. The approach is generic and not much dependent on concrete implementations:
- a web service is run twice, to cover the legitimate business flow and to try to do the same operations without going through the same business flow (e.g. without paying)
	- the second execution mutates the client-side JavaScript by adding, modifying and removing statements
- a differential analysis on the two executions pinpoint the critical implementation of the business flow
- mutated executions achieving similar results to the legitimate executions suggest that there can be BFT flaws
- test inputs that tamper the client logic are automatically generated

### BFT Detector implementation

**Dynamic execution and trace collection**
Dynamic execution trace are collected by exercising business processes according to the business model. The output includes call traces and execution result snapshots which are essentially screenshots and HTML/DOM data.

**Call Trace Differential Analysis**
Our system performs differential analysis on the function call trace collected for different business flows, identifying call divergences points where executions start to differ.

**Test Input Generation**
We generate test inputs containing statements data to be mutated by using the call divergence points from the previous step.

**BFT Testing**
Our system repeatedly visits the web page to mutate the execution according to the test inputs generated from the previous step.

**Test Result Verification**
We measure whether our system successfully tampers with the business process by comparing snapshots from the test and the results from the original execution. A machine learning technique is used to calculate the degree of similarity between snapshots.

## References
[[ref_bft_detector_digital_content_services]]