---
ID: "2025-02-18-11:21"
tags:
  - ref
---
## External Link

https://dl.acm.org/doi/10.1145/3460120.3485357

## BibTeX

@inproceedings{10.1145/3460120.3485357,
author = {Bandara, Vinuri and Rathnayake, Thisura and Weerasekara, Nipuna and Elvitigala, Charitha and Thilakarathna, Kenneth and Wijesekera, Primal and De Zoysa, Kasun and Keppitiyagama, Chamath},
title = {Demo: Large Scale Analysis on Vulnerability Remediation in Open-source JavaScript Projects},
year = {2021},
isbn = {9781450384544},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3460120.3485357},
doi = {10.1145/3460120.3485357},
abstract = {Given the widespread prevalence of vulnerabilities, remediation is a critical phase that every software project has to go through. When comparing the studies on understanding the security vulnerabilities in software, such as vulnerability discovery and patterns, there is a lack of studies on the vulnerability remediation phase. To address this, we have done a timeline analysis for 130 of the most dependent upon open source projects written in JavaScript language, hosted on GitHub to understand the nature and the lifetime of the vulnerabilities in those projects. We used a static code analyzer on 501K commits from the repositories to identify commits that introduced new vulnerabilities to the code and fixed existing vulnerabilities in the code. In 90\% of the projects, we identified that a commit that fixed an existing vulnerability had introduced one or more new vulnerabilities into the code. On average, 16\% of the commits intended to fix vulnerabilities have introduced one or more new vulnerabilities from the analyzed projects. We also found that 18\% of the total vulnerabilities found in those projects have originated from a commit meant to fix an existing vulnerability, and 78\% of those vulnerabilities could have been avoided of introduction if the developers were to use proper internal testing. Here, we demonstrate Sequza, a visualization tool to help organizations detect such instances at the earliest possible.},
booktitle = {Proceedings of the 2021 ACM SIGSAC Conference on Computer and Communications Security},
pages = {2447–2449},
numpages = {3},
keywords = {[[security testing]], software security, vulnerability analysis, vulnerability remediation},
location = {Virtual Event, Republic of Korea},
series = {CCS '21}
}