---
ID: 2025-04-15T08:54:02.435Z
tags:
  - paper
  - projectSLR
  - businessFlowTampering
  - patching
  - staticAnalysis
  - whiteBox
Project:
  - SLR
---
## Context

[[logic vulnerability]] cause a program to operate incorrectly or exhibit unexpected behavior. An attacker can exploit these vulnerabilities to perform [[BFT (business flow tampering)]]

While most of the work is on vulnerability analysis or prevention, this paper focuses on patching the issues.

**AIV (application inconsistency vulnerabilities)**
Control-check related logic vulnerabilities can be patched because the consistency of the check can be assessed through the web application
- vulnerability descriptions also provide information about the exact location of the issue

**Challenges**
- the patch should contain relevant variables and data dependencies should be maintained
- the patch should not break legitimate and correct logic
- the patch should be performant and should not constitute an overhead

## Approach

LOGICPATCHER, a static analysis tool that takes a patch condition as input, and suggests optimal or near-optimal candidate path placement locations
- the input of the tool is a reported vulnerability (a description of the issue and the exact location in the code)

The tool can generate security patches for ==any type of logic vulnerability caused by missing or inconsistent checks==, with minimal guidelines about the vulnerability

The input requirements are as follows:
- source files of the [[SUT (system under test)]]
- list of detected vulnerabilities, which include:
	- missing condition that needs to be added (C), express in terms of variables, values and conditional operators
	- vulnerable path (P): the path from the source to the sensitive operation ([[sink function]])
	- exception handling function (E) (optional): the set of actions that are allowed to be executed if  C is negated
- the vulnerability description is usually the output of a vulnerability scanner therefore requires little to no manual effort

Algorithm proposed:
- parsing the source code and generating a [[CFG (Control Flow Graph)]]
- identifying nodes which are data dependent or control dependent
- traversing the CSF of one of the consistent paths backward from the sink location to find the related instruction to condition variables and values
- After adding all the related instructions to the patch, LOGICPATCHER compares these instructions to the instructions which are in the vulnerable path P. The reason for this comparison is that our approach avoids the insertion of instructions to a path twice as it may cause side-effects

## Evaluation

9 open-source web applications were evaluated and out of 29 vulnerable files we have generated patches for 27 of them correctly

## Limits

- LOGICPATCHER is a ’best effort’ tool which suggest security patches to developers/system administrators. A separate formal verification or manual effort must be made to verify the correctness of the generated patches and the resulting source code, because of a lack of program specification and of cascading sinks
- the approach is fundamentally a [[static analysis]] therefore it has all the limitation of these techniques (false positives, blindness, ...)

---
#### References
- [[(Monshizadeh, Naldurg, et al., 2016)]]
