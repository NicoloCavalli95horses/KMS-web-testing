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
Control-check related logic vulnerabilities can be patched because the ==consistency of the check can be assessed== through the web application
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

**Algorithm**
- LOGICPATCHER finds the correct location for patches by following a process that considers several aspects of the application and the vulnerability. Here are the main steps and techniques it uses:
- [[CFG (Control Flow Graph)]]: LOGICPATCHER starts by parsing the source code and generating the CFG of the application. This graph represents the possible execution paths of the program.
- Function Context Identification: LOGICPATCHER must determine in which function to insert the missing condition. It considers the chain of function calls that leads to the vulnerable "sink" (the sensitive operation). The goal is to insert the patch in the most appropriate function context to avoid "overprotecting" the application
- Overprotection Consideration: A key aspect is to ensure that adding the patch does not affect execution paths that are not vulnerable. LOGICPATCHER tries to insert the patch as close to the vulnerable sink as possible without interfering with other paths
- Handling Multiple Paths to a Vulnerable Sink: When multiple execution paths lead to a sink, but only some are vulnerable, LOGICPATCHER must ensure that the patch is applied only to the vulnerable paths, leaving the others intact
- Data and Control Dependency Analysis: To generate a correct patch, LOGICPATCHER identifies instructions that are dependent on the data or control of the vulnerable sink. These dependent instructions are included in the security condition block introduced by the patch
- Path Profiling: To distinguish and specifically target vulnerable paths, especially when they overlap with non-vulnerable paths, LOGICPATCHER uses path profiling techniques. This process enumerates all execution paths and assigns a unique identifier to each path. If entering condition C alone causes interference, the vulnerable path ID is combined with condition C to make it specific to that path
- Live Variable Analysis (LVA): LOGICPATCHER performs a live variable analysis to determine the scope of the patch. This helps identify the last statement where variables dependent on the outcome of the sink operation are still used. The patch condition block is extended to include these dependent statements to preserve the original semantics of the application
- Identifying Insertion Points: Based on the previous analysis, LOGICPATCHER suggests two candidate locations for inserting the missing condition: a start point (usually just before the vulnerable sink or earlier in the call chain) and an end point (determined by the LVA)
- Optimization: LOGICPATCHER also considers the possibility of optimizing patch insertion to address multiple vulnerabilities with a single patch, if the missing conditions or causes are similar and the paths allow it. However, current versions of LOGICPATCHER mostly handle vulnerabilities one at a time, and optimizing for multiple patches is an area for future work.

## Evaluation

9 open-source web applications were evaluated and out of 29 vulnerable files we have generated patches for 27 of them correctly

## Limits

- LOGICPATCHER is a ’best effort’ tool which suggest security patches to developers/system administrators. A separate formal verification or manual effort must be made to verify the correctness of the generated patches and the resulting source code, because of a lack of program specification and of cascading sinks
- the approach is fundamentally a [[static analysis]] therefore it has all the limitation of these techniques (false positives, blindness, ...)

---
#### References
- [[(Monshizadeh, Naldurg, et al., 2016)]]
