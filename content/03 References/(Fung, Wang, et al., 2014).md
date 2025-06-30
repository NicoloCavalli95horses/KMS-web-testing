---
ID: 2025-06-30T07:13:54.751Z
tags: ref

---
## External Link

https://dl.acm.org/doi/abs/10.1145/2590296.2590324

## BibTeX

@inproceedings{10.1145/2590296.2590324, author = {Fung, Adonis P.H. and Wang, Tielei and Cheung, K. W. and Wong, T. Y.}, title = {Scanning of real-world web applications for parameter tampering vulnerabilities}, year = {2014}, isbn = {9781450328005}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2590296.2590324}, doi = {10.1145/2590296.2590324}, abstract = {Web applications require exchanging parameters between a client and a server to function properly. In real-world systems such as online banking transfer, traversing multiple pages with parameters contributed by both the user and server is a must, and hence the applications have to enforce workflow and parameter dependency controls across multiple requests. An application that applies insufficient server-side input validations is however vulnerable to parameter tampering attacks, which manipulate the exchanged parameters. Existing fuzzing-based scanning approaches however neglected these important controls, and this caused their fuzzing requests to be dropped before they can reach any vulnerable code. In this paper, we propose a novel approach to identify the workflow and parameter dependent constraints, which are then maintained and leveraged for automatic detection of server acceptances during fuzzing. We realized the approach by building a generic blackbox parameter tampering scanner. It successfully uncovered a number of severe vulnerabilities, including one from the largest multi-national banking website, which other scanners miss.}, booktitle = {Proceedings of the 9th ACM Symposium on Information, Computer and Communications Security}, pages = {341–352}, numpages = {12}, keywords = {in-context fuzzing, parameter dependency, parameter tampering, state-aware fuzzing}, location = {Kyoto, Japan}, series = {ASIA CCS '14} }
