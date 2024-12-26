---
ID: 2024-12-19-16:10
tags:
  - definition
  - programmingLanguage
---
## Definition

Prolog is a programming language released in the '70, based on logical programming.
The main goal of the language is to solve logical problems allowing the users to focus on the "what" instead of the "how". That is, a problem in Prolog is expressed as a sequence of logical expressions, and not as an algorithm. A inference engine is used under the hood to solve logical expressions and derive useful insights.

Prolog is still used today in:
- artificial intelligence ([[machine learning]])
- scientific research

Its syntax is minimal and a background in computer science it is not assumed.

The language itself is based on fundamental concepts such as unification, recursion (see JavaScript recursion in: [[04 Functions]]) and backtracking.

```prolog
% Facts
parent(Manuele, Tommaso).  % Manuele is parent of Tommaso
parent(Tommaso, Leonardo). % Tommaso is parent of Leonardo

% Rules
grandparent(X, Y) :- 
    parent(X, Z), %Z is searched among the facts
    parent(Z, Y).
```

Execution:

```prolog
?- grandparent(Manuele, Leonardo) % true
```
## References
https://it.wikipedia.org/wiki/Prolog