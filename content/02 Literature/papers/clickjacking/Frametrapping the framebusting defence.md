---
ID: 2025-04-01T07:43:12.977Z
tags:
  - paper
  - projectSLR
  - clickjacking
Project:
  - SLR
---
Short but authoritative literature review about clickjacking
## Context

The basic technique of [[clickjacking]] is to add a transparent layer of UI objects, thereby tricking a victim into clicking on a hidden button or link to route the victim to a malware-driven domain.

**Clickjacking mitigations**
- framebusting, with`top != self`
- declarative security with `X-Frame-Options` header

The attribute `sandbox` allows attackers to bypass framebusting

---
#### References
- [[(Sood, Enbody, et al., 2011)]]
