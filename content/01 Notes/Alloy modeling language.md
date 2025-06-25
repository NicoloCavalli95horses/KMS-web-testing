---
ID: 2025-06-25-09:05
tags:
  - "#definition"
  - softwareEngineering
  - languageModel
  - softwareModel
---
## Definition

Alloy is a declarative language based on first-order relational logic. All data types are represented as relations, and are defined through signatures, which specify names, fields (attributes), and optionally constraints (called signature facts) on the elements.
- Subsignatures extend other signatures and represent subtypes: they are disjoint sets
- Abstract signatures (marked as abstract) do not have direct instances, but must be specialized by more concrete signatures
- Top-level signatures do not extend other signatures.

### Logical elements of the language

- A fact is a constraint that must always be true in the model
- A function is a named expression that returns a result, given some parameters
- A predicate is a named logical formula with parameters, which can be true or false
- An assertion is a constraint that is assumed to be logically derived from the facts, and is verified by the tool.

### Main operators

- Union (+), difference (−), intersection (&): set operations
- Join (.): combines two relations by concatenating compatible tuples (as in relational databases)
	- Example: join({(a, b), (b, d)}, {(b, c), (a, d), (d, a)}) = {(a, c), (b, a)}
- Transitive closure (^): includes all possible paths (direct or indirect)
- Reflexive-transitive closure (*): also includes the identity relation (element related to itself).

### Alloy Analyzer

- It is the tool that analyzes Alloy models transforming them into satisfiability problems (SAT)
- Use SAT solver to find models that satisfy the constraints or to look for counterexamples to an assertion
- The search is bounded: the user defines a numerical limit (scope) for each type, or the Analyzer sets it automatically
- The limits make the search space finite, making the analysis computationally feasible

### Example

- Each person can have at most two parents
- A person cannot be his or her own parent
- The parent-child relationship is relational (a person can have multiple children, and each child can have two parents)

```alloy
// Define basic type Person
sig Person {
  parents: set Person
}

// Global constraints (facts)
fact BasicFacts {
  // Nobody can be parent of himself
  all p: Person | p not in p.parents

  // Everybody has 2 parents
  all p: Person | #p.parents <= 2
}

// Example
pred example {
  some alice, bob, carol: Person |
    // Alice and Bob are Carol's parents
    carol.parents = alice + bob
}

// Verify
assert NoSelfAncestor {
  all p: Person | p not in ^parents[p]
}

// Check 5 cases
check NoSelfAncestor for 5
```

---
#### References
- [[(Akhawe, Barth, et al., 2010)]]