---
ID: 2025-01-08-11:19
tags:
  - paper
  - geneticAlgorithm
  - programRepair
---
## Abstract

Automated functional testing of [[GUI (graphical user interface)]] rely on [[ESG (event sequence graph)]], [[EFG (event flow graph)]] or [[EIG (event interaction graph)]], which approximate all possible sequences of events. The graphs are used to generate test cases (which are other event sequences), to achieve a specific coverage goal. Given that these graphs are approximation, infeasible sequences may occur.

This paper proposes a method to automatically repair GUI test suites, generating new test cases that are feasible, using a [[GA (genetic algorithm)]].
The algorithm outperforms a random algorithm trying to achieve the same goal.


## Introduction

[[black-box testing]] of GUIs can be achieved by executing test cases that are composed of event sequences. This practice can unearth both GUI faults and business logic issues.

To model ESG or EFG a [[GUI ripper]] can be used: the [[SUT (system under test)]] is executed and the encountered events, with their relationships, are analyzed (or ripped). These models are then used to combine and test sequences of events for program validation.



## References
[[ref_repairing_gui_test_ga]]