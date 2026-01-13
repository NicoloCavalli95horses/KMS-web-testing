---
ID: 2026-01-13T07:56:32.657Z
tags: ref

---
## External Link

https://dl.acm.org/doi/10.1145/3658644.3690227

## BibTeX

@inproceedings{10.1145/3658644.3690227, author = {Huang, Yongheng and Shi, Chenghang and Lu, Jie and Li, Haofeng and Meng, Haining and Li, Lian}, title = {Detecting Broken Object-Level Authorization Vulnerabilities in Database-Backed Applications}, year = {2024}, isbn = {9798400706363}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3658644.3690227}, doi = {10.1145/3658644.3690227}, abstract = {Broken object-level authorization (BOLA) vulnerabilities are among the most critical security risks facing database-backed applications. However, there is still a significant gap in our systematic understanding of these vulnerabilities. To bridge this gap, we conducted an in-depth study of 101 real-world BOLA vulnerabilities from opensource applications. Our study revealed the four most common object-level authorization models in database-backed application.The insights gained from our study inspired the development of a new tool called BolaRay. This tool employs a combination of SQL and static analysis to automatically infer the distinct types of object-level authorization models, and subsequently verify whether existing implementations enforce appropriate checks for these models. We evaluated BolaRay using 25 popular database-backed applications, which led to the identification of 193 true vulnerabilities, including 178 vulnerabilities that have never been reported before, at a false positive rate of 21.86\%. We reported all newly identified vulnerabilities to the corresponding maintainers. To date, 155 vulnerabilities have been confirmed, with 52 CVE IDs granted.}, booktitle = {Proceedings of the 2024 on ACM SIGSAC Conference on Computer and Communications Security}, pages = {2934–2948}, numpages = {15}, keywords = {broken object-level authorization, database-backed applications}, location = {Salt Lake City, UT, USA}, series = {CCS '24} }
