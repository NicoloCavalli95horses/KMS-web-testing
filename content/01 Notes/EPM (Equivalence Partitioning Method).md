---
ID: 2024-12-30-11:10
tags:
  - "#definition"
  - testingTechniques
  - blackBox
---
## Definition

> [!NOTE]
> Defines condition or [[error]] classes to help reduce the number of finite tests. Assumes that a test of a representative value within a class also tests all values or conditions within that class

Equivalence partitioning is a [[black-box testing]] method that ==map software specifications into classes, grouping singular input conditions that are expected to behave similarly.==
Each class represents a group of inputs that should produce the same outcome when tested:
- for each group, a test candidate represents all (or most) of the units in that equivalence class. Therefore, executing this test is expected to be enough to cover that specific class
- if an [[error]] is found while executing a test, the same or similar errors are assumed to be find in the class to which the test belongs. Conversely, if the test representing the class passes, there should be no need to execute the other tests to explore uncovered input conditions of the same class
- this method reduces the need to test all possible input combinations, since each test in that specific partition should have the same outcome

The equivalence partitioning method consists into ==identifying the equivalence classes (1) and defining the test cases to be executed (2)==

## Example

**Specs**: "the username length must be more than 1 and less that 999 characters long"

**Class ID: username length**

| valid equivalence class                                  | invalid equivalence class      |
| -------------------------------------------------------- | ------------------------------ |
| (ID-1)  <br>username.length > 1 && username.length < 999 | (ID-2)<br>username.length <1   |
|                                                          | (ID-3)<br>username.length >999 |

**Identifying the equivalence classes (1)**
The technical specifications are analyzed in order to get a class (or multiple classes) of inputs conditions. Each class can be split into smaller ones if needed.

Each class is composed as follows:
- the *valid equivalence* sub-class should include all the valid inputs
- the *invalid equivalence* sub-class should include all the invalid inputs
- all the input conditions should have an ID

**Defining the test cases to be executed (2)**
The test cases must be created from the previous classification. Hence, the test cases must be cover as many single units (ID-n) inside the classes as possible. The best test covers the most classes

> [!NOTE] Note
> The power of a test can be measured by the number of units it actually covers

### Limits

- The quality of the result relies on the equivalence classes defined arbitrarily
- Corner cases or input combinations are not covered

## References
[[04 Test-case Design]]