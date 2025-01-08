---
ID: 2025-01-08-11:58
tags:
  - "#definition"
  - eventModel
  - userModels
---
Different models can be used to analyze the events of a [[GUI (graphical user interface)]], depending on the ultimate goal to achieve.
- [[EIG (event interaction graph)]]: focuses on dependencies and relationships between events, and on interaction validity
- [[ESG (event sequence graph)]]: focuses on linear flows or timed sequences of events 
- [[EFG (event flow graph)]]: focuses on the overall flow of the events. It is a more general approach

| FEATURE     | EIG (event interaction graph)                       | ESG (event sequence graph) | EFG (event flow graph)                |
| ----------- | --------------------------------------------------- | -------------------------- | ------------------------------------- |
| goal        | interactions between events                         | valid sequences of events  | flow of events in general             |
| application | dependencies analysis                               | linear sequences testing   | flow and state testing                |
| arches      | represent relationships (cause/effect, abilitation) | represent the order        | represent a general state transitions |

