---
ID: 2025-03-24T14:11:51.531Z
tags:
  - paper
  - cookie
  - clientDefense
  - authentication
  - supervisedLearning
  - machineLearning
Project:
  - SLR
---
## Context

Browser-based defenses can be an effective mechanism to protect web applications against the threats of [[session hijacking]], fixation, and related attacks. In existing approaches, all such defenses ==ultimately rely on client-side heuristics to automatically detect [[cookie]] containing session information, to then protect them against theft or otherwise unintended use==.
- While clearly crucial to the effectiveness of the resulting defense mechanisms, these heuristics have not undergone any rigorous assessment of their adequacy
- In this paper, we conduct the first such formal assessment

*RQ: How can we be sure that a cookie whose value is sufficiently long and random is, indeed, an authentication cookie?*
- most of existing solutions take this claim for granted and are based on the biased idea that every random-token is an auth cookie

### Contribution

- A design of a semi-automatic method to build a gold set of authentication cookies, that is, ==a verified dataset where authentication cookies are isolated and identified correctly==. The outcome of this process is a real-world dataset derived from a sample of 70 amongst the today’s most popular websites of the Alexa ranking
- A rigorous evaluation of four existing authentication cookie detectors. Our analysis shows a significant degree of misclassification in these detectors, that ends up generating a false sense of security
- development of a binary classifier aimed at automatically and accurately identifying authentication cookies, based on supervised learning techniques.

## Approach




---
#### References
- [[(Calzavara, Tolomei, et al., 2014)]]
