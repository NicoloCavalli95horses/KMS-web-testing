---
ID: 2026-01-20-10:55
tags:
  - paper
  - staticAnalysis
  - codeQL
  - JavaScript
---
## What is CodeQL

- An expressive query language and engine for code analysis. Treats code as data and lets you describe and find patterns in the code. It has a CLI and can be integrated with IDEs such as Visual Studio Code
- **Purposes**: find bugs and security vulnerabilities, make precise analysis, share security knowledge within your team using codified, readable and executable queries

 **Why a new query language?** 
 - it is logical way to declare rules
 - it is declarative, there are no side effects
 - it is object-oriented
 - it is read-only (we cannot modify the existing source code with CodeQL queries)
 - it is equipped with rich standard libraries for analyzing source code (eg., language-specific libraries such as React for JavaScript's codebases)

### A query example

```js
import java // import libraries to reuse logic

from IfStmt ifStmt, BLock block // variables
// if statements, and code "block" (code in {}, after an if)

// Query clause: describes what we are trying to find
where
  // the block code is after the "then" block
  block = ifStmt.getThen() and // getThen() returns the then block
  block.getNumStmt() = 0 // the block is empty
select ifStmt, "This if-statement has an empty then-block"
```
## Building block of a query

**Predicate**
Encapsulate portions of logic in a program, so we can reuse them. It simplifies the final query

The following scripts are equivalent:

```js
from IfStmt ifStmt, Block block
where block = ifStmt.getThen() and
block.getNumstmt() = 0
select ifStmt
```

```js
predicate isEmpty(Block block) {
  block.getNumStmt() = 0
}

from IfStmt, ifStmt
where isEmpty(ifStmt.getThen())
select ifStmt
```

**Classes**
Classes describe a set of values. It can gather together multiple predicates. For example, instead of having `predicate isEmpty()` in isolation, we can define the following class:

```js
class EmptyBlock extends Block {
  EmpyBlock() {
    this.getNumStmt() = 0 //this pick the current value of the instantiated class
  }
}
from IfStmt ifStmt
where ifStmt.getThen() instanceof EmptyBlock
select ifStmt
```



---
#### References
- https://www.youtube.com/watch?v=pYzfGaLTqC0