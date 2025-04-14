---
ID: 2024-12-09-15:45
tags:
  - ref
---
## BibTeX

@INPROCEEDINGS{9519496,
  author={Bai, Zhihao and Wang, Ke and Zhu, Hang and Cao, Yinzhi and Jin, Xin},
  booktitle={2021 IEEE Symposium on Security and [[privacy]] (SP)}, 
  title={Runtime Recovery of Web Applications under Zero-Day ReDoS Attacks}, 
  year={2021},
  volume={},
  number={},
  pages={1575-1588},
  abstract={Regular expression denial of service (ReDoS)— which exploits the super-linear running time of matching regular expressions against carefully crafted inputs—is an emerging class of DoS attacks to web services. One challenging question for a victim web service under ReDoS attacks is how to quickly recover its normal operation after ReDoS attacks, especially these zero-day ones exploiting previously unknown vulnerabilities.In this paper, we present RegexNet, the first payload-based, automated, reactive ReDoS recovery system for web services. RegexNet adopts a learning model, which is updated constantly in a feedback loop during runtime, to classify payloads of upcoming requests including the request contents and database query responses. If detected as a cause leading to ReDoS, RegexNet migrates those requests to a sandbox and isolates their execution for a fast, first-measure recovery.We have implemented a RegexNet prototype and integrated it with HAProxy and Node.js. Evaluation results show that RegexNet is effective in recovering the performance of web services against zero-day ReDoS attacks, responsive on reacting to attacks in sub-minute, and resilient to different ReDoS attack types including adaptive ones that are designed to evade RegexNet on purpose.},
  keywords={Feedback loop;[[privacy]];Runtime;Databases;Prototypes;Web servers;Data models;Regular expression Denial of Service (ReDoS);Deep Neural Networks;Adversarial [[machine learning]];Online Feedback Loop},
  doi={10.1109/SP40001.2021.00077},
  ISSN={2375-1207},
  month={May},}

