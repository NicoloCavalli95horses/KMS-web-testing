---
ID: 2024-12-30-16:49
tags:
  - softwareEngineering
  - testingTechniques
  - whiteBoxTesting
---
An example of [[unit testing]] is provided, combining all the white-box testing techniques described in the previous chapters.

Considering the manner in which the modules of a program are combined, we could highlight two types of unit testing:
- [[non-incremental (big-bang) unit testing]]: each class or function is tested independently
- [[incremental or integration testing]]: classes and functions are tested in their relationship and integrated together

The way functions and classes talk to each other in a program impact:
- the form in which module tests cases are written
- the types of test tools that might be used
- the order in which modules are coded and tested
- the cost of generating test cases
- the cost of debugging (locating and repairing detected errors)