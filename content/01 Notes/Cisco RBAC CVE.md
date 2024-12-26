---
ID: 2024-12-03-09:38
tags:
  - definition
  - cyberSecurity
  - cve
---
## Cisco Prime Home authentication bypass vulnerability

A vulnerability ([[CVE (common vulnerabilities and exposures)]]) in the web-based graphical user interface (GUI) of Cisco Prime Home could allow an unauthenticated, remote attacker to bypass authentication. The attacker could be granted full administrator privileges.

The vulnerability is due to a ==processing error== in the role-based access control ([[RBAC (role-based access control)]]) of URLs.

An attacker could exploit this vulnerability by sending a crafted HTTP request to a particular URL. An exploit could allow the attacker to obtain a valid session identifier for an arbitrary user, which would allow the attacker to perform any actions in Cisco Prime Home for which that user is authorized-including users with administrator privileges.
## References
https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20161102-cph