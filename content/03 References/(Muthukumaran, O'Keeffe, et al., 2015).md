---
ID: 2025-07-09T13:16:46.698Z
tags: ref

---
## External Link

https://dl.acm.org/doi/10.1145/2810103.2813639

## BibTeX

@inproceedings{10.1145/2810103.2813639, author = {Muthukumaran, Divya and O'Keeffe, Dan and Priebe, Christian and Eyers, David and Shand, Brian and Pietzuch, Peter}, title = {FlowWatcher: Defending against Data Disclosure Vulnerabilities in Web Applications}, year = {2015}, isbn = {9781450338325}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2810103.2813639}, doi = {10.1145/2810103.2813639}, abstract = {Bugs in the authorisation logic of web applications can expose the data of one user to another. Such data disclosure vulnerabilities are common---they can be caused by a single omitted access control check in the application. We make the observation that, while the implementation of the authorisation logic is complex and therefore error-prone, most web applications only use simple access control models, in which each piece of data is accessible by a user or a group of users. This makes it possible to validate the correct operation of the authorisation logic externally, based on the observed data in HTTP traffic to and from an application.We describe FlowWatcher, an HTTP proxy that mitigates data disclosure vulnerabilities in unmodified web applications. FlowWatcher monitors HTTP traffic and shadows part of an application's access control state based on a rule-based specification of the user-data-access (UDA) policy. The UDA policy states the intended data ownership and how it changes based on observed HTTP requests. FlowWatcher detects violations of the UDA policy by tracking data items that are likely to be unique across HTTP requests and responses of different users. We evaluate a prototype implementation of FlowWatcher as a plug-in for the Nginx reverse proxy and show that, with short UDA policies, it can mitigate CVE bugs in six~popular web applications.}, booktitle = {Proceedings of the 22nd ACM SIGSAC Conference on Computer and Communications Security}, pages = {603–615}, numpages = {13}, keywords = {data disclosure, http proxy, policy, web application security}, location = {Denver, Colorado, USA}, series = {CCS '15} }
