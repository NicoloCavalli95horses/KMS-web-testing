---
ID: "2025-08-18-09:23"
tags:
  - ref
---
## External Link

https://dl.acm.org/doi/10.1145/3597503.3639090

## BibTeX

@inproceedings{10.1145/3597503.3639090,
author = {Hou, Yiwei and Guo, Lihua and Zhou, Chijin and Xu, Yiwen and Yin, Zijing and Li, Shanshan and Sun, Chengnian and Jiang, Yu},
title = {An Empirical Study of Data Disruption by Ransomware Attacks},
year = {2024},
isbn = {9798400702174},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3597503.3639090},
doi = {10.1145/3597503.3639090},
abstract = {The threat of ransomware to the software ecosystem has become increasingly alarming in recent years, raising a demand for large-scale and comprehensive ransomware analysis to help develop more effective countermeasures against unknown attacks. In this paper, we first collect a real-world dataset MarauderMap, consisting of 7,796 active ransomware samples, and analyze their behaviors of disrupting data in victim systems. All samples are executed in isolated testbeds to collect all perspectives of six categories of runtime behaviors, such as API calls, I/O accesses, and network traffic. The total logs volume is up to 1.98 TiB. By assessing collected behaviors, we present six critical findings throughout ransomware attacks' data reconnaissance, data tampering, and data exfiltration phases. Based on our findings, we propose three corresponding mitigation strategies to detect ransomware during each phase. Experimental results show that they can enhance the capability of state-of-the-art anti-ransomware tools. We report a preliminary result of a 41\%-69\% increase in detection rate with no additional false positives, showing that our insights are helpful.},
booktitle = {Proceedings of the IEEE/ACM 46th International Conference on Software Engineering},
articleno = {161},
numpages = {12},
keywords = {ransomware, data disruption, runtime behaviors, mitigation strategies, empirical study},
location = {Lisbon, Portugal},
series = {ICSE '24}
}