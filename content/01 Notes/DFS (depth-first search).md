---
ID: 2024-12-18-11:52
tags:
  - definition
  - algorithm
---
## Definition

==Depth First Search (DFS)== is a fundamental algorithm used for traversing or searching tree or graph data structures. Starting from an initial node, DFS explores as far as possible along each branch before backtracking, utilizing a stack data structure to manage the traversal process.

### Working Principle

- **Starting Point**: Select a starting node (e.g., node A). This node will be the root of our search.
- **Traversal Method**: from the starting node, move to one of its neighbors. This is done one neighbor at a time. Use a stack to keep track of the nodes. Each visited node is pushed onto the stack, and once all its neighbors have been visited, it is popped from the stack.
- **Recursive Exploration**: each node is explored recursively, visiting all reachable neighbors from that node. Ensure that each node is visited only once to avoid cycles and redundant work.
- **Completion**: The process continues until all nodes have been visited, ensuring the traversal covers the entire graph

The process continues until all nodes have been visited, ensuring the traversal covers the entire graph.

![[dfs_example.webp]]

### Key Considerations

- Each node must be visited exactly once
- Upon completing the traversal, the search should return to the starting node, ensuring all nodes are visited.

### Application

- Path finding and maze solving
- [[dynamic analysis]]
- Topological sorting in dependency resolution
- Detecting cycles in graphs
- Solving puzzles and games that require exhaustive search
## References
https://medium.com/@tahsinsoyakk/depth-first-search-dfs-a-comprehensive-guide-89fa4ac94883