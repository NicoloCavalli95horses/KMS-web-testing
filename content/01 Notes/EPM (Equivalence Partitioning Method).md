---
ID: 2024-12-30-11:10
tags:
  - "#definition"
  - testingTechniques
  - blackBoxTesting
---
## Definition

Equivalence partitioning is a [[black-box testing]] method that consists in ==dividing up your tests into sections with similar values== and then performing a test on each section.
- It eliminates the need to test every potential value, since each test in that specific partition should have the same outcome
- For each class, a candidate represents all the tests in that class. Therefore, executing this candidate is equivalent to executing any other test
- If an error is found for this element of the set, we can assume that other tests will present the same or similar errors. Conversely, if the test representing the class passes, there should be no need to execute the other tests of the same class

### Identifying the equivalence classes

The technical specifications are analyzed in order to get a set of inputs conditions. Then, this set is filtered:
- the *valid equivalence* class should include all the valid inputs
- the *invalid equivalence* class should include all the invalid inputs

Example:
- the specs tell us that the username length must be more than 1 and less that 999 characters long
- *Valid equivalence class*:
	1. username.length > 1 && username.length < 999
- *Invalid equivalence classes*
	2. username.length <1
	3. username.length >999

The equivalence class can be split into smaller equivalence classes, if needed.

Each class should be identified by an ID (in the example, the number progression).

### Defining the test cases to be executed

The test cases must be created from the equivalence classes. Hence, the test cases must be cover as many equivalence classes as possible. The best tests, which cover the most classes, should be used during the actual testing phase to save time and resources.



### Limits
- The quality of the result relies on the equivalence classes defined arbitrarily
- Corner cases or input combinations are not covered

## References
[[04 Test-case Design]]