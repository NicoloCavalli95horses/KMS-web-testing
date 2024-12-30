---
ID: 2024-12-30-11:10
tags:
  - "#definition"
  - testingTechniques
  - blackBoxTesting
---
## Definition

Equivalence partitioning is a [[black-box testing]] method that ==divides input data into partitions or classes that are expected to behave similarly==. Each class represents a range or group of inputs, that should produce the same outcome when tested.
- it reduces the need to test all possible values, since each test in that specific partition should have the same outcome
- for each input condition class, a test candidate represents all the units or most of the units in that equivalence class. Therefore, executing this candidate will be enough to cover that specific class
- if an [[error]] is found for this element of the set, we can assume that other tests will present the same or similar errors. Conversely, if the test representing the class passes, there should be no need to execute the other tests of the same class

The equivalence partitioning method consists into identifying the equivalence classes (1) and defining the test cases to be executed (2)

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
- all the inputs should have an ID

**Defining the test cases to be executed (2)**
The test cases must be created from the previous classification. Hence, the test cases must be cover as many single units (ID-n) inside the classes as possible. The best test covers the most classes

> [!NOTE] Title
> Contents
The power of a test can be measured by the number of units it actually covers

### Limits

- The quality of the result relies on the equivalence classes defined arbitrarily
- Corner cases or input combinations are not covered

## References
[[04 Test-case Design]]