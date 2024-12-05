| ID       | 2024-12-05-15:24 |
| -------- | ----------------- |
| **Tags** | #definition       |
## Definition

An evil RegEx is a [[RegEx (Regular Expression)]] that present a dangerous pattern that can lead to [[ReDos (Regular Expression Denial of Service)]] issues. Evil RegEx contains:
- grouping with repetition
- repetition inside a group
- alternation with overlapping

## Examples of Evil Regex
- **(a+)+$**
- **(a|aa)+$**
- **(a|a?)+$**

While the following simple regex required to explore just three paths: **(a|b)c** (it means: "a" or "b", followed by a "c")
- a ➔ c
- b ➔ c
- no match

This evil RegEx required to explore potentially a large number of paths: **(a|b)\*c** 
It means: "a" or "b" repeated an indefinite number of times, and followed by "c"
- with an input like "aaaaaaaaaaaaaac" an [[NFA (Nondeterministic Finite Automation)]] algorithm would have to check 2^15 (32768) combinations to determine if there is match
## References
https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS#