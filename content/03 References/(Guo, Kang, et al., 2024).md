---
ID: 2025-12-12T09:47:28.473Z
tags: ref

Project:
 - BAC-SPA
---
## External Link

https://dl.acm.org/doi/10.1145/3658644.3670331

## BibTeX

@inproceedings{10.1145/3658644.3670331, author = {Guo, Zhiyong and Kang, Mingqing and Venkatakrishnan, V.N. and Gjomemo, Rigel and Cao, Yinzhi}, title = {ReactAppScan: Mining React Application Vulnerabilities via Component Graph}, year = {2024}, isbn = {9798400706363}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3658644.3670331}, doi = {10.1145/3658644.3670331}, abstract = {React, a single-page application framework, has recently become popular among web developers due to its flexible and convenient management of web application states via a syntax extension to JavaScript, called JSX (JavaScript and XML). Despite its abundant functionalities, the security of React, especially vulnerability detection, still lags: many existing vulnerability detection works do not support JSX let alone React Data Flow introduced by React components. The only exception is CodeQL, which supports JSX syntax. However, CodeQL cannot properly track React Data Flow across different components for detecting vulnerabilities.In this paper, we design a novel framework, called ReactAppScan, which constructs a Component Graph (CoG) for tracking React Data Flow and detecting vulnerabilities following both JavaScript and React data flows. Specifically, ReactAppScan relies on abstract interpretation to build such a component graph via tracking component lifecycles and then detects vulnerabilities via finding paths between sources and sinks. Our evaluation shows that ReactAppScan detects 61 zero-day vulnerabilities in real-world React applications. We have responsibly reported all the vulnerabilities and so far six vulnerabilities have been fixed and two have been acknowledged.}, booktitle = {Proceedings of the 2024 on ACM SIGSAC Conference on Computer and Communications Security}, pages = {585–599}, numpages = {15}, keywords = {component graph, single-page application, vulnerability detection}, location = {Salt Lake City, UT, USA}, series = {CCS '24} }
