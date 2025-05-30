---
ID: 2024-12-05-11:23
tags:
  - definition
  - cyberSecurity
  - DoS
  - ReDoS
---
## Definition

The Regular expression Denial of Service (ReDoS) is a [[DoS (Denial of Service)]] attack that results from an [[evil RegEx (Regular Expression)]]. [[(Kluban, Mannan, et al., 2024)]]

Some [[RegEx (Regular Expression)]] implementations are based on [[NFA (Nondeterministic Finite Automation)]] algorithms that try every possible combinatoric path in order to establish a result. An evil RegEx can be used to make the system hangs due to combinatoric calculations that take time

> [!ERROR] Tips
> The general advice is to ==avoid, if possible, using RegEx that allow very long repetitions of characters==, especially when it comes to repetitions with * (Kleene star) or +, which can lead to exponential combinatoric explorations in regex engines like JavaScript.

### Types of ReDoS

 **Reflected**: an attacker keeps sending malicious requests to the vulnerable web server.
 - Each request may be polymorphic in contents and origins (e.g., different IP addresses are used and different input are used)

**Stored**: an attacker stores malicious input to the vulnerable web server (e.g., a comment in a blog). The malicious content is fetched and matched against a vulnerable RegEx (e.g., there is an illegal-content detector). Since the malicious input is stored, each new user of the blog could potentially read that malicious input, which is public, and each time a new ReDoS attack could be triggered (depending on how the illegal-content detector is implemented, it could make sense to filter and validate content *continuously* and not just at the publication time - e.g. new tags are added)

---
## References
- [OWASP ReDoS](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS#)
- [[(Bai, Wang, Zhu, et al., 2021)]]
- [[(Kluban, Mannan, et al., 2024)]]