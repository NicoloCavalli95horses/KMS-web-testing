---
ID: 2025-03-24-11:14
tags:
  - "#definition"
  - businessFlowTampering
  - softwareEngineering
  - algorithm
---
## Definition

Identify critical pages in a web application may be critical to prevent [[BFT (business flow tampering)]], especially in the context of **missing sequence check**, when an attacker tries to access page C from page A, skipping page B, because the web application solely relies on [[CSRF (cross-site request forgery) token]] to validate the access and does not enforce the intended sequence

The critical web pages can be identified by modeling the web application as a directed graph (see [[ESG (event sequence graph)]] and [[EFG (event flow graph)]])

![[control_flow_graph.png]]

The critical pages in the workflow graph are identified by obtaining cut-vertices
- A cut-vertex is a vertex in a graph G whose removal either ==increases the number of components of G== or ==disconnects G== or create ==unreachable nodes==
- if more than one node achieves this result, it is possible to rank the nodes *based on the impact of their removal on the graph* and take the most important ones
- a cut-vertex refers to a web page which, when skipped, disconnects/disturbs the workflow of the application *the most*
- a cut-vertex of the workflow graph corresponds to the web page developed with the intention that it should not be skipped while following the workflow

The cut-vertices from the graph are nodes (1) and (2)
Additionally, removal of Vertex (6) makes Vertex (7) unvisited from Vertex (1) during the depth-first search. Thus, the critical pages inferred from the application are (1) , (2) , (6).

![[graphs_after_removal_critical_pages.png]]

---
#### References
- [[(Deepa, Thilagam, et al., 2018)]]