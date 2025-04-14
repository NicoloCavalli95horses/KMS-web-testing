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

Different algorithms can be used to repair software statements. But GA performs wells in optimization contexts.

**Process**
1. execute the initial test cases and remove any infeasible sequence (see constraints in [[ESG (event sequence graph)]])
2. the infeasible sequences are taken into consideration and the repair phase starts
3. for each invalid sequence, the GA algorithm returns the best test case and adds it to the final test suite (a better solution may not be found in certain cases)

**How the reparation works**
- **chromosome**: the chromosome is a single test case, that is an event sequence
- **alleles**: the events that form the event sequence
- **population**: is a list of test cases. The first one is generated randomly
- **stopping criteria**: 1) max number of generation reached 2) max number of bad moves reached (e.g., the best fitness of the current population is worse than that of the previous one) 3) the best case of the population already covers the maximum number of t-way combinations one test case can cover
- **[[fitness function]]**: 1) feasibility of the test case 2) the new coverage a test case brings
- **crossover and mutation**: test cases are ranked in descending order and pair consecutive chromosomes. A one-point crossover is used.

---
## References
- [[(Huang, Cohen, Memon, 2010)]]