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