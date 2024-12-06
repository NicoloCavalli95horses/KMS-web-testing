| ID       | 2024-12-06-10:11 |
| -------- | ---------------- |
| **Tags** | #definition      |
## Definition
Similar to:  [[EFG (event flow graph)]], it describe the events net a GUI but it puts more focus on the sequences and the dependences.

First, the possible events are extracted from the GUI:

![[event_sequence_graph.png]]

Then, an event flow graph is create, abstracting away the interface details:

![[event_flow_graph 1.png]]

All the valid sequences are identifies:

![[event_sequences.png]]

The test sequences are logically inferred (since a test cannot start on e4, a step back is required)

![[test_extraction_esg.png]]
## References
[[ref_lightweight_static_analysis_gui_testing]]