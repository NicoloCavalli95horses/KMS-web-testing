---
ID: 2025-03-13T13:50:54.107Z
tags:
  - paper
  - inputValidation
  - codeAnalysis
  - dynamicAnalysis
Project:
  - SLR
---
## Context

In web development often client and server are built separately, by different teams, in different programming languages and platforms. When the client and server are supposed to share application logic but do not, an “*impedance mismatch*” occurs
- [[client-side input validations]] should be in sync with server-side input validation

## Approach

Automatically examine the source code of a web application, identify the server-side input validation logic, and replicate that logic on the client. This simplifies the development process and also improve security

**WAVES (Web Application Validation Extraction and Synthesis)**: automatically synthesizes the client-side validation code through:
- **server analysis**: WAVES performs a [[dynamic analysis]] submitting form inputs to the server and inspecting the sequence of instructions that the server executes, using [[static taint analysis]] . The key idea is that when the server is given an input it accepts, ==the sequence of if-statements it executes contain all the input validation constraints==
- the candidate input validation constraint is validated: if the constraint is falsified the server should logically reject the input. The conditions that if falsified don't lead to an error are excluded
- once the candidate have been shortlisted, WAVES determines if the constraints are dependent on the server's environment or not[^1]
- the required code is generated
	- server-side, to deal with dynamic constraints implemented on the client side, requiring a client-server communication
	- client-side, duplicating the static server-side constraint and translating into JavaScript
- **integration**: how the synthesized code is integrated into the code bases is up to the discretion of the developers involved, but must be done manually. It requires adding a couple of files to the code bases

WAVES is implemented in Java and Lisp

---
#### References
- [[(Skrupsky, Monshizadeh, et al., 2012)]]

[^1]: *Dynamic constraints* are server-side constraints that make use of data that is not available to the client, such as database or file system. While *static constraints* can be checked directly by JavaScript code (e.g., the password must contain at least 10 chars), *dynamic constraints* can only be checked after communicating with the server, so the client has to actually call the server for that specific validation (e.g., the username must be unique). Dynamic constraints can also change each time the server’s environment changes
