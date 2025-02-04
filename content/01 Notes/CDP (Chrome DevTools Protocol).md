---
ID: 2025-02-04-09:45
tags:
  - "#definition"
  - webTool
---
## Definition

The Chrome DevTools Protocol allows for tools to instrument, inspect, debug and profile Chromium, Chrome and other Blink-based browsers. Many existing projects currently use the protocol.
- The Chrome DevTools uses this protocol and the team maintains its API.

[[Instrumentation]] is divided into a number of domains (DOM, Debugger, Network etc.). Each domain defines a number of commands it supports and events it generates. Both commands and events are serialized JSON objects of a fixed structure.

---
#### References
- https://chromedevtools.github.io/devtools-protocol/
