---
ID: 2025-03-17T09:51:53.316Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2995959.2995966

## BibTeX

@inproceedings{10.1145/2995959.2995966, author = {Ben Jaballah, Wafa and Kheir, Nizar}, title = {[[A Grey-Box Approach for Detecting Malicious User Interactions in Web Applications]]}, year = {2016}, isbn = {9781450345712}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2995959.2995966}, doi = {10.1145/2995959.2995966}, abstract = {Web applications are the core enabler for most Internet services today. Their standard interfaces allow them to be composed together in different ways in order to support different service workflows. While the modular composition of applications has considerably simplified the provisioning of new Internet services, it has also added new security challenges; the impact of a security breach propagating through the chain far beyond the vulnerable application. To secure web applications, two distinct approaches have been commonly used in the literature. First, white-box approaches leverage the source code in order to detect and fix unintended flaws. Although they cover well the intrinsic flaws within each application, they can barely leverage logic flaws that arise when connecting multiple applications within the same service. On the other hand, black-box approaches analyze the workflow of a service through a set of user interactions, while assuming only little information about its embedded applications. These approaches may have a better coverage, but suffer from a high false positives rate. So far, to the best of our knowledge, there is not yet a single solution that combines both approaches into a common framework.In this paper, we present a new grey-box approach that leverages the advantages of both white-box and black-box. The core component of our system is a semi-[[supervised learning]] framework that first learns the nominal behavior of the service using a set of elementary user interactions, and then prune this nominal behavior from attacks that may have occurred during the learning phase. To do so, we leverage a graph-based representation of known attack scenarios that is built using a white-box approach. We demonstrate in this paper the use of our system through a practical use case, including real world attack scenarios that we were able to detect and qualify using our approach.}, booktitle = {Proceedings of the 8th ACM CCS International Workshop on Managing Insider Security Threats}, pages = {1–12}, numpages = {12}, keywords = {black-box, [[web security]], white-box}, location = {Vienna, Austria}, series = {MIST '16} }
