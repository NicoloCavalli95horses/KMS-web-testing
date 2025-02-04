---
ID: 2025-02-04-09:51
tags:
  - "#definition"
  - softwareEngineering
---
## Definition

*Instrumenting* code means modifying it (or running it with special tools) ==to gather information about its behavior without altering its core functional logic==. 

This technique is used in various contexts, such as:
- **Performance Profiling**: adding instructions to measure the execution time of functions or blocks of code
- **Debugging**: inserting logs or breakpoints to trace the execution of the program
- **Testing**: inserting checks to verify code coverage or compliance with specific properties
- **Monitoring and Telemetry** : collecting data about software usage in production (e.g., advanced logging, system metrics).
- [[symbolic execution]] or [[concolic execution]]: instrumenting to analyze all possible executions of a program and identify vulnerabilities.

For example, in JavaScript, a tool like **Istanbul** can instrument the code to collect statistics on test coverage.
In more complex systems you can use tools like Valgrind (for memory profiling and debugging) or LLVM sanitizers (for more in-depth analysis).

---
#### References
- https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)

