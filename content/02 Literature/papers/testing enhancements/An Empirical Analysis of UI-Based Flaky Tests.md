---
ID: 2025-02-06-16:13
tags:
  - paper
  - visualTesting
  - testAmplification
  - gui
  - webApplication
---
## Context

To investigate [[flaky test]] related to the [[GUI (graphical user interface)]], we collect and analyze 235 real-world flaky UI test examples found in popular web and Android mobile projects. For each flaky test example, we inspect commit descriptions, issue reports, reported causes, and changed code.

![[flaky_ui_test_findings.png]]
## Approach

Manual inspection of a sample from GitHub commits (+150 flaky tests found)

### Causes of flakiness

![[causes_of_flakiness.png]]

**Async await (45%)**
The majority of the flaky test is due to ==asynchronous operations that may present different outcomes==
- The common cause of such issues is that the tests do not properly schedule fetching and performing actions, causing issues with attempting to interact with elements that have not been loaded completely
- Flaky test in this category may be address *network resource loading issues*, *resource rendering issues* or *animation timing issue.*

**Environment**
Some flaky tests manifest ==due to differences in the underlying platform used to run the tests==. The platform can include the browser used for web projects and the version of Android, iOS, etc… used for mobile projects.

**Test Runner API Issue** 
Another root cause of flakiness we found involved an ==issue when interacting with the APIs provided by the testing framework== that caused it to function incorrectly. Flaky tests with this root cause either:
- use the provided APIs incorrectly
- the flaky tests manage to expose an underlying issue in the provided API that causes the functionality to differ from what was expected

**Test Script Logic Issue**
In some flaky tests, flakiness arose due to ==incorrect logic within the test scripts==. The flaky tests may have failed to clean data left by previous tests, made incorrect assertions during the test, loaded resources in an incorrect order, or incorrectly used a random data generator to create incompatible data. Common problems:
- incorrect resource load order
- comparisons that involve timestamps (e.g., using the execution time as a [[test oracle]])
- badly implemented test independence (e.g., a test logically depends on the previous one)
- not covering edge cases in using randomness (e.g., a URL generated from a function that returns random characters may sometimes be invalid if the character returned is a space)

---
#### Notes
[^1]: This is a note example. Use a note to give extra information without interrupting the reading flow
#### References
- [[ref_ui_flaky_tests]]
