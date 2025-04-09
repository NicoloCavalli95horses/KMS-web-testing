---
ID: 2025-04-09T09:22:05.252Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2043556.2043567

## BibTeX

@inproceedings{10.1145/2043556.2043567, author = {Chandra, Ramesh and Kim, Taesoo and Shah, Meelap and Narula, Neha and Zeldovich, Nickolai}, title = {Intrusion recovery for database-backed web applications}, year = {2011}, isbn = {9781450309776}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2043556.2043567}, doi = {10.1145/2043556.2043567}, abstract = {Warp is a system that helps users and administrators of web applications recover from intrusions such as SQL injection, cross-site scripting, and clickjacking attacks, while preserving legitimate user changes. Warp repairs from an intrusion by rolling back parts of the database to a version before the attack, and replaying subsequent legitimate actions. Warp allows administrators to retroactively patch security vulnerabilities---i.e., apply new security patches to past executions---to recover from intrusions without requiring the administrator to track down or even detect attacks. Warp's time-travel database allows fine-grained rollback of database rows, and enables repair to proceed concurrently with normal operation of a web application. Finally, Warp captures and replays user input at the level of a browser's DOM, to recover from attacks that involve a user's browser. For a web server running MediaWiki, Warp requires no application source code changes to recover from a range of common web application vulnerabilities with minimal user input at a cost of 24--27\% in throughput and 2--3.2 GB/day in storage.}, booktitle = {Proceedings of the Twenty-Third ACM Symposium on Operating Systems Principles}, pages = {101–114}, numpages = {14}, location = {Cascais, Portugal}, series = {SOSP '11} }
