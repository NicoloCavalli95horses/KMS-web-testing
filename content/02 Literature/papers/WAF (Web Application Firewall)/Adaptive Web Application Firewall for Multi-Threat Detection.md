---
ID: 2025-04-01T11:26:43.511Z
tags:
  - paper
  - projectSLR
  - machineLearning
  - SQLIA
  - WAF
  - HTTP
Project:
  - SLR
---
## Context

A [[WAF (web application firewall)]] protects web applications against various threats, by appropriately analyzing and filtering HTTP traffic

An adaptive WAF integrates real-time monitoring, machine learning, and behavioral analysis to distinguish between good and bad HTTP traffic
- the more data are collected, the more accurate the system is (progress over time)
- detailed logs and analytics offered by an adaptive WAF may be useful for systematize and analyzing trends in attacks

**Limits of current WAFs**
1. **Lack of Adaptability**: Most conventional systems that rely on rules are not flexible with WAF constantly needing new metrics to be added
2. **High False Positive Rates**: Suspicious activity detection and WAF’s static approach rely on signature identification and analysis which leads to numerous false alarms by blocking user behaviors and services that are legitimate
3. **Scalability**: Models built on machine learning algorithms like Random Forest SVM are unable to scale large amounts of data and even more so real-time detection in a large traffic network is even more challenging
4. **Computational Overhead**: As hybrid WAFs and machine learning models such as Gradient Boosting are computationally intensive, their use in the contrived resource limited practical environments is rendered futile.
5. **Difficulty in Multi-Threat Detection**: There are models that are specifically good at certain types of attacks but cannot offer adequate protection against multiple web attacks at the same time

To solve the limitations our proposed solution incorporates lightweight and efficient ML techniques that focus on time-sensitive detection, easy integration and low resources usage. The model uses incremental learning, which means it can be updated automatically with new traffic data and new attack patterns in the future without manual updating

The model is able to detect [[SQLIA (SQL injection attack)]], [[DDoS (Distributed Denial of Service)]], [[CSRF (cross-site request forgery)]], [[directory traversal (path traversal)]]

### Approach


---
#### References
- [[(Maheshwari, Nayak, et al., 2024)]]
