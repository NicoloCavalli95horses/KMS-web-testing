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
- flaky tests were collected by ==manually inspecting a sample of GitHub commits== and then ==manually analyzed==

![[flaky_ui_test_findings.png]]
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

### Fixing strategy

Flaky tests belonging to the same class might be solved in a similar way:

**Async-await class**
- add or increase the delay in order to reduce the change of encountering flaky behaviors
- Use proper API to wait until DOM elements are fully loaded or network requests stop

**Environment**
- change library version (upgrade or downgrade)
- fix incorrect API access

**API issues**
- disable animations
- refactor logic implementation

**Logic issues**
- remove tests
- mark tests as flaky or optional
- blacklist tests

---
#### References
- https://ui-flaky-test.github.io/ (dataset)
- [[(Romano, Song, et al., 2021)]]
