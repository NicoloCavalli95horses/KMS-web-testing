---
ID: 2024-12-19-16:58
tags:
  - paper
  - userModels
  - testingTechniques
---
## Abstract

Recent advances in techniques for testing [[GUI (graphical user interface)]] enabled to develop workflow models and successfully employ them to generate large numbers of test cases.

The key to the success of these event-focused techniques, especially [[EFG (event flow graph)]] and [[ESG (event sequence graph)]], is that they primarily focus on the **input**, and the workflow is modeled in simple terms.

If necessary, the event-focused techniques can be augmented to model more complex systems and processes: we can extend these techniques to domains other than GUIs, to ==create a general event-driven paradigm for testing==

### Main concepts

[[systematic testing]] implies that the [[SUT (system under test)]] is predictable, controllable and observable (*monitorable* system). The grade of testability of a SUT should be measurable.

**Events**:
- events are action, message, signal that may cause a change in the state of the SUT
- events are essential to monitor a system
- events are externally perceptible, contrary to states, that are internal
- events are externally observable phenomenon, such as an environmental stimulus or a system response
- there is no distinction between different types of events. One is only interested in events and their sequences

In model-based testing, most of the recognized research work is based on state-based models, such as UML state diagrams or [[FSM (finite-state machine)]]
- since a model based on events ([[ESG (event sequence graph)]]) is decoupled from the internal behavior/state of a SUT, ==it is necessary more abstract and simpler== than a model based on states
- research have been done to convert events-models to states-models and viceversa 

[[positive testing]] and [[negative testing]] can be modelled wi

**Positive testing**: the SUT do produce the expected output
- e.g. the SUT should allow entering characters that are allowed in a login form
**Negative testing**: the SUT does not produce the output that is not expected. An undesirable behavior is exercised to confirm to confirm that the system does not display that behavior
- e.g. the SUT should forbid entering characters that are not allowed in a login form





## References
[[ref_testing_event_center_activity]]