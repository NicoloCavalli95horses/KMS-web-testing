---
ID: 2025-03-19T09:18:07.851Z
tags:
  - paper
  - XSS
  - CSFR
  - IaaS
  - cloudSecurity
  - projectSLR
Rank: A*
Project:
  - SLR
---
A CCI is a self-service interface that allows starting or stopping VMs. These interfaces may be based on any standardized technology (XML/SOAP, REST/HTTP, JSON, AJAX, etc.), and often use a web interface as client. The CCIs have public parts that can be exploited. XSS, CSRF, RCE were found in 3 popular IaaS platforms

## Context

An IaaS cloud provides the consumer with full control over the (virtualized) infrastructure to use. A consumer has the choice between:
- (virtual) hardware configurations
- operating systems (bundled into a Virtual Machine, VM)
- network configurations
- storage systems

Even if all other components of a cloud system (VMs, virtual networks, persistent storage) are protected by perimeter security systems (network separation, firewalls, IDS), the ==Cloud Control Interface necessarily must be exposed to the outside world==, since it must allow for “on-demand self-service”
- therefore, CCIs are public web applications
- the user data is secure only if the CCIs is secure

A British company went out of business because refuse to pay an hacker who threatened to delete all company data in their Amazon AWS CCI

CCIs often:
- have a complex and outdated interface
- rely on legacy features

Private clouds are advertised to be safer than public or hybrid clouds. But the ISO/IEC 17788 and the NIST definitions don't address technical specifications that prove this claim
- ==In a private cloud, the CCI may only be reachable from a well-defined, closed subnet== (e.g. a company’s Intranet)

This paper discuss the security of 4 well-known private cloud projects: Eucalyptus, OpenNebula, OpenStack, openQRM

## Approach

To analyze a private CCI, the authors
- used a web browser within the company network
- used the port 80 (HTTP)
- performed: [[XSS (cross site scripting)]] and [[CSRF (cross-site request forgery)]], [[RCE (Remote Code Execution)]]
- the prerequisite of the attacks is that the victim must visit a (malicious) webpage of the attacker, in order to perform a CSRF
- successful attacks are categorized as **DoS-level** (use or block resources of the cloud), **control-level** (the state of the cloud is altered, e.g., modify account details), **compromise-level** (complete access of VM data)
## Results

- we were able to break security of the web interfaces of Eucalyptus, OpenNebula, and openQRM
- at least ==one attack also worked== if access to the web interface was restricted by a ==firewall==, blocking all direct access
- all three major systems were well designed, but the inclusion of a direct data channel through the web browser to each VM proved to be problematic. For openQRM, nearly no security measures were in place. This seems to be an effect of ==most discussions on cloud security concentrating on the VM level, which does not raise awareness for the CCI==
- Multiple SQL injection vulnerabilities were found in openQRM
- Eucalyptus used AngularJS which does not completely sanitize inputs to its library (version 4.0.0 and 4.0.1). This allowed the execution of arbitrary code which lead to the possibility to start and stop VMs, and read sensitive credentials
- Most of the bugs we found were *stored XSS* vulnerabilities

## Discussion an recommendations

- Developers of cloud management platforms have to keep web attacks in mind when developing a web interface, *even if that web interface is not meant to be publicly accessible*
- Since a cloud management web interface is a single centralized place where all users (consumers as well as administrators) use the same functionality, ==privilege escalation attacks are very dangerous==
- always use security related HTTP headers and implement [[cross-domain policies]]
- tools like noVNC should be used carefully, since a connection may be initialized by some malicious JavaScript. Use a [[CAPTCHA (Completely Automated Public Turing-test-to-tell Computers and Humans Apart)]] or a password

---
#### References
- [[(Felsch, Heiderich, et al., 2015)]]