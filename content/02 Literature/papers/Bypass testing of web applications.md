---
ID: 2025-01-23-17:16
tags:
  - paper
  - testingTechniques
  - inputValidation
  - webApplication
---
Web software applications are increasingly being deployed in sensitive situations, to transmit, accept and store sensitive or confidential data

Input validation testing (IVT) checks user inputs to ensure that they conform to the program’s requirements
- A common technique in Web applications is to perform input validation on the client with scripting languages
- The problem is that users can bypass this validation. Bypassing validation can cause failures in the software, and can also break the security on Web applications, leading to unauthorized access to data, system failures, invalid purchases and entry of bogus data

We are developing a strategy called bypass testing to create client-side tests for Web applications that intentionally violate explicit and implicit checks on user inputs.

This paper describes the strategy, defines specific rules and adequacy criteria for tests, describes a proof-of-concept automated tool, and presents initial empirical results from applying bypass testing.

**Client side-checking**
- check that the required fields are filled in
- can be done as soon as a user event is triggered or after the user clicks on a submit button
- avoid a trip to the server

==Client side-checking is not enough and the controls should be repeated on the server-side.==

**By-passing the client-side controls**
- typing the GET request directly in the URL box
- write a client script to execute POST requests on the same client
- overriding hidden input fields that are not visible on the screen but send data to the server
- adding SQL statements to an input ([[XSS (cross site scripting)]])
- by-passing is not always a bad thing because it can ease the testing process

## References
[[ref_bypass_testing_of_web_app]]