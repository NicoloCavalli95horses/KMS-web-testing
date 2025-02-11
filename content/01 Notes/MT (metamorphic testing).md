---
ID: 2025-02-11-14:46
tags:
  - "#definition"
  - metamorphicTesting
  - testingTechniques
  - gui
---
## Definition

Metamorphic testing is a technique to identify a [[test oracle]] in a context in which the correctness of an output it is not clear.

The core idea is to identify **metamorphic properties**, ==that is relationships between input-output pairs or groups that the system should respect.==
- If the software violates these relationships, there is an anomaly

### Example

Let's say we are testing a function that sorts an array of numbers. It is not always trivial to state if the output is correct, but we can leverage metamorphic properties to better analyse the function's behavior and to state whether the output is acceptable or not.

Consider a function `sort()` and an array `const arr = [2, 4, 1, 3]`. 
By executing `sort()` with `arr` we get `[1, 2, 3, 4]`

Now we can consider the following metamorphic properties to better analyze the function behavior and to tell if the output is correct:
- if we add an element that is already present, the relative order of the other elements should stay the same (e.g. by adding '1' to the end of `arr` we should get  `[1, 1, 2, 3, 4]`, meaning that '4' is always the last number, and '3' is always before the last number, and so on)
- if the order of the input elements is changed, the output should not change
- concatenating multiple input arrays that lead to `arr` should lead to the same output

---
#### References
- [[ref_gui_metamorphic_testing_android]]