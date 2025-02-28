---
ID: 2025-02-28-10:24
tags:
  - "#definition"
  - owasp
  - accessControl
---
## Definition

Access Control (or Authorization) is ==allowing or denying specific requests from a user, program, or process==.
- With each access control decision, a given subject requests access to a given object
- Access control is the process that considers the defined policy and determines if a given subject is allowed to access a given object
- Access control also involves the act of granting and revoking those privileges. This could be implemented in several ways, most popular of which are [[RBAC (role-based access control)]] or [[ABAC (attribute based access control)]]

Access Control often applies on multiple levels (business logic, database, interface, etc). In addition, applications can offer multiple ways of performing operations (e.g., through APIs or the website). ==All those different levels and access paths must be aligned, i.e., use the same access control checks, to protect against security vulnerabilities.==

**Authorization** (verifying access to specific features or resources) is not equivalent to **authentication** (verifying identity).

---
#### References
- https://top10proactive.owasp.org/archive/2024/the-top-10/c1-accesscontrol/