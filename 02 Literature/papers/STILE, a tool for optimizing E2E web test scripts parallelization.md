
| ID       | 2024-12-11-13:52                                     |
| -------- | ---------------------------------------------------- |
| **Tags** | #paper #JavaScript #testingTechniques #e2e #selenium |
## Abstract

Web applications quality is commonly assessed by executing End-to-End (E2E) test scripts interacting with those systems as a human tester would. To avoid setting up the web application state for each test script, ==testers usually create test scripts that may depend on others== previously executed.  However, the presence of dependencies prevents parallelization, a fundamental technique for speedup the execution of large test suites.

In this paper, we present STILE, a tool for parallelizing the execution of E2E web test scripts that generates and executes a set of test schedules satisfying two important constraints:
1) every schedule respects existing test dependencies
2) all test scripts in the test suite are executed at least once

Moreover, STILE optimizes the execution by running only once the test scripts that are shared among the schedules. We empirically evaluated STILE on eight E2E test suites by comparing the execution time of STILE both with the sequential execution and with the parallel execution based on Selenium Grid. 
- Our results show that STILE can reduce the execution time up to 80% with respect to the sequential execution and up to 50% with respect to Grid. 
- Moreover, STILE provides a reduction in the CPUs usage (i.e., overall CPU-time) up to 75%

## Main concepts

E2E tests have a longer execution time w.r.t. unit and integration tests:
- they need to interact with the browser's GUI
- the front end part of the web app has to communicate with the backend and all the third-part services to ensure the validity of the testing environment
- E2E tests suites have to be executed in a certain order because of test dependencies: if in test 1 a new user is created and test 2 is about performing action with that user, test 2 depends on test 1 and cannot be executed before.

 **STILE (teST suIte paraLlelizEr)**:  a tool to optimize the parallel execution of E2E web test suite that takes into account dependencies. It is based on a dependency graph, where:
 - nodes represent test scripts
 - edges represent dependencies

The dependency graph can be manually maintained by testers or automatically computed by a [[DDT (dependency detection tool)]]

- Using TEDD, a dependency graph is obtained
- STILE infers a set of sequences that cover the initial E2E test suite
- a [[prefix tree]] is used to optimize the parallel execution of the tests, by avoiding the repeated execution of common prefixes. The common prefixes run only once, then a snapshot of the state of the GUI is saved and used as reference for n tests that depend on that state.
- a number of Docker containers are used to run all the schedules in parallel

STILE reduces the execution time up to  80% and the CPU-time up to 75%.

## References
[[ref_stile_tool_for_e2e_parallelization]]