---
ID: 2025-03-18T16:16:52.016Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2808425.2808432

## BibTeX

@inproceedings{10.1145/2808425.2808432, author = {Felsch, Dennis and Heiderich, Mario and Schulz, Frederic and Schwenk, J\"{o}rg}, title = {How Private is Your Private Cloud? Security Analysis of Cloud Control Interfaces}, year = {2015}, isbn = {9781450338257}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2808425.2808432}, doi = {10.1145/2808425.2808432}, abstract = {The security gateway between an attacker and a user's private data is the Cloud Control Interface (CCI): If an attacker manages to get access to this interface, he controls the data. Several high-level data breaches originate here, the latest being the business failure of the British company Code Spaces. In such situations, using a private cloud is often claimed to be more secure than using a public cloud. In this paper, we show that this security assumption may not be justified: We attack private clouds through their rich, HTML5-based control interfaces, using well-known attacks on web interfaces (XSS, CSRF, and Clickjacking) combined with novel exploitation techniques for Infrastructure as a Service clouds.We analyzed four open-source projects for private IaaS cloud deployment (Eucalyptus, OpenNebula, OpenStack, and openQRM) in default configuration. We were able to compromise the security of three cloud installations (Eucalyptus, OpenNebula, and openQRM) One of our attacks (OpenNebula) allowed us to gain root access to VMs even if full perimeter security is enabled, i.e. if the cloud control interface is only reachable from a certain segment of the company's network, and if all network traffic is filtered through a firewall.We informed all projects about the attack vectors and proposed mitigations. As a general recommendation, we propose to make web management interfaces for private clouds inaccessible from the Internet, and to include this technical requirement in the definition of a private cloud.}, booktitle = {Proceedings of the 2015 ACM Workshop on Cloud Computing Security Workshop}, pages = {5–16}, numpages = {12}, keywords = {CSRF, XSS, cloud interface, cloud security, infrastructure as a service}, location = {Denver, Colorado, USA}, series = {CCSW '15} }
