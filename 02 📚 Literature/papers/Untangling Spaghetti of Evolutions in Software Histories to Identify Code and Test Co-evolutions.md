
| ID       | 2024-07-28-18:14    |
| -------- | ------------------- |
| **Tags** | #coevolvingSystems  |
## Main concepts

[[co-evolving systems]] identify tightly coupled artifacts that are characterized by high interdependence, such as production code and test code.
This research aims to automatically detect code and test co-evolutions in Java, considering co-evolutions occurring in single or separated commits and including ==atomic evolutions== - such as insertions, deletions, or updates - and ==complex== ones, such as refactorings.
After an empirical study on 45 open-source projects, the study proves the existence of ==immediate== and ==delayed== co-evolutions. It also highlights a new useful description of ==complete== and ==partial== changes over time, in highly coupled systems. 

The automatic detection was addressed as follows:
- first, the evolution history of a given project was locally cloned,
- then evolutions between commits were detected leveraging [[tree difference algorithms ]](Gumtree, RefactoringMinerG).
- next, dependency graphs between evolutions in production and test code were computed in a [[static analysis]]
- a [[dynamic analysis]] was then performed to qualify potential impacts on tests as impacting, repairing, or neutral evolutions
- finally, production code evolutions that impact test code were assembled with the test code evolutions that repair tests.

By creating a comprehensive dataset of detected co-evolutions, the work of the authors offer a knowledge base enabling a future design of a [[recommendation engine]], that could prevent potentially dangerous unsynchronization between co-evolving systems, which leads to a time-consuming and error-prone manual maintenance.

A limit of the study consists of the overall computational time needed to finalize the detection of co-evolutions, making challenging the replication or the improvement of the whole model.

## References
[[ref_untangling_spaghetti_of_evolutions]]