---
ID: 2024-12-19-10:52
tags:
  - definition
  - math
  - samplingTechniques
---
## Definition

Most of the time, ==it is not feasible to test all the combinations of variables of a system, because is too computationally expensive or time consuming.== 

A covering array (CA) is used to extract a sub-section of these combinations, maintaining a high coverage of all the possibilities. 
- This mathematical abstraction can be useful in [[combinatorial testing]], where the combinations to verify are events or interactions with a GUI 
- A CA reduces the number of combinations to be studied

**How to reduce the combinatorial explosion**
In software testing, often the most critical bugs are related to the interaction between a limited set of parameters/events. It is not necessary to deal with all the possible combinations: only a sub-set is enough.

**Practical example**
Let's suppose we are testing an application with 4 parameters (*k = 4*)
- Browser (Chrome, Firefox, Edge)
- OS (Windows, macOS, Linux)
- Network (WiFi, Ethernet)
- User is logged in (true, false)

==The total number of combinations is 36 (3x3x2x2)==, but we can assume that most of the bugs are caused by the interaction between 2 or 3 parameters

With *t = 2*,  it means we are considering 2 parameters at the time. Therefore, the total number of couples is 6:
- (Browser, OS)
- (Browser, Network)
- (Browser, Login)
- (OS, Network)
- (OS, Login)
- (Network, Login)

The total combinations to explore are 37, since:
- (Browser, OS): 3x3 cases = 9
- (Browser, Network): 3x2 = 6
- (Browser, Login): 3x2 = 6
- (OS, Network): 3x2 = 6
- (OS, Login): 3x2 = 6
- (Network, Login): 2x2 = 4

9 rows are enough to cover all the 37 combinations

With 9 tests we can cover all the most important configuration in all the different combinations possible.

---
## References
- https://math.nist.gov/coveringarrays/coveringarray.html