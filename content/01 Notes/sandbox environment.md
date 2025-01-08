---
ID: 2024-12-10-09:39
tags:
  - definition
  - designPattern
---
## Definition

A sandbox is a testing environment that isolates untested code changes and outright experimentation from the production environment.

Sandboxing ==protects== "live" servers and their data, vetted source code distributions, and other collections of code, data and/or content, proprietary or public, ==from changes that could be damaging to a mission-critical system or which could simply be difficult to revert,== regardless of the intent of the author of those changes. 

Sandboxes replicate at least the minimal functionality needed to accurately test the programs or other code under development (e.g. usage of the same [[ENV (environment variables)]] as, or access to an identical database to that used by, the stable prior implementation intended to be modified)

The concept of sandboxing is built into revision control software such as Git, CVS and Subversion (SVN), in which developers "check out" a copy of the source code tree, or a branch thereof, to examine and work on. 
After the developer has fully tested the code changes in their own sandbox, the changes would be checked back into and merged with the repository and thereby made available to other developers or end users of the software.

By further analogy, the term "sandbox" can also be applied in computing and networking to other temporary or indefinite isolation areas, such as security sandboxes and search engine sandboxes (both of which have highly specific meanings), that prevent incoming data from affecting a "live" system (or aspects thereof) unless/until defined requirements or criteria have been met.

Sandboxing (see also 'soft launching') is often considered a best practice when making any changes to a system, regardless of whether that change is considered 'development', a modification of configuration state, or updating the system.

See also: [[testbed environment]]

## References
https://en.wikipedia.org/wiki/Sandbox_(software_development)