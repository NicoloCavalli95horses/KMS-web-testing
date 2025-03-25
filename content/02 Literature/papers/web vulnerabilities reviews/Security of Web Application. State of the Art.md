---
ID: 2025-01-15-09:52
tags:
  - paper
  - metaAnalysis
  - cyberSecurity
  - webApplication
---
## Introduction

Web applications are one of the most ubiquitous platforms for information and services delivery over Internet. The security problems are becoming serious with increasing complexity of applications and with more and more sophisticated techniques by attackers

**Web application security: needs and concerns**
Challenges related to the web world:
- Predicting and simulating realistic workload that characterize real world application, is still an unsolved problem
- Differences in implementation and level of standard compliance, combined with different browser support, creates non trivial challenges
- The polyglot context created by backend and frontend technologies creates an additional overhead for fully automated continuous integration practices (CI)
- Web applications are vulnerable to [[DoS (Denial of Service)]] and [[DDoS (Distributed Denial of Service)]] attacks.
- Real time multi-user environment along with multi-threaded nature creates difficulties in detecting and reproducing issues

**Testing approaches**
Different approaches have been taken but web security still miss a comprehensive solution:
- fault-injection-based security testing
- vulnerability scanning with [[static analysis]]
- mutant injection approaches
- [[fuzzing]] approaches

**Model based testing**
Model based testing applies in graph based techniques, that takes advantage of a model of the events emitted by the GUI ([[ESG (event sequence graph)]], [[EFG (event flow graph)]], [[EIG (event interaction graph)]]) to derive test cases based on covered test statements, paths and branches. A [[FSM (finite-state machine)]] based model can also be used to drive test ases.
- implementation-based models check the correct implementation of the specifications
- threat models are prepared at the architectural level to understand and manage potential security threats

> [!WARNING]
> **Applicability of model based approaces**
> A model-based testing tool can test the system based on available information in corresponding model. It depends on manual expertise to construct the model of overall system, then driving regular expression and choosing input randomly. The manual dependency creates difficulty for automation of this approach.

**User session-based testing**
User session-based testing aims to ensure the correct behavior of the [[SUT (system under test)]] for each URL related to a user session. The main challenges include reducing the number of sessions to test and managing dynamic systems with frequent changes or updates. Common techniques to address these challenges include:
- Lattice construction
- Incremental reduced test suite update
- Batch test suite reduction
- Test case reduction through examining URL traces

While these techniques help optimize testing efforts, they often struggle to detect faults caused by rare data or complex runtime behaviors in modern web applications. Their effectiveness grows with more user sessions, but this also increases testing time and costs.

**Mutation testing**
It has ambition to detect the most common errors that typically exist in web application. ==Some lines of source code are randomly altered in the program, to check whether the test case is able to perceive the change or not==
- e.g. on HTML form, an address may be replaced with an invalid address, or an invalid file may be included at the server side

**Search-based testing**
Search-based testing is a testing approach that is based on search-based software engineering (SBSE). ==Testing problems are treated as optimization problems, where a state space is explored to find optimal solutions.==
- The problem is formulated as an optimization problem
- Solutions are represented as points in the search space, with similar solutions close to each other
- A [[fitness function]] is used to evaluate and compare candidate solutions
- The goal is to find a solution that maximizes the value of the fitness function
- Techniques such as *Hill Climbing* start with a random solution. The solution is evaluated and the "neighbors" (determined by a distance metric) are examined.
- The iterative process proceeds toward better solutions, following the direction that improves the value of the fitness function.

**Scanning and crawling based testing**
Scanners are tools that detect errors which are injected by invalid inputs into the web application. They ==determine the type of errors based on the behavior of application.==
- Crawlers are the tools, which browse the web application and gather information in a predefined and automated manner
- Scanner helps in detecting the bugs
- Scanners can be a black-box or a white-box. The tools based on these approach launch attacks against web application and observes the response

**Randomness based testing**
Providing random input to the application and checking its functional behavior while
handling the invalid input is random testing. It does not follow the usual practice of generating the set of test cases ahead
- not usable when a web application involve logical dependencies or sequences of events

**Usability testing**
[[usability testing]]

**Biometric-based testing**
Advanced identification processes may rely on biometrics, that are user's unique characteristics. ==The user behavior on Internet can be analyzed to create an unique profile of the user, which can be used for identification purposes.==
- [[behavioral biometrics analysis]] is a passive monitoring of user characteristics and it is a relatively new research direction

**Security testing**
Web application security testing ensures that the system would continue working under predictable attacks.
- a modern trend is to breach system security by understanding the logic behind the code rather than by leveraging on an obvious vulnerability

---
## References
[[(Ur Rehman, Nazir, Mustafa, 2017)]]