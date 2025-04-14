---
ID: 2025-03-24T14:11:51.532Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2566486.2568047

## BibTeX

@inproceedings{10.1145/2566486.2568047, author = {Calzavara, Stefano and Tolomei, Gabriele and Bugliesi, Michele and Orlando, Salvatore}, title = {Quite a mess in my [[cookie]] jar! leveraging [[machine learning]] to protect web authentication}, year = {2014}, isbn = {9781450327442}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2566486.2568047}, doi = {10.1145/2566486.2568047}, abstract = {Browser-based defenses have recently been advocated as an effective mechanism to protect web applications against the threats of [[session hijacking]], fixation, and related attacks. In existing approaches, all such defenses ultimately rely on client-side heuristics to automatically detect cookies containing session information, to then protect them against theft or otherwise unintended use. While clearly crucial to the effectiveness of the resulting defense mechanisms, these heuristics have not, as yet, undergone any rigorous assessment of their adequacy. In this paper, we conduct the first such formal assessment, based on a gold set of cookies we collect from 70 popular websites of the Alexa ranking. To obtain the gold set, we devise a semi-automatic procedure that draws on a novel notion of authentication token, which we introduce to capture multiple web authentication schemes. We test existing browser-based defenses in the literature against our gold set, unveiling several pitfalls both in the heuristics adopted and in the methods used to assess them. We then propose a new detection method based on [[supervised learning]], where our gold set is used to train a binary classifier, and report on experimental evidence that our method outperforms existing proposals. Interestingly, the resulting classification, together with our hands-on experience in the construction of the gold set, provides new insight on how web authentication is implemented in practice.}, booktitle = {Proceedings of the 23rd International Conference on World Wide Web}, pages = {189–200}, numpages = {12}, keywords = {authentication cookies, classification, [[web security]]}, location = {Seoul, Korea}, series = {WWW '14} }
