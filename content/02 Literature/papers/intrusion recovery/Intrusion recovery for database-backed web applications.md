---
ID: 2025-04-09T09:22:05.252Z
tags:
  - paper
  - projectSLR
  - attackRecovery
  - PHP
  - SQLIA
  - XSS
  - clickjacking
Project:
  - SLR
---
Interesting recovery solution that allows an administrator to retroactively fix a vulnerability, eliminating all effects of an attack and preserving legitimate user changes. Can be used against SQL injection, cross-site scripting, and clickjacking attacks. A DOM-level response to user input ensures that legitimate user changes are preserved. Not fully automated and requires large storage capacity.

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
- WARP helps recovering from ==client-side attacks, such as [[XSS (cross site scripting)]], performing DOM-level replay of user input==. This can often preserve legitimate user changes without any user effort. The DOM-level replay is made thanks to a browser extension that records all events that occur
-  *conflicts* (a user edits a page created by the attacker and the page no longer exist after the repair) are presented to the admin and has to be manually solved. The conflicts are queued and presented at the first login

## Evaluation

WARP was tested on MediaWiki, a wiki application that was attacked in 6 different ways. The system was able to recover MediaWiki.

## Limits

- WARP does not automatically fix an application after an attack. An admin has to launch WARP, track down the initial attack action, in order to execute the roll back. The admin needs to provide (i) the filename of the buggy source code file, (ii) a patch to that file which removes the vulnerability, (iii) and a time at which this patch should be applied
- If the application is non-deterministic, there may be many possible repaired states, and WARP only guarantees to provide one of them, which may not necessarily be the one closest to the pre-repair state
- state conflicts must be manually resolved by an admin
- WARP cannot undo disclosure of private data, but can still help track down affected users
- **assumption**: WARP assumes that the adversary does not exploit any vulnerabilities in the HTTP server, database, or the application’s language runtime, does not cause the application code to execute arbitrary code (e.g., spawning a Unix shell), and does not corrupt WARP’s log
- an extra browser extension has to be install to ensure DOM-level security. Sensitive data may be recorder and logged by WARP
- the current prototype assumes that the application code does not change, other than through retroactive patching

---
#### References
- [[(Chandra, Kim, et al., 2011)]]
