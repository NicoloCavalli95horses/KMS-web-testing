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

The model is able to detect 4 types of attacks, given the different ==attack signature==
1. [[SQLIA (SQL injection attack)]]: presence of pattern like `OR 1=1`
2. [[DDoS (Distributed Denial of Service)]]: same IP, high frequency of requests
3. [[CSRF (cross-site request forgery)]]: malformed POST requests
4. [[directory traversal (path traversal)]]: presence of pattern like `../../`

## Approach

- navigation logs and HTTP messages are continuously collected and processed
- data are normalized and clean in Python, with Panda
- key features are extracted (request frequency, HTTP headers, payload patterns)
- SQLite is used for the storage of detection logs
- [[KNN (K-Nearest Neighbors)]] model is used to discover classes between data and recognize attacks or legitimate traffic. This algorithm was benchmarked with other [[machine learning]] algorithms and provided the most promising results
- [[PCA (Principal Component Analysis)]] was used to reduce data redundancy

The model was trained:
- public dataset of malicious and benign HTTP requests
- the output of the model is (attack class) or normal

As an attack is identified, the request is either sanitized or blocked

This KNN-based WAF was designed to adapt to new data based on incremental learning. The model is ==periodically retrained== based on new traffic data for adapting the evolving patterns of attacks

## Evaluation

The model was (probably) tested on a subset of the same dataset using as training set.

## Limits

No clear indication of where to find public dataset of legitimate and malicious HTTP requests

---
#### References
- [[(Maheshwari, Nayak, et al., 2024)]]
