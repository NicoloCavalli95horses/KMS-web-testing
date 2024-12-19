| ID       | 2024-12-19-10:52  |
| -------- | ----------------- |
| **Tags** | #definition #math |
## Definition

Most of the time, ==it is not feasible to test all the combinations of variables of a system, because is too computationally expensive or time consuming.== A covering array (CA) is used to extract a sub-section of these combinations, maintaining a high coverage of all the possibilities. 
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
- with *t = 2*,  it means we are considering 2 parameters at the time, and then we create the combination:
	- (Chrome + Windows) and (WiFi + logged)
	- (macOS + Edge) and (WiFi + not logged)
	- ...
- the total number of couples is 6 (Browser, OS), (Browser, Network), (Browser, Login), (OS, Network), (OS, Login), (Network, Login)





A covering array is a matrix with particular properties:
- it has *N* rows and *k* columns
- each cell contains a symbol *v ₁*  that has been chosen among *v* possible symbols

If you take an arbitrary amount of columns from *k*, let's call them *t*, you get a sub-matrix of size (*N * t*). This sub-matrix includes all the possible combinations of symbols

## References
