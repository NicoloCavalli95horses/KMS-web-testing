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
- a differential analysis on the two executions pinpoints the *critical implementation of the business flow*
- mutated executions achieving similar results to the legitimate executions suggest that there can be BFT flaws
- test inputs that tamper the client logic are automatically generated
- 352 real-world digital content service providers were tested, and 315 flaws were found

### BFT Detector implementation

**Dynamic execution and trace collection**
==Dynamic execution trace (e.g., functions name, execution paths) are collected ==by exercising business processes according to the business model. The output includes:
- call traces
- execution result snapshots, which are essentially screenshots and HTML/DOM data (this will be used in the testing phase).

To support this step, the V8 JS engine has been modified to modify the runtime execution of JavaScript

**Call Trace Differential Analysis**
Given the collected call traces of the <abbr title="access to premium content with a premium subscription">passing</abbr> and <abbr title="access to premium content with a premium subscription">blocking</abbr> runs (e.g., access premium content with a subscription is a passing run, while being redirected is a blocking run), we perform a differential analysis to identify a divergence
point representing the critical decision-making point in the
business model
Our system performs differential analysis on the function call trace collected, identifying call divergences points. A **divergence point** is a situation in which critical business logic is involved and, from that specific point, you can distinguish between a path leading to the desired business flow and a path bypassing the execution of the regular flow

**Test Input Generation**
We generate test inputs containing statements data to be mutated by using the call divergence points from the previous step.

**BFT Testing**
Our system repeatedly visits the web page to mutate the execution according to the test inputs generated from the previous step.

**Test Result Verification**
We measure whether our system successfully tampers with the business process by comparing snapshots from the test and the results from the original execution. A machine learning technique is used to calculate the degree of similarity between snapshots ([[BRF (Balance Random Forest)]])


> [!WARNING] Algorithm shortcomings
> During the test result verification phase, it is worth noting that:
> - most of the text executions led to crashes, because undefined objects were accessed or functions were invoked with the wrong parameters
> - the system does not consider BFT flaws due to multiple mutations of the client-side codebase
> - does not work well in detecting flaws in large and complex codebases (+7100 functions)

## References
[[ref_bft_detector_digital_content_services]]