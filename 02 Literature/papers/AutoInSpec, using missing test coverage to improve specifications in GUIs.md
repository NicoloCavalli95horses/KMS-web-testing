
| ID       | 2024-12-18-16:49                                                       |
| -------- | ---------------------------------------------------------------------- |
| **Tags** | #paper #gui #geneticAlgorithm #specificationMining #testingTechniques  |
## Abstract

Developers of a software’s graphical user interface (GUI) often *fail to document the interface specifications*. Without these, models used for automated test generation
and execution remain imperfect and incomplete. This leads to unexpected behavior that creates ==unrecoverable situations for automatically generated test suites, and missed coverage.==
- In this paper, we present **AutoInSpec**, a technique to infer an important class of specifications, temporal and state-based invariants between GUI events that have been incorrectly modeled
- Unlike existing specification mining approaches, that require full execution traces, or source code, and that mine all invariants, we simplify the problem. We guide AutoInSpec with coverage criteria and use a previously developed repair framework that builds coverage-adequate test suites, removing unexecutable sub-sequences from consideration
- These failing sub-sequences are input to a logic-based inference engine, armed with known invariant templates, to obtain the missing specifications. We validate AutoInSpec on a set of well studied GUI applications

### Main concepts

Incomplete or incorrect GUI specifications cause non trivial problems for model based test automation. Without a clear documentation of the GUI behavior, GUI models can't be good enough, leading a poor tests generation with test harnesses that hang or fail waiting for unavailable components to appear or to a button to be enabled.
- many existing model-based testing approaches over-approximate the system behavior
- automated specification inference has been proposed, mining system logs and execution traces or detecting invariants by [[white-box testing]], but:
	- this techniques don't work well when combinatoric operations can occur (e.g., perform any action in a drawing app)
	- it is not possible to infer GUI specifications in [[black-box testing]] condition

**AutoInSpec**: a tool for GUI model specification inference and invariants detection. It makes use of:
- [[combinatorial testing]] and [[CA (covering array)]]
- a by-product of test suite repair (see [[Automatic program repair]]), used to increase the code coverage in test suits. It makes use of [[GA (genetic algorithm)]]
- is has been validated on non-trivial GUI applications with at least 45K lines of code

 **Contributions**:
- It presents an inference specification approach for model based-GUI testing that is based on a systematic combinatorial exploration of the event-space.
- We have ==formalized and encoded a class of GUI invariants that are at the same abstraction level as the user interface==, so that they can be easily evaluated with an off-the-shelf solver
- We show that a prototype of our approach is feasible on a set of non-trivial GUI applications, finding previously unknown invariants in well-studied applications

Classification of [[ESG (event sequence graph)]] infeasible events: see link.

## References
[[ref_autoinspect_using_missing_test_coverage]]