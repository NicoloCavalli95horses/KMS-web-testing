---
ID: 2025-03-21-13:38
tags:
  - "#definition"
  - crossDomainPolicy
  - SOP
---
## Definition

Same-Origin Policy (SOP) is a client-side security policy, implemented by browsers, that ==prevents a website from accessing scripts from another domain unless explicitly allowed==
- The same-origin policy applies only to ==scripts==. Resources such as images, CSS, and dynamically loaded scripts can be accessed across origins via the corresponding HTML tags (with fonts being a notable exception)
- It is a predefined browser policy
- Attacks take advantage of the fact that the same origin policy does not apply to HTML tags
- Access is granted only if the domains share the same protocol, hostname and port

![[sop_policy_example.png]]

---
#### References
-  [[(Trampert, Stock, et al., 2023)]]