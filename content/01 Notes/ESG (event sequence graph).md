---
ID: 2024-12-06-10:11
tags:
  - definition
  - eventBasedTesting
  - eventModel
  - graphModel
---
## Definition

Similar to:  [[EFG (event flow graph)]] and [[EIG (event interaction graph)]], an Event Sequence Graph (ESG) describes the events net a GUI but it puts more focus on ==linear sequences often in temporal defined contexts==. It also highlights illegal sequences of events 

**How to create a ESG**
First, the possible events are extracted from the GUI by relying on:
- [[static analysis]]
- [[dynamic analysis]]
- [[symbolic execution]]
- [[concolic execution]]
- execution traces
- manually definitions made by programmers
- random chains of events without any knowledge of the app (e.g. Android UI Monkey)
- [[GUI ripper]]

![[event_sequence_graph.png]]

Then, an event flow graph is create, abstracting away the interface details:

![[event_flow_graph 1.png]]

All the valid sequences are identifies:

![[event_sequences.png]]

The test sequences are logically inferred (since a test cannot start on e4, a step back is required)

![[test_extraction_esg.png]]

Also called: GUI-based scenarios

**Applications**
- automated testing
- creating app usage documentation

**Classification of infeasible events sequences**
- **Disabled**: a [[standard widgets]] or [[ad hoc widgets]] of the GUI is always disabled and that event cannot be reached from the detected event sequence (e.g., the user is not allowed to access a premium functionality of an app)
- **Required**: an functionality is disabled/locked if a certain action is not execute before. Some event needs another event to be executed before it is enabled
- **Consecutive**: two events cannot be executed at the same time, because they are mutually exclusive
- **Excluded**: similar to the consecutive one, it occurs when enabling the first event causes the second one to disable, and there is no way to change this state even manipulation all the other events available
- **Compound constraint**: a combination of multiple constraints above

Since a model based on events is decoupled from the internal behavior/state of a SUT, ==it is necessary more abstract and simpler== than a model based on states, such as [[FSM (finite-state machine)]]

**Creation contraints**
- the starting and finishing nodes cannot be empty
- each event is reachable from at least one start event
- at least one finish event is reachable from each event

See [[event models comparison]]
## References
[[(Arlt, Podelski, Bertolini, et al., 2012)]]
[[(Linares-Vasquez, White, et al., 2018)]]
[[(Cohen, Myra B., et al., 2012)]]
[[(Belli, Beyazit, Memon, 2012)]]
[[(Huang, Cohen, Memon, 2010)]]
