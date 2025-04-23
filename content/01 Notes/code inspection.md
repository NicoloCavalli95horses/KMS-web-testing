---
ID: 2024-12-31-14:21
tags:
  - "#definition"
  - whiteBox
  - testingTechniques
---
## Definition

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

---
## References
- [[03 Program Inspections, walkthroughs and reviews]]