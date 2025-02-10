---
ID: 2025-02-10-11:45
tags:
  - "#definition"
  - codeAnalysis
  - softwareEngineering
---
## Definition

Dynamic program invariants are ==statistically-likely assertions established by observing multiple program executions==

Unlike [[static invariants]], which are determined by analyzing the code without actually executing it, dynamic invariants are inferred by *running the program multiple times on different inputs and observing the values ​​*that the variables take on. If a statement is always true in all these runs, then it may be a dynamic invariant.

### Example

```python
def sum_positive(arr):
    s = 0
    for x in arr:
        if x > 0:
            s += x
    return s

```

If we collect data from multiple runs and observe that:
- `s` is always greater than or equal to 0,
- `x` is always greater than 0 inside the if,

If the returned result is always non-negative, we can formulate possible dynamic invariants:
- `s >= 0` (because it only accumulates positive numbers)
- `x > 0 `inside the if
- `return` value `>= 0`

These invariants are not formally guaranteed but ====based on the collected data.

### Tools

**Daikon** is a well-know tool capable of executing a program with different inputs and detecting dynamic invariants

---
#### References
- [[ref_zigzag_web_app_csv]]
