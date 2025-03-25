---
ID: 2024-12-04-17:31
tags:
  - definition
  - testingTechniques
  - fuzzing
---
## Definition

==Fuzzing or fuzz testing is an automated software testing technique that involves providing **invalid**, **unexpected**, or **random** data as inputs to a computer program:==
- The program is then monitored for exceptions such as crashes, [[error]], failing built-in code assertions, or potential memory leaks.

Typically, fuzzers are used to test programs that ==take structured inputs.== 

> [!SUMMARY]
>  An effective fuzzer generates semi-valid inputs that are "valid enough" in that they are not directly rejected by the parser, but do create unexpected behaviors deeper in the program and are "invalid enough" to expose corner cases that have not been properly dealt with.

==For the purpose of security, input that crosses a trust boundary is often the most useful:==
- For example, it is more important to fuzz code that handles a file uploaded by any user than it is to fuzz the code that parses a configuration file that is accessible only to a privileged user

## Types of fuzzer

- **Generation-based:** the input is generated from scratch
- **Mutation-based**: the input is obtained modifying existing inputs
- **Dumb fuzzer**: it is not aware of the expected input structure
- **Smart fuzzer**: it is aware of the expected input structure

Categories according to  [[(Neef, Kleissner, et al., 2024)]]:
- ==white box fuzzers== have full access to the source code, so they can monitor the internal behavior and states of the fuzzed application. [[symbolic execution]] and [[dynamic taint analysis]] are two such approaches
- ==black box fuzzers== cannot collect information about the target application’s internal behavior or state. These fuzzers can only monitor the application from the outside and thus have limited ability to optimize test cases
- ==grey box fuzzers== work with or without source code while still gathering execution information about the fuzzed application. The collected application’s execution coverage becomes the feedback to the fuzzer

Most of the research focus has been put on binary application [[(Neef, Kleissner, et al., 2024)]]:
- In traditional binary application fuzzing, a crash of the target application is an indicator that the generated test case resulted in a potential vulnerability or unintended behavior

---
## References
- https://en.wikipedia.org/wiki/Fuzzing
- [[(Neef, Kleissner, et al., 2024)]]