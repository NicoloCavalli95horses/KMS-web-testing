
| ID       | 2024-12-18-16:49                                                       |
| -------- | ---------------------------------------------------------------------- |
| **Tags** | #paper #gui #geneticAlgorithm #specificationMining #testingTechniques  |
## Abstract

Developers of a software’s graphical user interface (GUI) often *fail to document the interface specifications*. Without these, models used for automated test generation
and execution remain imperfect and incomplete. This leads to unexpected behavior that creates ==unrecoverable situations for test harnesses, and missed coverage.==
- In this paper, we present **AutoInSpec**, a technique to infer an important class of specifications, temporal and state-based invariants between GUI events that have been incorrectly modeled
- Unlike existing specification mining approaches, that require full execution traces, or source code, and that mine all invariants, we simplify the problem. We guide AutoInSpec with coverage criteria and use a previously developed repair framework that builds coverage-adequate test suites, removing unexecutable sub-sequences from consideration
- These failing sub-sequences are input to a logic-based inference engine, armed with known invariant templates, to obtain the missing specifications. We validate AutoInSpec on a set of well studied GUI applications



## References
[[ref_autoinspect_using_missing_test_coverage]]