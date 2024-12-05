| ID       | 2024-12-04-17:31               |
| -------- | ------------------------------ |
| **Tags** | #definition #testingTechniques |
## Definition

==Fuzzing or fuzz testing is an automated software testing technique that involves providing **invalid**, **unexpected**, or **random** data as inputs to a computer program:==
- The program is then monitored for exceptions such as crashes, [[error]], failing built-in code assertions, or potential memory leaks.

Typically, fuzzers are used to test programs that ==take structured inputs.== 

> An effective fuzzer generates semi-valid inputs that are "valid enough" in that they are not directly rejected by the parser, but do create unexpected behaviors deeper in the program and are "invalid enough" to expose corner cases that have not been properly dealt with.

==For the purpose of security, input that crosses a trust boundary is often the most useful:==
- For example, it is more important to fuzz code that handles a file uploaded by any user than it is to fuzz the code that parses a configuration file that is accessible only to a privileged user

## Types of fuzzer

- **Generation-based:** the input is generated from scratch
- **Mutation-based**: the input is obtained modifying existing inputs
- **Dumb fuzzer**: it is not aware of the expected input structure
- **Smart fuzzer**: it is aware of the expected input structure
- **White-fuzzer, grey-fuzzer, or black-box fuzzer:** depending on whether it is aware of the whole program structure
## References
https://en.wikipedia.org/wiki/Fuzzing