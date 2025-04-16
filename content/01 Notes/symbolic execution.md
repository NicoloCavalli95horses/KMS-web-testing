---
ID: 2024-12-13-15:20
tags:
  - definition
  - softwareEngineering
  - symbolicExecution
---
## Definition

Also known as symbolic evaluation, symbolic execution denotes the process of analyzing what inputs cause each part of a program to execute. 
- ==The core idea in symbolic execution is to work with abstract inputs instead of concrete inputs. ==

For example, considering the following function:

```JavaScript
function add(a, b){
  if (a > 0) {
    return a + b;
  }
  return b - a
}
```

To test this function, we could try with different inputs, such as:
- add(3, 4)
- add(1, -1)
- add(6.2, 0)
- add(0, 1)
- add(-2.3. -6)

This manual approach could work, but may be time consuming and [[error]] prone, in case we forgot to provide a combination of numbers that leads the execution to the implicit "else" part.

A symbolic approach would use abstract value and would focus on the condition instead of the concrete input.
- instead of providing integers, such as 3, 4, we provide abstraction, such as a > 0, b > 0, and then the symbolic executor will use concrete inputs to test the execution

In order to create useful abstraction, the developer must be aware of the implementation of the function under test. So, symbolic execution is a [[white-box testing]] technique.

Symbolic execution is mostly used to identify vulnerabilities such as:
- [[buffer overflow]]
- integer overflow
- input validation

### Limits

- symbolically executing all feasible program paths does not scale to large programs, since the number of paths grows exponentially with an increase in program size and can be even infinite in case of loops

### Tools

- **ExpoSE**: dynamic symbolic execution engine for JavaScript (https://github.com/ExpoSEJS/ExpoSE)

---

See also  [[concolic execution]].

## References
- https://it.eitca.org/cybersecurity/eitc-is-acss-advanced-computer-systems-security/security-analysis/symbolic-execution/examination-review-symbolic-execution/what-is-the-basic-idea-behind-symbolic-execution-and-how-does-it-differ-from-ordinary-testing-or-[[fuzzing]]/
- [[(Le, Huu-Tung, Pham, et al., 2019)]]