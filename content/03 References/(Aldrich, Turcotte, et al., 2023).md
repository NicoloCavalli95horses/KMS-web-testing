---
ID: 2025-06-13T09:42:13.835Z
tags: ref

---
## External Link

https://dl.acm.org/doi/10.1145/3551349.3559522

## BibTeX

@inproceedings{10.1145/3551349.3559522, author = {Aldrich, Mark W. and Turcotte, Alexi and Blanco, Matthew and Tip, Frank}, title = {Augur. Dynamic Taint Analysis for Asynchronous JavaScript}, year = {2023}, isbn = {9781450394758}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3551349.3559522}, doi = {10.1145/3551349.3559522}, abstract = {Dynamic taint analysis (DTA) is a popular approach to help protect JavaScript applications against injection vulnerabilities. In 2016, the ECMAScript 7 JavaScript language standard introduced many language features that most existing DTA tools for JavaScript do not support, e.g., the async/await keywords for asynchronous programming. We present Augur, a high-performance dynamic taint analysis for ES7 JavaScript that leverages VM-supported instrumentation. Integrating directly with a public, stable instrumentation API gives Augur the ability to run with high performance inside the VM and remain resilient to language revisions. We extend the abstract-machine approach to DTA to handle asynchronous function calls. In addition to providing the classic DTA use case of injection vulnerability detection, Augur is highly configurable to support any type of taint analysis, making it useful outside of the security domain. We evaluated Augur on a set of 20 benchmarks, and observed a median runtime overhead of only 1.77 \texttimes{}, a median performance improvement of 298\% compared to the previous state-of-the-art.}, booktitle = {Proceedings of the 37th IEEE/ACM International Conference on Automated Software Engineering}, articleno = {153}, numpages = {4}, keywords = {JavaScript, dynamic program analysis, information flow analysis, security vulnerabilities, taint analysis}, location = {Rochester, MI, USA}, series = {ASE '22} }
