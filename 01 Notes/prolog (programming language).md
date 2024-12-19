| ID       | 2024-12-19-16:10 |
| -------- | ---------------- |
| **Tags** | #definition      |
## Definition

Prolog is a programming language released in the '70, based on logical programming.
The main goal of the language is to solve logical problems allowing the users to focus on the "what" instead of the "how". That is, a problem in Prolog is expressed as a sequence of logical expressions, and not as an algorithm. A inference engine is used under the hood to solve logical expressions and derive useful insights.

Prolog is still used today in:
- artificial intelligence ([[machine learning]])
- scientific research

Its syntax is minimal and a background in computer science it is not assumed.

The language itself is based on fundamental concepts such as unification, recursion and backtracking.

```prolog
% Facts
parent(bob, alice).     % Bob is parent of Alice
parent(alice, charlie). % Alice is parent of Charlie

% Rules
grandparent(X, Y) :- 
    parent(X, Z), 
    parent(Z, Y).
```

Execution:

```prolog
?- grandparent(bob, charlie) % true
```
## References
https://it.wikipedia.org/wiki/Prolog