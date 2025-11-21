---
ID: 2025-11-21T07:15:11.724Z
tags: ref

---
## External Link

https://dl.acm.org/doi/10.1145/3672608.3707856

## BibTeX

@inbook{10.1145/3672608.3707856, author = {Lim, Chaejin and Jin, Beomjin and Kim, Hyoungshick}, title = {Stealth Extension Exfiltration (SEE) Attacks. Stealing User Data without Permissions via Browser Extensions}, year = {2025}, isbn = {9798400706295}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3672608.3707856}, abstract = {Web browser extensions have become essential tools in modern browsing, offering enhanced functionality and customization. However, these extensions also introduce a new attack surface, expanding the scope for security vulnerabilities in web browsers. This paper presents Stealth Extension Exfiltration (SEE) attacks, a novel threat that exploits the mismanagement of browser extension permissions. SEE attacks enable malicious extensions to bypass security measures and perform unauthorized actions, such as sending arbitrary HTTP requests, misusing the fetch API to access local files, and exfiltrating sensitive user data without explicit user permissions. Our large-scale analysis of 57,831 real-world browser extensions reveals vulnerabilities that could potentially affect up to 351 million users. We provide concrete examples of these attacks, demonstrating how they can stealthily evade detection while compromising user privacy and security. We reported these risks to the Google security team, who acknowledged the threat posed by SEE attacks. To address these vulnerabilities, we propose mitigation strategies that include enforcing a stricter separation between host permissions and content scripts, as well as implementing more granular access control for sensitive APIs.}, booktitle = {Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing}, pages = {1820–1828}, numpages = {9} }
