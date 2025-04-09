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
- as soon as an admin is informed that a vulnerability was recently exploited, WARP can set a database to a previous safe state, retroactively patch security vulnerabilities (this mean that a patch is applied to a previous state of the application, to eliminate all the effects of an attack, whereas all the legitimate editing are kept)
- WARP can repair from [[security misconfiguration]]
- WARP continuously records database updates, logging information, and all the dependencies between input and output
- WARP creates a global dependency graph and uses it to retroactively patch vulnerabilities by rolling back parts of the system to an earlier checkpoint
- WARP rolls back just the affected parts with precision, minimizing the amount of work during repair. Otherwise, recovering from a week-old attack that affected just one user would require re-executing a week's worth of work
- WARP can perform repair concurrently, meaning that the web application can run normally
- WARP helps recovering from ==client-side attacks, such as [[XSS (cross site scripting)]], performing DOM-level replay of user input==. This can often preserve legitimate user changes without any user effort

## Evaluation

WARP was tested on MediaWiki, a wiki application that was attacked in 6 different ways. The system was able to recover MediaWiki.

## Limits

- WARP does not automatically fix an application after an attack. An admin has to launch WARP, track down the initial attack action, in order to execute the roll back
- If the application is non-deterministic, there may be many possible repaired states, and WARP only guarantees to provide one of them, which may not necessarily be the one closest to the pre-repair state
- *conflicts* (a user edits a page created by the attacker and the page no longer exist after the repair) need to be manually fixed by the admin
- WARP cannot undo disclosure of private data, but can still help track down affected users

---
#### References
- [[(Chandra, Kim, et al., 2011)]]
