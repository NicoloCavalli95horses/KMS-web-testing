---
ID: 2024-12-27-14:05
tags:
  - softwareEngineering
  - testingTechniques
---
# Primary human-testing methods

==**Code inspections** and **walkthroughs**== involve a team of people reading or visually inspecting a program.
- the goal is to find errors, but not solutions
- a group of developer (3-4) performs a review, only 1 participant is the author
- 30-70% of the logic-design and coding errors are found through code inspections and walkthroughs
- certain types of errors are easily found with these methods (e.g. uninitialized variables), while others are harder to see at a glance (e.g., divide by zero errors)

**Code inspections**

|          | Value                                                               |
| -------- | ------------------------------------------------------------------- |
| Duration | 90-120 min                                                          |
| People   | 3-4 people                                                          |
| Pace     | 100-150 statements per hour                                         |

A 4-people team is constituted as follows:
- **author** of the code
- **moderator**: cannot be the author. He registers and records the inspection session, leads the session, records all errors found and ensure that errors are subsequently corrected
- **program designer** (software architect)
- **test specialist**: has knowledge of the most common programming errors

Process:
1. The author narrates statement by statement the logic of the program. During the discourse, other participants may raise questions. The author usually is the one who find the most issue simply by reading aloud his program.
2. The program is analyzed with respect to checklists of historically common programming errors (p.35-36)

The moderator ==assures that the focus is on finding errors and not correcting them.==

> [!NOTE]
> The purpose of the activity is *not to attack the author or to highlight his inefficiency or incompetence*. Hence, the results of the code inspections are often **confidential**

Managers should not use the results against the author, otherwise the author himself will adopt a defensive attitude which can complicate the process of finding bugs and issues, that was the goal of the code inspection in the first place


**Walkthroughs**

|          | Value                       |
| -------- | --------------------------- |
| Duration | 90-120 min                  |
| People   | 3-5 people                  |
| Pace     | 100-150 statements per hour |
Similarly to the code inspections, a team is constituted. The author of the code, a moderator and a skilled tester should be present. Other people that may be involved: a programming-language expert, a new programmer (to give a fresh, unbiased outlook), someone from a different project, someone from the same programming team as the programmer.

The main difference from code inspection is that the participants **play computer**
- a set of test cases is mentally executed. The test data are walked through the logic of the program
- the expected state is monitored on paper or whiteboard
- this inputs serve as a vehicle for getting started and for questioning the author's choices

**Desk checking**
A desk check can be viewed as a one-person inspection or walkthrough: a person reads a program, checks it with respect to an error list, and/or walks test data through it. It is relatively unproductive since it is undisciplined process

**Peer ratings**
Peer rating is a technique of evaluating anonymous programs in terms of their overall quality, maintainability, extensibility, usability, and clarity. The purpose of the technique is to provide programmer self-evaluation.
- the rating consists in answering high-level questions on a scale from 1 to 10
