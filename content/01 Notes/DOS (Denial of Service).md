---
ID: 2024-12-05-11:24
tags:
  - definition
  - cyberSecurity
---
## Definition

The **Denial of Service (DoS)** attack is focused on making a resource (site, application, server) unavailable for the purpose it was designed. There are many ways to make a service unavailable for legitimate users:
- manipulating network packets
- programming
- logical
- resources handling vulnerabilities

If a service receives a very large number of requests, it may cease to be available to legitimate users. In the same way, a service may stop if a programming vulnerability is exploited, or the way the service handles resources it uses.

> **A typical hacker move**
> Sometimes the attacker can ==inject and execute arbitrary code while performing a DoS attack== in order to access critical information or execute commands on the server.
> *How is this even possible?*
> 	- Even if the system is overloaded with requests the malicious code could be executed during a [[buffer overflow]] (input data are not validated and sanitized correctly and this could lead to unexpected behaviors)
> 	- The code could be inject from a low-level and immediately executed
> 	- Some systems, even under a DoS attacks, have critical processes that still run and that can be exploited
> 	- The DoS attack often act as a cover, distracting the developers and allowing hacker to execute more damaging attack undisturbed

Denial-of-service attacks significantly degrade the service quality experienced by legitimate users. These attacks introduce large response delays, excessive losses, and service interruptions, resulting in direct impact on availability.

## Risk Factors

Risk factors:
- the system architecture was not designed to meet traffic demand overflows. This makes it easier to perform a DoS attack and can cause DoS symptoms in the absence of an actual attack
- an organization should avoid taking action that can make them a target of a DoS attack unless the benefits of doing so outweigh the potential costs or mitigating controls are in place

## References
[[ref_security_web_application_state_art]]
https://owasp.org/www-community/attacks/Denial_of_Service