---
ID: 2024-12-11-14:12
tags:
  - definition
---
## Definition

A [[EDG (Event Dependency Graph)]] can be maintained manually, or by leveraging dependency detection tools.

These tools can be classified as:
- **tools looking for manifest dependencies**: they ==execute tests many times in different order to find dependencies==. The output is accurate but it is time and resource consuming
- **tools looking for data dependencies**: data dependencies are found between tests by ==analyzing accesses made to shared resources==

Tools for DDT:
- **TEDD**

## References
[[ref_stile_tool_for_e2e_parallelization]]