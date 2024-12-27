---
ID: 2024-12-26-15:59
tags:
  - softwareEngineering
  - testingTechniques
---
# Preface

Testing is one of the most important computer topics:
- How do you ensure that all of the software you produce does what it was designed to do ([[positive testing]]), and doesn’t do what it isn’t supposed to do? ([[negative testing]])

# Introduction

The approach of the book is practical and evidence-based. No mathematical proofs of the correctness of a program are considered

# 1. Self-assessment test

Computers and softwares affect more people and businesses now than ever before.
Software is *pervasive*: there are few tools nowadays that are not software driven. Hence, testing should be pervasive too.

A general negative attitude toward testing is registered:
- using libraries and dependencies that have been pre-tested "justify" a lack of attention in testing activities
- tight deadlines and time contraints
- complex development environment and few resources

# 2. The psychology and Economics of Software Testing

In an ideal world, we would want to test every possible permutation of a program. In most cases, however, this simply is not possible (see [[CA (covering array)]] to redure permutations number).

Definition of testing from the assumption that the program contains errors (p.20):

~~Testing is demonstrating that the code is error-free~~ this is virtually impossible

> [!What is software testing]
Testing is the process of executing a program with the intent of finding errors

Do not try to demonstrate that a program is error-free. Instead, try to demonstrate that the program has errors. The output of this attitude leads to add value to the code.

The idea is to consider the software as a sick patient:
- if we test it and we don't find anything, it's like paying a doctor for a useless service that make you question his abilities
- if a doctor find a problem, both the patient and the doctor are happy because now they can work toward a solution

The best way to prove something it is ==not to find confirmations, rather to deny the disconfirmations== (see [[confirmation bias]])

It is generally impractical, often impossible, to find **all the errors** in a program.

Differences between [[black-box testing]] and [[white-box testing]]

**Testing guidelines**
1) Always define clearly the expected output or result of a program (see [[test oracle]])
2) A programmer should avoid attempting to test his own program, because his judgement is biased. If the implementation is incorrect due to the programmer’s misunderstanding of the specifications, it is likely that the programmer will carry the same misunderstanding into the test
3) A programming organization should not test its own programs
4) Any testing process should include a thorough inspection of the results of each test
5) Test cases must be written for input conditions that are invalid and unexpected, as well as for those that are valid and expected
6) Examining a program to see if it does not do what it is supposed to do is only half the battle; the other half is seeing whether the program does what it is not supposed to do
7) Avoid throwaway test cases unless the program is truly a throwaway program
8) Do not plan a testing effort under the tacit assumption that no errors will be found
9) The probability of the existence of more errors in a section of a program is proportional to the number of errors already found in that section
10) Testing is an extremely creative and intellectually challenging task