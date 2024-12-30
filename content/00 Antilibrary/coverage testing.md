---
ID: 2024-12-30-09:39
tags:
  - "#definition"
  - whiteBoxTesting
  - testingTechniques
---
## Definition

The statement coverage is a [[white-box testing]] technique that ==aims to execute every statement in a program, at least once==.

In practice, this means to stress a function by passing every kind of input possible, in order to execute every statement it includes. The goal is to make every line of code covered. This is mostly useful to detect unreachable paths or statements that throw an [[error]].

Aiming at 100% coverage may seem relevant, but it is not actually a good way to testing your software:
- logical errors are not detected (e.g., the actual *condition* used in the function may be incomplete or week, or a path may be executed by mistake) 

```Python
if (x > 0):
    print(true)
print(false)

# With x = 1 all the statements are executed, but the case x <= 0 is not considered
```

Types of coverage testing:
### Decision coverage

Each decision/path in statements such as if, else, while, switch, etc, must be executed at least once. The focus is on executing each branch, not to test every possible condition that satisfies the statements. In the following example *x > 0* and *x < 0* are required:

```Python
if (x > 0 or y == 0):
    print(true)
else:
    print(false)

# In decision coverage, the focus is on the branch execution
# only x > 0 and x < 0 need to be executed to execute the different paths
```

### Condition coverage

In condition coverage, the condition inputs are tested, regardless of the actual decision/branch. Each condition shall be evaluated ==as true or false, at least once==. The  An improved version is the **decision/condition coverage**, which focus both on the conditions and on the decision/path.

```Python
if (A || B): 
    print("Decision met")

# Not all the possible combination are taken into consideration:
  #  A = true, B = false and A = false, B = true are enough to 
```

### Multiple-condition coverage

Each possible condition is tested, as well as each possible output. This is the most complete approach, but also the most computationally expensive. Similar to [[combinatorial testing]].

```Python
if (x > 0 and y < 5):
    print("Condition met")

# 4 tests are needed:
  # x > 0 true, y < 5 true
  # x > 0 true, y < 5 false
  # x > 0 false, y < 5 true
  # x > 0 false, y < 5 false
```

## References
[[04 Test-case Design]]