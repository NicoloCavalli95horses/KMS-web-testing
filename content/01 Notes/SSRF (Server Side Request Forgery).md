---
ID: 2025-01-15-13:58
tags:
  - "#definition"
  - cyberSecurity
---
## Definition

 A Server-Side Request Forgery (SSRF) is a vulnerability which allows an attacker to ==trick the backend of the web application to make requests to an unintended server==. 
 This server can be in the internal network of the backend server or in the external network controlled by the attacker

 SSRF assaults are frequently used by criminals to attack internal systems that are protected by firewalls and inaccessible from the outside network.

**Methods to prevent SSRF attacks:**
- Whitelist IP Addresses and DNS names that the application requires access to
- Proper response handling – Response should only contain information that is anticipated
- Disable unused URL schemas: Enable only URL schemas that application relies on, (e.g. – HTTP, HTTPS)
- Proper authentication on internal services

## References
[[ref_common_vulnerabilities_real_world_web_application]]