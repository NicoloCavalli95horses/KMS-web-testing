---
ID: 2024-12-06-13:35
tags:
  - definition
  - testingTechniques
---
## Definition

Dealing with a "white box" implies having complete access to the [[SUT (system under test)]]: it is possible to look at the code and structure of the product and to use that knowledge to perform the tests.

White box testing is used in the [[unit testing ]]phase, although it can also occur in other stages such as [[integration testing]] ones. For the execution of this method, the tester or the person who will use this method ==must have extensive knowledge of the technology used to develop the program.==

**Key features:**
- it takes in consideration unique characteristics of a software
- it is carried out by software developers who have an extensive knowledge of the codebase
- used in unit testing or integration testing
- more time consuming than the [[black-box testing]]
- the focus is on the software logic
- it is suitable for algorithm testing
- can detect logical [[error]], find random typos, uncover incorrect programming assumption

## White box testing techniques are:

Static white box testing (see [[03 Program Inspections, walkthroughs and reviews]])
- **Desk checking**: In this process the authors who have knowledge in the programming language very well will be involved in desk checking testing. This can be done very quickly without much dependency on other developers or testers. The main advantages are defects detected in this stage are easily located and correct at same time. 
- **Code walkthrough**: This testing is also known as technical code walkthrough, in this testing process a group of technical people go through the code. This is one type of semi-formal review technique. In Code walkthrough process a high level employees involved such as technical leads, database administrators and one or more peers. The people who involved in this technical code walkthrough they raise questions on code to author, in this process author explains the logic and if there is any mistake in the logic, the code is corrected immediately
- **Formal Inspections:** a formal review and aimed at detecting all faults, violations and other side effects.

Structural White box testing
- Control flow/ Coverage testing
- Basic path testing
- Loop testing
- Data flow testing 

**Exhaustive path testing**: testing all the possible logic path in a software. This can lead to explosion of combinatorial possibilities (p.11, [[ref_art_of_software_testing]]). Even with a complete exhaustive path testing:
- *incorrect implementation of specifications*: the program could still not implement correctly the specifications, and there is no way to know it from a white-box perspective
- *missing necessary paths:* there could be other valid paths that are missing
- *data-sensitivity errors*: there could be bugs related to actual inputs, which path testing does not consider

Also known as: *clear box testing, code-based testing, structural testing, transparent testing, logic-driven testing*
## References
[[ref_white_and_black_box_testing]]
[[ref_art_of_software_testing]]