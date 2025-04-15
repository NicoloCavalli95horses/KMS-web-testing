---
ID: 2025-04-15T08:54:02.435Z
tags:
  - paper
  - projectSLR
  - businessFlowTampering
  - patching
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
- missing condition that needs to be added (C), express in terms of variables, values and conditional operators
- vulnerable path (P): the path from the source to the sensitive operation ([[sink function]])
- exception handling function (E) (optional): the set of actions that are allowed to be executed if  C is negated

Scenarios considered:
- 

## Evaluation

9 open-source web applications were evaluated and out of 29 vulnerable files we have generated patches for 27 of them correctly

## Results

Describe the results in simple terms

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Monshizadeh, Naldurg, et al., 2016)]]
