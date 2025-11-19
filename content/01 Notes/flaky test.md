---
ID: 2025-02-06-16:14
tags:
  - "#definition"
  - visualTesting
  - flakyTest
---
## Definition

[[flaky test]] refer to ==tests with unstable test results==. That is, the same test suite *sometimes passes and sometimes fails under the exact same software code and testing code* 
- The existence of flaky tests destroys the deterministic relationship between test results and code quality
- Once a flaky test appears, it may lead to tons of efforts wasted in debugging the failed test, which leads to delays in software release cycle and reduced developer productivity

While most of the research in this context has covered [[unit testing]], not more has been said in [[E2E (end-to-end) testing]] for UIs.

UI testing involves asynchronous events and the execution speed may vary a lot among tests

### Impacts of Flaky UI Tests

- **Individual Test Failures:** the simplest impact that flaky test can have on test suites is that the individual test run will fail. This flaky behavior leads to a minimal amount of time and resources wasted by attempting to retry the single test.
- **Build Failures**: flaky tests that are part of continuous integration systems can lead to intermittent build failures. Flaky tests in this stage lead to wasted time trying to identify the underlying cause of the build failure only to find out that the failure was not caused by a regression in the code.
- **CI Test Timeouts**: some flaky behaviors do not cause the tests to fail outright. Instead, they cause hangups in the CI system that lead to timeouts. These hangups waste time as the system waits for a process that never finishes, causing the CI system to wait until a specified timeout is met.

---
#### References
- [[(Romano, Song, et al., 2021)]]

