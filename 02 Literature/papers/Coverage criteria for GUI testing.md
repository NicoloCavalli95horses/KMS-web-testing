
| ID       | 2024-12-09-10:04                                  |
| -------- | ------------------------------------------------- |
| **Tags** | #paper #gui  #componentTesting #eventBasedTesting |
## Main concepts
The widespread use of GUIs has led to the construction of more and more complex GUIs. Because GUIs have characteristics different from other software, conventional software techniques cannot be directly applied. ==The development of [[coverage criteria]] is a non addressed issue==

Problems:
- the source code of GUIs components may not be always available for coverage evaluation
- the input of a GUI consists of a series of events. The number of permutations may lead to a large number of GUI states to be tested
- the event sequences cannot be obtained from the code because they are at a higher level of abstraction

**How to develop a coverage criteria based on events?**
- the GUI must be decomposed into manageable parts (GUI component): a hierarchy must be exploited to identify groups of GUI events that can be tested in isolation
- the finite applicability requirement must be satisfied (a finite-sized test suite should be taken)
- there are infeasible sequence path to be taken into consideration (e.g., you can't paste before copy or cut)

If we can isolate GUI components (see [[standard widgets]]), then we can analyze and test:
- **intra-component coverage criteria:** events within a component (event, event-interaction, length-n event)
- **inter-component coverage criteria**: events among components (invocation, invocation-termination, length-n event). These are captured by an [[integration tree]]

A GUI component can be described with a [[EFG (event flow graph)]]

We present algorithms to automatically construct EFG and integration trees.
We present a case study to demonstrate the correlation between event-based coverage and statement coverage, and the usefulness of the coverage report.

## References
[[ref_coverage_criteria_gui_testing]]