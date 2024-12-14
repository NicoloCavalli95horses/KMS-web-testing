| ID       | 2024-12-11-13:52 |
| -------- | ----------------- |
| **Tags** | #ref              |
## External Link
https://www.sciencedirect.com/science/article/pii/S0164121224003480?dgcid=rss_sd_all

## BibTeX

@article{OLIANAS2024112304,
title = {STILE: A tool for optimizing E2E web test scripts parallelization},
journal = {Journal of Systems and Software},
pages = {112304},
year = {2024},
issn = {0164-1212},
doi = {https://doi.org/10.1016/j.jss.2024.112304},
url = {https://www.sciencedirect.com/science/article/pii/S0164121224003480},
author = {Dario Olianas and Maurizio Leotta and Filippo Ricca and Matteo Biagiola and Paolo Tonella},
keywords = {End-to-end testing, Web testing, Parallel testing, Dependency graph, Selenium, Docker},
abstract = {Web applications quality is commonly assessed by executing End-to-End (E2E) test scripts interacting with those systems as a human tester would. To avoid setting up the web application state for each test script, testers usually create test scripts that may depend on others previously executed. However, the presence of dependencies prevents parallelization, a fundamental technique for speedup the execution of large test suites. In this paper, we present Stile, a tool for parallelizing the execution of E2E web test scripts that generates and executes a set of test schedules satisfying two important constraints: (1) every schedule respects existing test dependencies, and (2) all test scripts in the test suite are executed at least once. Moreover, Stile optimizes the execution by running only once the test scripts that are shared among the schedules. We empirically evaluated Stile on eight E2E test suites by comparing the execution time of Stile both with the sequential execution and with the parallel execution based on Selenium Grid. Our results show that Stile can reduce the execution time up to 80% w.r.t. the sequential execution and up to 50% w.r.t. Grid. Moreover, Stile provides a reduction in the CPUs usage (i.e., overall CPU-time) up to 75%.}
}