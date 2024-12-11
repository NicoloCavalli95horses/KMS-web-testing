| ID       | 2024-12-11-15:05 |
| -------- | ---------------- |
| **Tags** | #definition      |
## Definition

A prefix tree, also known as **trie** or **digital tree**, is a data structure that allows to efficiently store sequences with common prefixes. The common prefixes are stored only once, and the different parts of the sequences are appended as children of the common prefixes.

First proposed in 1959 by Renè de la Briandais, prefix trees are data structures originally intended to store and retrieve words by character prefixes in a computationally efficient way both regarding space and time.

### Prefix tree structure

- the root node is an empty node
- each intermediate node represents a common prefix
- each leaf (or terminal node) represents a complete string

**Example**
A → B → C
A → B → D
A → E → F

Can be represented as:

![[prefix_tree.png]]

## References
[[ref_stile_tool_for_e2e_parallelization]]