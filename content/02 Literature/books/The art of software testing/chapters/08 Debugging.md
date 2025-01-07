---
ID: 2024-12-30-16:54
tags:
  - testingTechniques
  - softwareEngineering
---
**Debugging** is the process of correcting a software after one or more test cases has found errors.

**Brute force methods**:
Debugging ==with a storage dump== (a crude display of all storage locations in hexadecimal or octal format)

Debugging ==using print/console commands== 
- does not encourage you to think about the program
- it is a hit-or-miss method
- it requires to change the program and those changes may mask the error, alter critical timing relationships or introduce new errors
- not possible in all kind of programs

Debugging with ==automated debugging tools==
- set breakpoints that cause the program to be suspended when a particular statement is executed, enabling the programmer to examine the current state
- it is a hit-or-miss method

**Debugging by induction or deduction** 
Careful thought will find most errors
- induction means *reasoning from the particular to the general*. That is, start with the clues (the symptoms of the error and possibly the results of one or more test cases) and look for relationships among the clues to find where the bug is.
- deduction means *reasoning from the general to the particular*. We proceed from some general theories or premises, using the processes of elimination and refinement, to arrive at a conclusion

**Debugging by backtracking**
An effective method for locating errors in small programs is to backtrack the incorrect results through the logic of the program until you find the point where the logic went astray. 
- ‘‘if this was the state of the program at this point, then this must have been the state of the program up here"

**Debugging by testing**
Using ad hoc test suits to detect the bugs in a specific piece of code

> [!NOTE]
> Corrections are much more error prone than the original code in the program. 

