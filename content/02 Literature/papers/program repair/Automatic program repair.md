---
ID: 2024-07-26-17:10
tags:
  - paper
  - programRepair
  - automaticTesting
---
## Main concepts

- emerging suite of technologies for automatically fixing [[error]] or vulnerabilities
- software that produces source code-level patches for bug fixing without negatively influencing other correct functionalities
- bugs or errors are identified by failing tests or program crashes, then a patch changes the program correctly

### Methods

- [[machine learning]]
- program synthesis
- evolutionary computation ([[GA (genetic algorithm)]])
- “quick fix” suggestions to address linter checks at commit time

### Approaches

- **Code substitution or integration with predefined set of templates**: target particular bug classes making use of a small set of candidate templates
- **Code synthesis:** using semantic analysis to construct patches. The problem of bug repair is converted to constraint solving and program synthesis
- **Machine learning techniques** that prioritize candidate patches


> [!WARNING] 
Regardless of how the patches are constructed all the techniques are subject to the [[overfitting]] problem. Patches could be able to address only the symptom represented by a failing test, rather than the true underlying cause of the problem 
### Limitations

Assuring patch quality is an unsolved problem. Challenges in applying these techniques to large systems: most repair approaches require expensive and complex recompile-test-and-check loops.

---
## References
[[(Goues, Claire, Pradel et al., 2021)]]