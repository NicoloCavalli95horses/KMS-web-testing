---
ID: 2025-02-24-09:49
tags:
  - "#definition"
  - XXE
---
## Definition

An XML External Entity attacks is a class of attacks ==against an application that parses XML input.==

This attacks happen when XML input comprising a link to an outer entity is processed by a bad configured XML parser. Can lead to:
- disclosure of confidential data,
- server side request fake,
- rejection of service,
- port scanning

---
#### References
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- Cited in QR-code exploitation, by [[(Averin, 2020)]]
- Covered by a fuzzing tester, by [[(Neef, Kleissner, et al., 2024)]]