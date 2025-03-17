---
ID: 2025-03-17T09:51:53.316Z
tags: paper Black-box,WebSecurity,White-box

Project:
 - SLR
---
## Context

Moder applications implement a multi-tier model involving ==multiple application providers that interface together== in order to supply a service. For example, an e-commerce may leverage on a payment service, and a blog may leverage on a service to handle a comment or forum section.
- when there is a flow that combine multiple services, more subtle vulnerabilities may emerge
- these vulnerabilities are mostly managed manually

## Approach

A [[black-box testing]] approach offers good opportunities to detect flaws in a service workflow, but active (i) fuzzing techniques have a limited coverage, while (ii) passive learning techniques have usually a high false positive rate

[[white-box testing]] techniques instead can leverage the source code but (i) don't take into account service workflows or the user interactions with the [[GUI (graphical user interface)]], (ii) suffer from high false negatives rates

The approach of the authors is in between:
- we first propose a black-box approach that leverages a set of real world user interactions with the service, and further applies [[unsupervised clustering]] in order to infer a behavioral model for the service
- This model is represented through a behavior graph where nodes represent elementary user requests, and edges represent logical transitions between requests occuring within the same session with the service
- Then, our system leverages information about possible security flaws that may have been detected using standard white-box techniques
- These flaws are represented as attack graphs where nodes capture possible vulnerabilities and edges capture attack paths through the target service
- Our system uses the information in the attack graph in order to prune the behavior graph by eliminating from the model possible attacks that may have occurred during the learning phase
- Therefore we proceed with an intermediary step where we automatically convert the attack graph into an intermediate event graph (see [[ESG (event sequence graph)]])
- Finally, we prune the behavior model from possible attacks by applying [[standard graph matching]] and [[subgraph isomorphism]] to both behavior graph and the event graph

---
#### References
- [[(Ben Jaballah, Kheir, et al., 2016)]]
