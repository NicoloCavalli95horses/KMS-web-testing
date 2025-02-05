---
ID: 2024-12-31-12:03
tags:
  - "#definition"
---
## Definition

A stub is a software abstraction that *substitute another module that it is temporary not available*.
- For example, the module could be not implemented yet. 

The stub returns ==default values== or ==simulate a behavior== that is useful for the consumer of the function which is temporarily unavailable.

It is usually used in distributed computing to allow the client application to access a remote service as if it were local. The remote process is "simulated" or faked to simplify the development process.

---
## References
- https://en.wikipedia.org/wiki/Stub_(distributed_computing)