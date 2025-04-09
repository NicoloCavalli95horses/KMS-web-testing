---
ID: 2025-04-09T09:22:05.252Z
tags:
  - paper
  - projectSLR
  - attackRecovery
Project:
  - SLR
---
WARP (Web Application RePair) is a system that helps users and administrators of web applications recover from intrusions such as SQL injection, cross-site scripting, and clickjacking attacks, while preserving legitimate user changes.

## Context

Recovering from a web attack is a difficult and manual process. Developers or administrators must manually inspect the application and they must repair the damage by hand.
- since it is a manual process, ==it is time-consuming and error-prone, meaning that the recover may not be complete==

## Approach

WARP is the first system to help repairing from attacks in web applications:
- as soon as an admin is informed that a vulnerability was recently exploited, WARP can set a database to a previous safe state, retroactively patch security vulnerabilities
- WARP can repair from [[security misconfiguration]]
- WARP continuously records database updates, logging information, and all the dependencies between input and output
- WARP creates a global dependency graph and uses it to retroactively patch vulnerabilities by rolling back parts of the system to an earlier checkpoint
- WARP rolls back just the affected parts with precision, minimizing the amount of work during repair. Otherwise, recovering from a week-old attack that affected just one user would require re-executing a week's worth of work
- WARP can perform repair concurrently, meaning that the web application can run normally
- WARP helps recovering from ==client-side attacks, such as [[XSS (cross site scripting)]], performing DOM-level replay of user input==. This can often preserve legitimate user changes without any user effort

## Evaluation

WARP was evaluated on MediaWiki, a wiki application that was 
## Results

Describe the results in simple terms

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Chandra, Kim, et al., 2011)]]
