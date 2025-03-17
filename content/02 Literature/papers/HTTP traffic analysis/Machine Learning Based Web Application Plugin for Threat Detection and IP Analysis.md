---
ID: 2025-03-17T13:20:11.162Z
tags:
  - paper
  - MachineLearning
  - Http
  - prototypePollution
---
## Context

Modern attackers work with HTTPS to hide malware or other malicious communication. Even if TLS encryption in HTTP protects sensitive data sent across networks, it also makes difficult to detect and mitigate these attacks.
- this research investigate HTTPS-transmitted malware and try to identify them with ML techniques

In the landscape of online malware delivery, HTTPS is utilized in ==37% of malwares. ==However, most businesses ==do not employ advance TLS traffic inspection mechanisms==, leaving their businesses at a huge risk
## Approach

Signature-based and anomaly-based malware detection are the major methods utilized today. Since attackers employ TLS to hide their malicious payloads, most signature-based detection techniques are outdated.
- anomaly-based detection techniques are needed

---
#### References
- [[(Katulanda, Henaka Arachchi, et al., 2023)]]
