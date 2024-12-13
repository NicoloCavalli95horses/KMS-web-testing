| ID       | 2024-12-13-15:20 |
| -------- | ----------------- |
| **Tags** | #definition       |
## Definition

The core idea in symbolic execution is to work with abstract inputs instead of concrete inputs. For example, considering the following function:

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

This manual approach could work, but is it time consuming and error prone.

A symbolic approach would use abstract value and would focus on the condition instead of the concrete input.
- instead of providing integers, such as 3, 4, we provide abstraction, such as a > 0, b > 0, and then the symbolic executor will use concrete inputs to test the execution





See [[concolic execution]].
## References
