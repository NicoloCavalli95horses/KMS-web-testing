---
ID: 2024-12-05-15:24
tags:
  - definition
  - cyberSecurity
---
## Definition

An evil RegEx is a [[RegEx (Regular Expression)]] that present a dangerous pattern that can lead to [[ReDoS (Regular Expression Denial of Service)]] issues. Evil RegEx contains:
- grouping with repetition
- repetition inside a group
- alternation with overlapping

### Good RegEx

-  (a|b)c

The previous simple regex required to explore just three paths. It means: "a" or "b", followed by a "c".
- a ➔ c
- b ➔ c
- no match

### Evil RegEx

-  (a|b)\*c

This evil RegEx required to explore potentially a large number of paths
It means: "a" or "b" repeated an indefinite number of times, and followed by "c"
- with an input like "aaaaaaaaaaaaaac" an [[NFA (Nondeterministic Finite Automation)]] algorithm would have to check 2^15 (32768) combinations to determine if there is match

The process could be simplified as follows:
1) the all input is read: aaaaaaaaaaaaaac, a match is found
2) other matches could be found inside the input, so the input it analyzed step by step:
	- aaaaaaaaaaaaaa does not finish by 'c' so is not valid
	- aaaaaaaaaaaaa does not finish by 'c' so is not valid
	- aaaaaaaaaaaa does not finish by 'c' so is not valid
	- ...
	- presence of 'b' followed by 'c' is also checked
	- combination of 'a' and 'b' are also checked
	- ...

---
## References
- https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS#