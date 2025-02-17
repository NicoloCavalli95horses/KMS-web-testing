---
ID: 2024-12-26-16:15
tags:
  - "#definition"
  - testingTechniques
  - softwareEngineering
---
## Definition

Systematic testing is an engineering activity that requires the following key features:
- ==Predictability==: the output of a [[SUT (system under test)]], given an input, should be known. It should be derived from the [[test oracle]] and the set of test cases
- ==Controllability== by using the inputs, a specific behavior of the SUT should be established. It should be possible to always obtained the desired behavior 
- ==Observability== is the ability to determine the characteristics of a behavior in a system by controlling the inputs and observing its outputs. Based on the executed events, the behavior of the SUT should be observable in order to come to an unambiguous decision whether the test has succeeded or failed.

Predictability, controllability, observability together lead to a monitorable system. 
It should be possible to measure the grade of testability of a monitorable system. 

## References
[[(Belli, Beyazit, Memon, 2012)]]