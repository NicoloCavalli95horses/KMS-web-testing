---
ID: 2025-01-23-14:25
tags:
  - paper
  - mutationTesting
  - webApplication
  - selenium
  - e2e
---
## Introduction

In real world applications, [[E2E (end-to-end) testing]] is performed to assure the correctness of several interaction flows. With time and resources constraints, it is essential to have ==a method to select which test suits to use, and which framework to rely on, finding a trade-off between execution time and ability to detect bugs==.

[[Mutation testing]] is a technique used for many years to evaluate the effectiveness of tests in detecting bugs.

Mutta (*automatic MUTator for web E2E Test Automation*) is a tool developed to qualify E2E test suits. It basically tests the E2E tests.

Development process of Mutta:
1. Define the actual source code mutations for the various server-side source files composing the web application under test using [[Pitest]], a automated tool for source code mutations
2. Apply each mutation to the source code (one at a time)
3. Deploy the modified web application on the Web Server
4. Run the modified web application under test
5. Run the E2E test suites against the modified web application
6. Collect, elaborate and save all the test results
7. Stop the web application and restore the original app and return to the second step if other mutations have to be considered

The high-level goal of our tool is to enable the tester to compare the bug-detection capability of different test suites, or even of different E2E frameworks.

## References
[[ref_mutta_e2e_mutation_testing]]