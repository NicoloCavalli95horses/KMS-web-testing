---
ID: 2025-04-30T16:52:54.509Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/3564625.3564654

## BibTeX

@inproceedings{10.1145/3564625.3564654, author = {Cheh, Carmen and Tay, Nicholas and Chen, Binbin}, title = {From Hindsight to Foresight: Enhancing Design Artifacts for Business Logic Flaw Discovery}, year = {2022}, isbn = {9781450397599}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3564625.3564654}, doi = {10.1145/3564625.3564654}, abstract = {Web applications have encroached on our lives, handling important tasks and sensitive information. There are many tools that check application code for implementation-level vulnerabilities but they are often blind to flaws caused by violation of design-level assumptions. Fixing such flaws after code deployment is costly. In this work, we seek to retroactively identify business logic flaws or design-level flaws by generating security tests during the design phase using available software artifacts. Specifically, we take in use case scenarios and automatically generate misuse case scenarios based on user-defined design constraints. By running those misuse case scenarios using already existing testing code written for functional use cases, we can discover potential design flaws during the coding phase. We apply our approach to two widely used open-source applications which have high-quality feature files. Running our generated misuse case scenarios discovers, and hence, potentially prevents seven flaws. Among them, several were only fixed in hindsight after someone stumbled upon a bug, with the remaining being new issues.}, booktitle = {Proceedings of the 38th Annual Computer Security Applications Conference}, pages = {400–411}, numpages = {12}, keywords = {automated testing, business logic, software security}, location = {Austin, TX, USA}, series = {ACSAC '22} }
