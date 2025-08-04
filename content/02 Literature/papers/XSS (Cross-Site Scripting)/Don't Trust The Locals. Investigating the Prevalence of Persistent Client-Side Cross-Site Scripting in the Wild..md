---
ID: 2025-07-28T13:46:53.455Z
tags:
  - paper
  - XSS
  - clientSideAttacks
Rank: A*
---
## Context

This paper discusses persistent client-side [[XSS (cross site scripting)]], assessing its prevalence and evaluating its consequences in large web applications. Taint tracking is used to identify suspicious flows from client storage ([[Web Storage API (localStorage, sessionStorage)]], [[cookie]]) to dangerous [[sink function]]

Two attacker models are presented
- network attacker capable of temporarily hijacking HTTP communication
- web attacker who can leverage flows into storage to persist their payload

The notion of three types of XSS has been upheld for years (reflected, stored, DOM-based), and other types of XSS have been treated as niche problems ([[mXSS (mutation-based XSS)]]). Persistent client-side XSS, which leverage client-storage APIs, has never been acknowledged as important. 

Overall, XSS occurs if some attacker-controlled data flows into a dangerous sink. On the client, sinks are:
- rendering of HTML (`document.write`, `innerHTML`,`append`)
- execution of JavaScript (`setTimeout`, `eval`)
- inclusion of additional scripts (`script.src`)

In regular XSS, when the victim close the browser every threat is immediately eliminated. However, with persistent client-side XSS, the attacker's code is revived on every load of the flawed website, ==even without the original payload ==(e.g., clicking on a dangerous URL)
## Approach


## Evaluation


## Results

- 8% of Alexa top 5000 websites have unfiltered data flows from persistent storage to dangerous [[sink function]]
## Limits



---
#### References
- [[(Steffens, Rossow, et al., 2019)]]
