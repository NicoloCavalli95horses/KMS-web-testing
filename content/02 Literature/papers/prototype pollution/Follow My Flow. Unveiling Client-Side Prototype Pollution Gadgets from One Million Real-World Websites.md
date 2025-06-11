---
ID: 2025-06-11T07:30:52.499Z
tags:
  - paper
  - prototypePollution
  - clientSideAttacks
Rank: A*
---
## Context

[[prototype pollution]] is a relatively new type of vulnerability, which allows an adversary to manipulate a prototypical object property of a victim JavaScript program.
- prototype pollution is exploited through [[prototype pollution gadgets]], which are JS code snipped starting with an originally undefined property and ending with a [[sink function]]

## Approach

In this paper, we design a dynamic analysis framework named GALA (Gadget Locator and Analyzer), to detect client-side gadgets among one-million real-world websites
- GALA ==crafts complex values for undefined properties== of victim websites ==using defined values in similar websites==

GALA has three phases:
(i) locating undefined properties
(ii) assigning defined values for previously undefined properties
(iii) guiding undefined properties using defined values

## Evaluation

We implemented an open-source prototype of GALA and ran it on one million websites from the Tranco list. 

## Results

- 133 zero-day gadgets were found
- GALA detects all the gadgets found by similar dynamic analyzers, such as ProbetheProto and Silent Spring

## Limits


---
#### References
- [[(Kang, Lyu, et al., 2024)]]
