---
ID: 2025-03-28T08:26:34.005Z
tags:
  - paper
  - BytecodeInstrumentation
  - projectSLR
  - pathTraversal
  - inputValidation
  - SQLIA
  - Java
Project:
  - SLR
---
## Context

[[string validation]] vulnerabilities have a long history and many security measures are proposed, but are still in high ranks in vulnerability reports. In this paper, we propose a new technique that can monitor input values and take action if malicious input values are received.
- The proposed technique finds vulnerable methods and inserts input validation codes in compiled Java web applications (without source codes) using **bytecode [[instrumentation]]**
- Bytecode instrumentation does not need the program source code, therefore is a [[black-box testing]] approach
## Approach

Source-code instrumentation is a process that automatically adds specific code to the source files under analysis and investigation. After compilation, the execution of instrumented code produces ==data for runtime analysis or component testing==

The technique proposed consists of two modules:
- **injector:** searches for validation targets in a Java web application and modifies them to invoke the input checker module. For examples, classes like `FileInputStream` or `FileReader` are passed to the input checker module
- **input checker:** validates input values against a set of rules and returns the validated input. It also saves logs on the validation results for further analysis. If a invalid or malicious value is found, predefined and safe default values are returned instead

**Rule set**
- **Path traversal**: an input path is converted to an absolute path to prevent [[directory traversal (path traversal)]]. If an input path is not a sub-directory of the root of the web server the input is dropped
- **SQL injection**: the rule compares character strings in input values. It tokenizes input values with white space delimiter, then it checks if there exist the same strings before and after equal sign (‘=’). It also checks UNION operator followed by multiple ‘null’s. This prevent most common [[SQLIA (SQL injection attack)]]

## Evaluation

[[benchmark testing]] is carried out with [ OWASP WebGoat](https://owasp.org/www-project-webgoat/). Experimental results show that our technique effectively detect problematic input and prevent SQLIA and path traversal

---
#### References
- [[(Cho, Kim, et al., 2016)]]
