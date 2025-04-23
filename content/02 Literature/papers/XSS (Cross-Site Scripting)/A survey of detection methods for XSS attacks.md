---
ID: 2025-04-23T12:25:42.933Z
tags:
  - paper
  - projectSLR
  - XSS
Project:
  - SLR
---
Unsystematic literature review about XSS. Focuses on entry points, and describes client-side, server-side and hybrid mitigation techniques
## Context

[[XSS (cross site scripting)]] can be best described as an application layer code injection attack on the client-side where an attacker injects malicious scripts into a vulnerable web application.

**Qualification of the vulnerability of an application**
- Always Vulnerable: open to vulnerabilities 365 days a year
- Frequently Vulnerable: open to vulnerability 271–364 days a year
- Regularly Vulnerable: open to vulnerability 151–270 days a year
- Occasionally Vulnerable: open to vulnerability 31–150 days a year
- Rarely Vulnerable: open to vulnerability less than 30 days a year

**Contributions**
- systematic survey on XSS attacks type and launching mechanisms
- discussion over XSS detection approaches, with pros and cons
- classification of detection approaches: client-side, server-side, hybrid
- discussion of a precondition for a XSS attack to be carried out

When the main purpose of an XSS is to damage more users, and the script tries to propagate automatically, the XSS issue is usually called "worm"
- a XSS worm tries to affect more and more user automatically
- a payload is executed for each user in the same way
- a JavaScript XSS worm is much more may affect

## Limits

- unsystematic literature review
- some cited papers are from dubious journals

---
#### References
- [[(Upasana Sarmah, D.K. Bhattacharyya, et al., 2018)]]
