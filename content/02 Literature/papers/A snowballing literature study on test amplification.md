---
ID: 2024-12-13-13:31
tags:
  - paper
  - testAmplification
  - testGeneration
  - automaticTesting
---
## Abstract

This study reviews 70 papers in the context of test amplification, drawing a comprehensive picture of the different engineering goals proposed in this context.

==**Test amplification**==: consists of exploiting the knowledge of a large number of test cases, in which developers embed meaningful input data and expected properties in the form of [[test oracle]], in order to **enhance** these manually written tests with respect to an engineering goal (e.g., improve coverage of changes or increase the accuracy of fault
localization).

**Example**
- the addition of test cases automatically generated from the existing manual test cases to increase the coverage of a test suite over the main source code

A key difference from other types of testing: ==the input used for test amplification are the manually coded test cases==

### Amplification by adding new tests as variants of existing ones

> A test amplification technique **AMPadd** consists of creating new tests from existing ones to achieve a given engineering goal. The most commonly used engineering goal is to improve software coverage

Tests generated in this way are effective in achieving multiple engineering goals, such as:
- improving code coverage
- fault detection ability
- debugging effectiveness

**Challenges**: the number of added tests can sometimes be large, hence, filter the most useful tests is a challenge. The generalization of the methods is often limited. Some of the techniques used have known performance issues.

### Amplification by synthesizing new tests with respect to changes

Software applications are typically not tested at a single point in time; they are rather
tested incrementally, along with the natural evolution of the code base.
New tests are typically added together with a change or a commit, to verify, for instance, that a bug has been fixed or that a new feature is correctly implemented.
In the context of test amplification, it directly translates to the idea of ==synthesizing new tests as a reaction to a change==

> Test amplification technique **AMPchange** consists of adding new tests to the current test suite, by creating new tests that cover and/or observe the effects of a change in the application code

Techniques and algorithms used in this cases: [[GA (genetic algorithm)]], [[concolic execution]]

**Challenges**: many of the works in this area consider a single change in a single statement, but realistic scenarios have not been covered yet (e.g., usually a developer modify the code in multiple parts, within a single commit). The solutions proposed in this area are still not scalable.

### Amplification by modifying test execution

In order to explore new program states and behavior, it is possible to interfere with the
execution at runtime so as to modify the execution of the program under test.

> Test amplification technique **AMPexec** consists of modifying the test execution process or the test harness in order to maximize the knowledge gained
> from the testing process.

AMPexec technique would randomize the order in which the tests are executed, to ==reveal hidden dependencies== between tests and potential bugs derived from this situation

**Challenges**: the literature in this field is still young and techniques for test execution modification have not been widely explored yet.

### Amplification by modifying existing test code

In testing, it is usually up to the developer to design [[integration testing]] (large) or [[unit testing]] (small) tests. Techniques have been proposed to modifying existing tests with respect to a certain engineering goal

> Test amplification technique **AMPmod** refers to modifying the body of existing test methods. The goal here is to make the scope of each test cases more precise or to improve the ability of test cases at assessing correctness (with better oracles). Differently from AMPadd, it is not about adding new test methods or new tests classes but it is about ==changing existing tests==

**Challenges**: even if impressive results have been obtained, no experiments have been carried out to study the acceptability (likelihood to commit) and the maintainability of amplified tests

JavaScript application have received very little attention in the test amplification context (p.25) (see [[JavaScript, The Good Parts]])

## References
[[ref_snowballing_literature_study_test_amplification]]