
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
- the GUI must be decomposed into manageable parts
## References
[[ref_coverage_criteria_gui_testing]]