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


## Main concepts

[[black-box testing]] of GUIs can be achieved by executing test cases that are composed of event sequences. This practice can unearth both GUI faults and business logic issues.

To model ESG or EFG a [[GUI ripper]] can be used: the [[SUT (system under test)]] is executed and the encountered events, with their relationships, are analyzed and stored into a model. This model is then used to create tests by simply extracting sequences of events and the corresponding components which are involved.

The longer the events sequence, the more the possible unique sequences: to reduce the combinatorial effect, sampling techniques such as [[CA (covering array)]] are often used. 

However, even reducing the total number of permutations, some sequences may be infeasible because of event dependencies.

> [!NOTE] Note
> The presence of infeasible event sequences is much more severe and frequent for long sequences.

This paper propose a solution to automatically repair this kind of test suite, by adding feasible test cases using an evolutionary process ([[GA (genetic algorithm)]])


## References
[[ref_repairing_gui_test_ga]]