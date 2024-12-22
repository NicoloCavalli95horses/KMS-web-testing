
| ID       | 2024-12-09-15:46             |
| -------- | ---------------------------- |
| **Tags** | #paper #redos #cyberSecurity |
## Abstract

[[ReDoS (Regular Expression Denial of Service)]] is an emerging class of DoS attacks to web services. One challenging question for a victim web service under ReDoS attacks is ==how to quickly recover== its normal operation after ReDoS attacks, especially these zero-day ones exploiting previously unknown vulnerabilities.
-  we present REGEXNET, the first payload-based, automated, reactive ReDoS recovery system for web services. REGEXNET adopts a learning model, which is updated constantly in a feedback loop during runtime, to classify payloads of upcoming requests including the request contents and database query responses
- If detected as a cause leading to ReDoS, REGEXNET migrates those requests to a sandbox and isolates their execution for a fast, first-measure recovery. We have implemented a REGEXNET prototype and integrated it with HAProxy and Node.js
- Evaluation results show that REGEXNET is effective in recovering the performance of web services against zero-day ReDoS attacks, responsive on reacting to attacks in sub-minute, and resilient to different ReDoS attack types including adaptive ones that are designed to evade REGEXNET on purpose.

## Types of defenses

Thousands of RegEx in over 10.000 JavaScript or Python modules are vulnerable to ReDoS.
Solutions have been proposed:
- **==proactive==**: ReDoS are mitigated by speeding up regular expression matching. A number of libraries have been built to check the safety of RegEx in Node.js applications (e.g., safe-regex, rxxr2). This is often not enough to solve the vulnerability and there are uncovered edge cases: space-related DoS are still possible, and implementing proactive techniques may be difficult in web frameworks
- **==reactive==**: the focus is on speeding the recovery process. Manual and naive approaches are still very common but these solutions can take time and effort. An automated approach would take obvious benefits

*Automating reactive defenses to RedoS*
- statistical approach to differentiate normal and malicious requests based on consumed CPU resources have been proposed (Rampart)
- Rampart block future requests from the same IP address, or with exactly the same content
- This solutions, however, do not consider distributed attacks (e.g. an attacker could bypass this defense easily)

### REGEXNET: payload-based, runtime, reactive ReDoS recovery system for web services
-  **key insight**: malicious payload have to obey certain patterns, which stay invariant
- A [[machine learning]] solution: invariant pattern are automatically recognized, in linear time, and potentially dangerous requests are addressed to a [[sandbox environment]]
- An online feedback loop is used to improve the model constantly (false positives or negatives are often possible)
- ==the recover time is within sub-minute (!)==

**DNN model design**
- the model takes web request as input and classifies whether the request is benign or malicious
- a web request is an array of characters (input), and a binary classification is the output (0, 1)
- an embedded layer is used, to better encode distances between characters and to show their similarity
## References
[[ref_runtime_recovery_web_app_under_redos]]