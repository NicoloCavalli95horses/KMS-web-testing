---
ID: 2025-04-24-11:48
tags:
  - "#definition"
  - softwareEngineering
---
## Definition

Daikon is a software that detects likely invariants of programs.
- An invariant is a condition that ==always holds true at certain points in the program==
- For example, if during the execution of a function a variable `x` is always positive, Daikon can infer the invariant `x > 0`

Daikon typically works in three phases:
- **Code instrumentation**: the program is modified to record the values ​​of the variables during execution
- **Program execution**: with test inputs, to collect execution traces
- **Inference of invariants**: Daikon analyzes the collected traces and proposes logical invariants (such as equalities, inequalities, dependencies between variables, etc.)

### Example

Let's say we have this function in JS

```js
function isEven(n) {
  return n % 2 === 0;
}
```

We can execute the function with some test values:

```js
console.log(isEven(2));  // true
console.log(isEven(4));  // true
console.log(isEven(7));  // false
```

And record all the output:

```txt
n = 2 → output = true
n = 4 → output = true
n = 7 → output = false
```

A Daikon engine could automatically infer that:

- `n ∈ ℤ`
- `result ⇔ n % 2 == 0` (logical constrain between input and output)
- `n >= 0` (if during the test we used only positive numbers - which may be a wrong logical constraint)


> [!WARNING] Daikon engine for JavaScript?
> Daikon does not support JavaScript directly, but it is possible to record JavaScript outputs in a format accepted by Daikon (.csv, .dtrace), and then give this inputs to a Java program

---
#### References
- [Daikon](https://plse.cs.washington.edu/daikon/)
- Used by [[(Li, Yan, et al., 2012)]] to extract value-based invariants
