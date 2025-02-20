---
ID: 2025-02-20-15:25
tags:
  - "#definition"
  - tool
  - geneticAlgorithm
  - python
---
## Definition

DEAP is a novel ==evolutionary computation framework for rapid prototyping and testing of ideas==. It seeks to make algorithms explicit and data structures transparent. It works in perfect harmony with parallelization mechanisms such as multiprocessing and SCOOP.

DEAP includes the following features:
- [[GA (genetic algorithm)]] using any imaginable representation (List, Array, Set, Dictionary, Tree, Numpy Array, etc)
- Genetic programming using [[prefix tree]] (Loosely typed, Strongly typed, automatically defined functions)
- Evolution strategies (including CMA-ES)
- Multi-objective optimisation (NSGA-II, NSGA-III, SPEA2, MO-CMA-ES)
- Co-evolution (cooperative and competitive) of multiple populations (see [[co-evolving systems]])
- Parallelization of the evaluations
- Hall of Fame of the best individuals that lived in the population
- Checkpoints that take snapshots of a system regularly
- Benchmarks module containing most common test functions
- Genealogy of an evolution (that is compatible with NetworkX)
- Examples of alternative algorithms : *Particle Swarm Optimization, Differential Evolution, Estimation of Distribution Algorithm*

---
#### References
- https://github.com/DEAP/deap