---
ID: 2025-07-09T13:16:46.698Z
tags:
  - dataDisclosure
  - HTTP
  - proxy
  - logicFlaw
  - logicVulnerability
Rank: A*
---
## Context

[[logic vulnerability]] such as bugs in the authorization logic can expose the data of one user to another. Such data disclosure vulnerabilities are common and they can be caused by a single omitted access control check in the application. ==This makes it possible to validate the correct operation of the authorization logic externally, based on the observed data in HTTP traffic to and from an application==. We describe FlowWatcher, an HTTP proxy that mitigates data disclosure vulnerabilities in unmodified web applications

Data disclosure vulnerabilities are hard to detect, because are caused by semantic bugs in the authorization logic

Detect data disclosure vulnerabilities
- program analysis techniques: usually white-box, require access to the codebase and are language-specific,
- input validation techniques: focus on injection attacks, which may cause data disclosure. These techniques cannot detect access control flaws,
- 

## Approach



## Evaluation


## Results

We evaluate a prototype implementation of FlowWatcher as a plug-in for the Nginx reverse proxy and show that, with short UDA policies, it can mitigate CVE bugs in six popular web applications.


## Limits




---

Indirectly related to [[parameter tampering]]: sensitive data disclosure it is possible with parameter tampering (cfr. [Wordpress CVE-2010-0682](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-0682))

#### References
- [[(Muthukumaran, O'Keeffe, et al., 2015)]]
