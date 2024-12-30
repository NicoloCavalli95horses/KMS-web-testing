---
ID: 2024-12-30-09:39
tags:
  - "#definition"
  - whiteBoxTesting
  - testingTechniques
---
## Definition

The statement coverage is a [[white-box testing]] technique that ==aims to execute every statement in a program, at least once==.

In practice, this means to stress a function by passing every kind of input possible, in order to execute every statement it includes. The goal is to make every line of code covered. This is mostly useful to detect:
- [[division-by-zero error]]
- statements that throw an [[error]] 

Aiming at 100% coverage may seem relevant, but it is not actually a good way to testing your software:
- logical errors are not detected (e.g., the actual *condition* used in the function may be incomplete or week)
- path errors are not detected (e.g., a path may be executed by mistake) 

For example, ==with *x = 1*, all the statements are executed, but the case *x <= 0* is not considered==

```Python
if (x > 0):
    print(true)
print(false)
```



**Decision coverage**: requires that each decision (if, else, while, switch statements, etc) have a true or false outcome and that each statement be executed at least once.

```Python
if (x > 0):
    print(true)
else:
    print(false)
```


**Condition coverage**: you write enough test case to ensure that each condition in a decision takes on all possible outcomes at least once. It is not enough to met the condition and execute the related statements; with condition coverage we want to test every condition possible in 

**Decision/condition coverage**: 

**Multiple-condition coverage**: 

## References
[[04 Test-case Design]]