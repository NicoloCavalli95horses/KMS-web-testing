---
ID: 2025-02-18-14:36
tags:
  - paper
  - cyberSecurity
  - attackMitigation
  - WAF
---
## Context

Web application firewall systems (WAFs) are specialized devices or software solutions that analyze incoming and outgoing web application traffic for threats and attacks
- They can recognize hacking attempts, attacks based on known vulnerabilities, and other abnormal events
- WAF can block or filter requests that are considered suspicious or potentially dangerous
- in contrast to common network firewalls that work at network level, a WAF works at the application level
- a WAF can mitigate a number of vulnerabilities, such as: [[SQLIA (SQL injection attack)]], [[CSRF (cross-site request forgery)]], [[DDoS (Distributed Denial of Service)]], [[directory traversal (path traversal)]]

An adaptive WAF integrates real-time monitoring, machine learning, and behavioral analysis [[(Maheshwari, Nayak, et al., 2024)]]

### History of WAFs

[[(Maheshwari, Nayak, et al., 2024)]]
- **static rule-based systems**: the earlier generation of WAFs had a significant dependence on rule-based systems and it was static. It was done through by comparing HTTP packets and checking attack signatures. This types of WAF are rigid and require continue manual effort to accommodate new issues
- **anomaly based systems**: anomaly detection systems do not use sets of rules, instead they create a profile of normal activity for a web application and anything that exceeds that profile is marked as a possible security breach. These are models that are prone to high false alarm rates because they cannot tell the difference between anomalous but legitimate behavior and malicious ones. Plus, they heavily rely on the baseline they construct. If the initial data are biased, the accuracy of the system is negatively impacted
- **ML-based WAFs**: WAFs that are based on ML can derive knowledge from a wide array of traffic datasets together with attack patterns making it possible to learn about new kinds of attacks even when there are no rules or signatures for them as yet. Algorithms used: [[random forest]], [[SVM (support vector machine)]], [[gradient boosting]]. A limit of ML-based WAFs is that achieving a very high level of accuracy is possible only if large amounts of labelled data are provided.
 
---
#### References
- [[(Tkachenko et al., 2024)]]
- [[(Maheshwari, Nayak, et al., 2024)]]