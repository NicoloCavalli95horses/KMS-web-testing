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

[[logic vulnerability]] such as bugs in the authorization logic can expose the data of one user to another. Such [[data disclosure]] vulnerabilities are common and they can be caused by a single omitted access control check in the application. ==This makes it possible to validate the correct operation of the authorization logic externally, based on the observed data in HTTP traffic to and from an application==. We describe FlowWatcher, an HTTP proxy that mitigates data disclosure vulnerabilities in unmodified web applications

Data disclosure vulnerabilities are hard to detect, because are caused by semantic bugs in the authorization logic

Detect data disclosure vulnerabilities
- *program analysis techniques*: usually white-box, require access to the codebase and are language-specific,
- *input validation techniques*: focus on injection attacks, which may cause data disclosure. These techniques cannot detect access control flaws,
- *anomaly detection approaches*: can prevent unauthorized data disclosure if it constitutes a deviation from regular application behavior, but for many applications the “normal” behavior cannot be captured reliably
	- execution-based approaches: record internal applications states by instrumenting the language interpreter (see [[code instrumentation]])
	- network-based approaches: train a ML model according to observed network traffic
- *dynamic data tracking*: shadow authentication and authorization to detect access control bugs by tracking data in an application. These techniques rely on a modified language interpreter

## Approach

A “defense-in-depth” approach that validates the correct operation of the access control policy outside of the application
- we propose a proxy that observes the HTTP request and response traffic of all users and, based on a specification of the intended access control policy of the application, detects and prevents unauthorized data disclosure

Benefits of a proxy:
- it can be applied across a range of different web applications
- the proxy can work with only a subset of the full policy of an app
- it support encrypted traffic by terminating the encrypted connection
- does not impact performance

FlowWatcher mitigates data disclosure vulnerabilities in web applications by ==monitoring their HTTP traffic and prohibiting incorrect data flows==
- it relies on the specifications of the intended access control policies. These specifications are declared once, in a domain-specific rule-based language (UDA policy). A subset of the application's access control model is enough for FlowWatcher to work
- A UDA policy contains rules that link HTTP requests and responses to (i) the definition of new users, groups or data objects and to (ii) updates of the access control policy
- the association between each HTTP request and response with a user is done by intercepting the authentication method

## Evaluation

FlowWatcher can mitigate 9 data disclosure vulnerabilities from the CVE database reported for 6 popular web applications, and it is efficient: its implementation as an Nginx plug-in does not have a measurable impact on application throughput or latency.

## Results

We evaluate a prototype implementation of FlowWatcher as a plug-in for the Nginx reverse proxy and show that, with short UDA policies, it can mitigate CVE bugs in six popular web applications.


## Limits




---

Indirectly related to [[parameter tampering]]: sensitive data disclosure it is possible with parameter tampering (cfr. [Wordpress CVE-2010-0682](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-0682))

#### References
- [[(Muthukumaran, O'Keeffe, et al., 2015)]]
