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

[[positive testing]] and [[negative testing]] can be modeled with an abstract syntax that describe the ESG: 

\[ A B C \]

Where:
- \[  starting point
- event A
- event B
- event C
- \] ending point

Coverage criteria:
- k-sequence coverage criterion
- fault event pair (FEP) coverage criterion

Different syntax and diagrams have been proposed in order to better model specific needs of a SUT (p.4)

**Input-Output ESG**: it focuses on the event type, marking the events with "!" (input events) and "?" (output event or system outcomes). Example:
- \[ ?a !b \]

**Communication ESGs**: it maps the behavior between two agents. Useful with sender-receiver structures.

**Quiescent ESGs**:  includes a symbol representing no actions or outputs of the system

**Timed ESGs**: define event-based model with respect to time

**Pushdown ESGs**: the ESG model comes with a stack component. A sequence of stack operations is performed when an event is executed. The execution of the event is successful if and only if the related sequence of stack operations is also successful

> [!summary]
> Mixed approaches or custom models that fit the SUT needs are often used. The more the model is customized, the more precise it is and the less generalizable it is

---
## References
- [[ref_testing_event_center_activity]]