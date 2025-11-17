---
ID: 2025-11-17-10:37
tags:
  - "#definition"
  - petriNet
  - formalMethod
---
## Definition

A Petri Net is a mathematical model designed to describe and analyze distributed, concurrent, and asynchronous systems. It is widely used in theoretical computer science, software engineering, embedded systems, workflow management, and formal analysis.

## What is a Petri Net (PN)?

A Petri Net is a bipartite graph composed of:
- **Places** (circles) → represent conditions or resources
- **Transitions** (rectangles) → represent events or actions
- **Tokens** (dots in places) → represent the state of the system

An **edge** is defined to connect place → transition or transition → place.

A transition can "fire" if all its input places have enough tokens.
When it fires:
- it consumes tokens from the input places, produces tokens in the output places
- In effect, the flow of tokens represents the evolution of the system. It's a concurrent model: multiple enabled transitions can fire in parallel.

## What is a Colored Petri Net (CPN)?

A Colored Petri Net extends the simple Petri Net by introducing:
- Tokens with a value (color) → no longer indistinguishable
- Example: a token can be (userId=42, role="admin")
- Expressions on edges and transitions → data can be filtered, transformed, or manipulated
- Types (color sets) → tokens belong to typed sets (int, string, record, etc.).

This makes it much more compact: a single colored network can represent what, with standard PNs, would require dozens of duplicate places/transitions.
## What are Petri Nets used for (in practice)?

- Modeling concurrent processes, pipelines, synchronizations
- Analyze deadlocks, race conditions, reachability, behavioral morphologies
- Describe communication protocols, workflows, and production networks
- Model more complex real-world systems where data matters
- Analyze protocols, distributed systems, transactions, routing networks, and business workflows
- Perform simulations and formal verification (state space analysis) without combinatorial explosions due to token duplication.
## Why they're useful

- Visual clarity: The model allows you to reason about concurrency much more clearly than code
- Formality: You can apply mathematical algorithms to prove properties (deadlock-free, boundedness, etc.)
- Simulability: Many tools (e.g., CPN Tools) allow step-by-step simulations
- Scales well: Colored Petri Nets greatly reduce the size of the model without losing precision.

---
#### References
- [[(Santos Filho, Rodriguez, et al., 2025)]]