---
ID: 2025-04-23T14:30:11.128Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2133601.2133605

## BibTeX

@inproceedings{10.1145/2133601.2133605, author = {Li, Xiaowei and Yan, Wei and Xue, Yuan}, title = {SENTINEL: securing database from logic flaws in web applications}, year = {2012}, isbn = {9781450310918}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2133601.2133605}, doi = {10.1145/2133601.2133605}, abstract = {Logic flaws within web applications allow the attackers to disclose or tamper sensitive information stored in back-end databases, since the web application usually acts as the single trusted user that interacts with the database. In this paper, we model the web application as an extended finite state machine and present a black-box approach for deriving the application specification and detecting malicious SQL queries that violate the specification. Several challenges arise, such as how to extract persistent state information in the database and infer data constraints. We systematically extract a set of invariants from observed SQL queries and responses, as well as session variables, as the application specification. Any suspicious SQL queries that violate corresponding invariants are identified as potential attacks. We implement a prototype detection system SENTINEL (SEcuriNg daTabase from logIc flaws iN wEb appLication) and evaluate it using a set of real-world web applications. The experiment results demonstrate the effectiveness of our approach and show that acceptable performance overhead is incurred by our implementation.}, booktitle = {Proceedings of the Second ACM Conference on Data and Application Security and Privacy}, pages = {25–36}, numpages = {12}, keywords = {web application security, logic flaw, invariant, extended finite state machine, SQL signature}, location = {San Antonio, Texas, USA}, series = {CODASPY '12} }
