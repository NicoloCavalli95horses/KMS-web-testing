| ID       | 2024-12-06-13:35 |
| -------- | ---------------- |
| **Tags** | #definition      |
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

Static white box testing
- **Desk checking**: In this process the authors who have knowledge in the programming language very well will be involved in desk checking testing. This can be done very quickly without much dependency on other developers or testers. The main advantages are defects detected in this stage are easily located and correct at same time. 
- **Code walkthrough**: This testing is also known as technical code walkthrough, in this testing process a group of technical people go through the code. This is one type of semi-formal review technique. In Code walkthrough process a high level employees involved such as technical leads, database administrators and one or more peers. The people who involved in this technical code walkthrough they raise questions on code to author, in this process author explains the logic and if there is any mistake in the logic, the code is corrected immediately
- **Formal Inspections:** a formal review and aimed at detecting all faults, violations and other side effects.

Structural White box testing
- Control flow/ Coverage testing
- Basic path testing
- Loop testing
- Data flow testing 

Also known as: *clear box testing, code-based testing, structural testing, transparent testing*
## References
[[ref_white_and_black_box_testing]]
