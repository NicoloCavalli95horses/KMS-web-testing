| ID       | 2024-12-05-11:23           |
| -------- | -------------------------- |
| **Tags** | #definition #cyberSecurity |
## Definition
The Regular expression Denial of Service (ReDoS) is a type of [[DOS (Denial of Service)]] attack, that exploits the fact that some Regular Expression implementations are based on [[NFA (Nondeterministic Finite Automation)]] algorithms that try every possible combinatoric path in order to establish a result. This create a finite loop that takes a lot of time due to combinatoric calculations.
- An attacker can then cause a program using a Regular Expression (Regex) to enter these extreme situations and then hang for a very long time.

## Example
This simple regex required to explore just three paths: (a|b)c
It means: "a" or "b", followed by a "c"
- a ➔ c.
- b ➔ c.
- no match.

This regex required to explore potentially a large number of paths
It means: "a" or "b" repeated an indefinite number of times, and followed by "c"
(a|b)\*c 
- the regex is not bad per se, but with an NFA it would be really expensive to check if
## References
https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS#