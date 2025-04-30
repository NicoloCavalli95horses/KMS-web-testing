---
ID: 2025-04-30T16:55:46.089Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2754933

## BibTeX

@article{10.1145/2754933, author = {Calzavara, Stefano and Tolomei, Gabriele and Casini, Andrea and Bugliesi, Michele and Orlando, Salvatore}, title = {A Supervised Learning Approach to Protect Client Authentication on the Web}, year = {2015}, issue_date = {June 2015}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, volume = {9}, number = {3}, issn = {1559-1131}, url = {https://doi.org/10.1145/2754933}, doi = {10.1145/2754933}, abstract = {Browser-based defenses have recently been advocated as an effective mechanism to protect potentially insecure web applications against the threats of session hijacking, fixation, and related attacks. In existing approaches, all such defenses ultimately rely on client-side heuristics to automatically detect cookies containing session information, to then protect them against theft or otherwise unintended use. While clearly crucial to the effectiveness of the resulting defense mechanisms, these heuristics have not, as yet, undergone any rigorous assessment of their adequacy. In this article, we conduct the first such formal assessment, based on a ground truth of 2,464 cookies we collect from 215 popular websites of the Alexa ranking.To obtain the ground truth, we devise a semiautomatic procedure that draws on the novel notion of authentication token, which we introduce to capture multiple web authentication schemes. We test existing browser-based defenses in the literature against our ground truth, unveiling several pitfalls both in the heuristics adopted and in the methods used to assess them. We then propose a new detection method based on supervised learning, where our ground truth is used to train a set of binary classifiers, and report on experimental evidence that our method outperforms existing proposals. Interestingly, the resulting classifiers, together with our hands-on experience in the construction of the ground truth, provide new insight on how web authentication is actually implemented in practice.}, journal = {ACM Trans. Web}, month = jun, articleno = {15}, numpages = {30}, keywords = {classification, authentication cookies, Web security} }
