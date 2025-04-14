---
ID: 2025-04-14-14:06
tags:
  - "#definition"
  - URL
---
## Definition

Input validation is challenging. Apart from general [[string validation]], URL validation should consider that:
- checking the presence of the trusted domain inside the input URL is not enough, given that `benign.com.evil.com` is a possible malicious domain
- checking only partial URL fields, such as path or query parameters, is not enough
- sometimes the check is done over attacker-controllable values

**Faulty URL validation**

![[faulty_url_validation_logic.png]]

---
#### References
- [[(Khodayari, Barber, et al., 2024)]]