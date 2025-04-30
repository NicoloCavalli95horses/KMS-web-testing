---
ID: 2025-04-30T16:52:29.755Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2076732.2076767

## BibTeX

@inproceedings{10.1145/2076732.2076767, author = {Li, Xiaowei and Xue, Yuan}, title = {BLOCK: a black-box approach for detection of state violation attacks towards web applications}, year = {2011}, isbn = {9781450306720}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2076732.2076767}, doi = {10.1145/2076732.2076767}, abstract = {State violation attacks towards web applications exploit logic flaws and allow restrictive functions and sensitive information to be accessed at inappropriate states. Since application logic flaws are specific to the intended functionality of a particular web application, it is difficult to develop a general approach that addresses state violation attacks. To date, existing approaches all require web application source code for analysis or instrumentation in order to detect state violations.In this paper, we present BLOCK, a BLack-bOx approach for detecting state violation attaCKs. We regard the web application as a stateless system and infer the intended web application behavior model by observing the interactions between the clients and the web application. We extract a set of invariants from the web request/response sequences and their associated session variable values during its attack-free execution. The set of invariants is then used for evaluating web requests and responses at runtime. Any web request or response that violates the associated invariants is identified as a potential state violation attack. We develop a system prototype based on the WebScarab proxy and evaluate our detection system using a set of real-world web applications. The experiment results demonstrate that our approach is effective at detecting state violation attacks and incurs acceptable performance overhead. Our approach is valuable in that it is independent of the web application source code and can easily scale up.}, booktitle = {Proceedings of the 27th Annual Computer Security Applications Conference}, pages = {247–256}, numpages = {10}, keywords = {black-box approach, invariant, state violation attack, web application security}, location = {Orlando, Florida, USA}, series = {ACSAC '11} }
