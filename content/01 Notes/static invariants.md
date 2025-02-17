---
ID: 2025-02-10-11:46
tags:
  - "#definition"
  - codeAnalysis
  - softwareEngineering
---
## Definition

A static invariant ==is a property of a program that can be determined without executing the code==, only by analyzing its syntactic and semantic structure. Static invariants are guaranteed to hold for all executions of the program and do not depend on empirical observation, as [[dynamic invariants]] do

### Examples

```python
def multiply_by_two(x):
    return 2 * x
```

- without executing this function, we can assume that the return value of it will always be an even number

```python
for i in range(10):
    assert i < 10  # Invariante statico: i non supera mai 9

```
- i will never be > than 10

---
#### References
- [[(Weissbacher, Robertson, et al., 2015)]]
