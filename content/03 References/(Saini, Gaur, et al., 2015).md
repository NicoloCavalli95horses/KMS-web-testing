---
ID: 2025-04-03T07:17:25.148Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2799979.2800000

## BibTeX

@inproceedings{10.1145/2799979.2800000, author = {Saini, Anil and Gaur, Manoj Singh and Laxmi, Vijay and Nanda, Priyadarsi}, title = {sandFOX: secure sandboxed and isolated environment for firefox browser}, year = {2015}, isbn = {9781450334532}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2799979.2800000}, doi = {10.1145/2799979.2800000}, abstract = {Browser functionalities can be widely extended by browser extensions. One of the key features that makes browser extensions so powerful is that they run with "high" privileges. As a consequence, a vulnerable or malicious extension might expose browser, and operating system (OS) resources to possible attacks such as privilege escalation, information stealing, and [[session hijacking]]. The resources are referred as browser as well as OS components accessed through browser extension such as accessing information on the web application, executing arbitrary processes, and even access files from a host file system.This paper presents sandFOX (secure sandbox and iso- lated environment), a client-side browser policies for constructing [[sandbox environment]]. sandFOX allows the browser extension to express fine-grained OS specific security policies that are enforced at runtime. In particular, our proposed policies provide the protection to OS resources (e.g., host file system, network and processes) from the browser attacks. We use Security-Enhanced Linux (SELinux) to tune OS and build a sandbox that helps in reducing potential damage from attacks on the OS resources. To show the practicality of sandFOX in a range of settings, we compute the effectiveness of sandFOX for various browser attacks on OS resources. We also show that sandFOX enabled browser experiences low overhead on loading pages and utilizes negligible memory when running with [[sandbox environment]].}, booktitle = {Proceedings of the 8th International Conference on Security of Information and Networks}, pages = {20–27}, numpages = {8}, keywords = {browser attacks, browser policies, browser security, extension-based attacks}, location = {Sochi, Russia}, series = {SIN '15} }
