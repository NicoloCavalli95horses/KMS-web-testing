| ID       | 2024-12-06-16:45 |
| -------- | ---------------- |
| **Tags** | #definition      |
## Definition

A unit test verifies the behavior of a software unit in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.

This testing is mainly done to test each and individual units separately.
- unit testing can be done for small units of code (objects, functions) or generally no larger than a class

Most of the time, a value returned from an object, a function or a class is tested against a [[test oracle]]

## Best practices

- tests should be fast and simple, meaning developers need the test cases to be run at a higher speed as it serves the purpose of unit testing
- the simpler the unit test cases, the more accurate the test results
- test cases should not duplicate the implementation logic
- test cases should be deterministic: they should exhibit the same behavior as long as their code is unchanged
- QAs must execute tests on real browsers and devices, not emulators and simulators, to keep tests deterministic
- adapt an influential naming convention for the test cases

## References
https://www.browserstack.com/guide/unit-testing-in-javascript
[[ref_white_and_black_box_testing]]