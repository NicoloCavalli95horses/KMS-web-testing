---
ID: 2024-12-04-14:52
tags:
  - definition
  - testingTechniques
---
## What is an oracle

In software testing, a test oracle (or just oracle) is ==a provider of information that describes correct output based on the input of a test case.== Testing with an oracle involves comparing actual results of the [[SUT (system under test)]] with the expected results.

An oracle can operate separately from the SUT; accessed at test runtime, or it can be used before a test is run with expected results encoded into the test logic.

## The oracle problem

Determining the correct output for a given input (and a set of program or system states) is known as the ==oracle problem or test oracle problem==,  which some consider a relatively hard problem, and involves working with problems related to controllability and observability.

## Types of oracles

- official documentations or technical specifications of the [[SUT (system under test)]],
- other products or systems related to the SUT
- an heuristic oracle that provides correct or approximated results for a set of data (input)
- a statistic oracle that provides a correct answer based on statistic probability
- a consistency oracle that match the results of the execution of a test with the result of the execution of a similar test
- an oracle based on models
- an oracle based on logical inference
- human judgement (the end user decides whether if the SUT display the right behavior)
## References

https://en.wikipedia.org/wiki/Test_oracle