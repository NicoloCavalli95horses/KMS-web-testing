---
ID: 2025-07-11-10:35
tags:
  - "#definition"
  - cyberSecurity
  - dataSecurity
  - dataDisclosure
---
## Definition

Data disclosure vulnerabilities lead to the disclosure of sensitive information to illegitimate users. This may happen for several reason:
- Broken access control
- Code-injection vulnerabilities ([[XSS (cross site scripting)]], [[SQLIA (SQL injection attack)]], etc)

Access-control flaws:
- *Missing checks*: no check is carried out for a particular data object
- *Avoided check*: a check is present but the attacker manage to bypass it (e.g., by introducing an error condition)
- *Incorrect check*: an access control check may be implemented incorrectly (e.g., [[EAR (Execution After Redirect)]])


---
#### References
- [[(Muthukumaran, O'Keeffe, et al., 2015)]]