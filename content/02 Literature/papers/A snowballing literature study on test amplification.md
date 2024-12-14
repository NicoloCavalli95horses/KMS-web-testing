
| ID       | 2024-12-13-13:31                                              |
| -------- | ------------------------------------------------------------- |
| **Tags** | #paper #testAmplification  #testGeneration  #automaticTesting |
## Abstract

This study reviews 70 papers in the context of test amplification, drawing a comprehensive picture of the different engineering goals proposed in this context.

==**Test amplification**==: consists of exploiting the knowledge of a large number of test cases, in which developers embed meaningful input data and expected properties in the form of oracles, in order to **enhance** these manually written tests with respect to an engineering goal (e.g., improve coverage of changes or increase the accuracy of fault
localization).

**Example**
- the addition of test cases automatically generated from the existing manual test cases to increase the coverage of a test suite over the main source code

A key difference from other types of testing: ==the input used for test amplification are the manually coded test cases==

### Amplification by adding new tests as variants of existing ones

> A test amplification technique AMPadd consists of creating new tests from existing ones to achieve a given engineering goal. The most commonly used engineering goal is to improve coverage according to a coverage criterion.

Tests generated in this way are effective in achieving multiple engineering goals, such as:
- improving code coverage,
- fault detection ability,
- debugging effectiveness

**Challenges**: the number of added tests can sometimes be large, hence, filter the most useful tests is a challenge. The generalization of the methods is often limited. Some of the techniques used have known performance issues.

### Amplification by synthesizing new tests with respect to changes

Software applications are typically not tested at a single point in time; they are rather
tested incrementally, along with the natural evolution of the code base: new tests are typically added together with a change or a commit, to verify, for instance, that a bug has been fixed or that a new feature is correctly implemented.
In the context of test amplification, it directly translates to the idea of synthesizing new tests as a reaction to a change

> Test amplification technique AMPchange consists of adding new tests to the current test suite, by creating new tests that cover and/or observe the effects of a change in the application code

Techniques and algorithms used in this cases: [[genetic algorithms]], [[concolic execution]]
### Amplification by modifying test execution




### Amplification by modifying existing test code








## References
[[ref_snowballing_literature_study_test_amplification]]