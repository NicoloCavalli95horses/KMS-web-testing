---
ID: 2025-02-10-10:42
tags:
  - paper
  - cyberSecurity
  - clientSideAttacks
  - inputValidation
---
## Context

The growth of the JavaScript ecosystem has created a shift in business logic from the backend to the client side. This created also new attack opportunities:
- [[C2C (client-to-client) communication]] can be exploited to get access to sensitive information
- client-side validation flaws are closely tied to the intended behavior of the system. Therefore, they are hard to identify

Client-side validation attacks are completely invisible to the server.

ZigZag is a system for hardening JavaScript-based web applications against client-side validation attacks.
- ZigZag transparently instruments (see [[instrumentation]]) client-side code to perform dynamic invariant detection over live browser executions. 
- From this, it derives models of the behavior of client-side code that capture how, and with whom, it can interact
- Using these models, ZigZag can then automatically detect deviations from these models that are highly correlated with client-side validation attacks
## Approach

ZigZag sits between web servers and browsers to instrument client-side programs. This is possible thanks to a:
- **learning phase**: ZigZag add to the client-side source code some monitoring functions to collect execution traces. From these traces, [[dynamic invariants]] or models are extracted. Instrumentation is done once and reuses of the same application are faster thanks to caching mechanisms
	- a [[static analysis]] on the [[AST (Abstract Syntax Tree)]] is performed to fetch all the function definitions
	- high priority is given to functions containing `eval`, `XHR requests`or accessing to the `document` object
	- functions are instrumented by observing how they are invoked and what is returned (entry and exit points)
	- ==the training consist of manually browsing the application for 5 minutes, starting from a fresh browser state for 4 times==
	- ZigZag can instrument code dynamically downloaded during execution (e.g., a JS function can potentially modify another function). This is done by wrapping `eval` invocations, script tag insertion and writes to the DOM
- **enforcement phase**: the invariants that were extracted are now hardened. The target web application is hardened, preserving the original functional behavior, but incorporating runtime checks. This means that tampering operations are caught and stopped by ZigZag

Example:
- when used on a website with `postMessage` API, ZigZag learns that the `origin` attribute can be, with a certain probability, a string or a URL, and depending on the different origins encountered during real executions of the application, it can learn a legitimate set of sending/receiving origins
- ==Knowing that some origins are not likely, ZigZag can harden client-side logic to prevent these origins from being used== or it may throw an error


> [!SUMMARY] How ZigZag works
> The client-side JS functions are instrumented with two functions:
> - `calltrace()` examines the function input state
> - `exittrace()` examines the return value
>   
>  Assertions corresponding to learned invariants are then executed, and a course of action is taken depending on the system configuration. 
>  Options include:
>  - terminating execution by navigating away from the current site
>  - reporting to the user that a violation occurred and continuing execution


---
#### References
- [[(Weissbacher, Robertson, et al., 2015)]]
