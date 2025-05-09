---
ID: 2025-03-24T14:11:51.531Z
tags:
  - paper
  - clientDefense
  - authentication
  - supervisedLearning
  - machineLearning
  - projectSLR
Rank: A*
Project:
  - SLR
---
## Context

Browser-based defenses can be an effective mechanism to protect web applications against the threats of [[session hijacking]], fixation, and related attacks. In existing approaches, all such defenses ==ultimately rely on client-side heuristics to automatically detect [[cookie]] containing session information, to then protect them against theft or otherwise unintended use==.
- While clearly crucial to the effectiveness of the resulting defense mechanisms, these heuristics have not undergone any rigorous assessment of their adequacy
- In this paper, we conduct the first such formal assessment

*RQ: How can we be sure that a [[cookie]] whose value is sufficiently long and random is, indeed, an authentication [[cookie]]?*
- most of existing solutions take this claim for granted and are based on the biased idea that every random-token is an auth [[cookie]]

### Contribution

- A design of a semi-automatic method to build a gold set of authentication cookies, that is, ==a verified dataset where authentication cookies are isolated and identified correctly==. The outcome of this process is a real-world dataset derived from a sample of 70 amongst the today’s most popular websites of the Alexa ranking
- A ==rigorous evaluation of four existing authentication [[cookie]] detectors==. Our analysis shows a significant degree of misclassification in these detectors, that ends up generating a false sense of security
- development of a binary classifier aimed at automatically and accurately identifying authentication cookies, based on [[supervised learning]] techniques.

## Approach

Building a gold set of cookies consists of two steps:
1. collecting sets of cookies from different websites (manual process that includes the login)
2. marking each [[cookie]] with a binary label to identify the [[cookie]] as an authentication [[cookie]] or not (automated process with [[supervised learning]])

**Session ID (auth token)**: a ==minimal set of cookies== which allows the server to authenticate the client, restoring the state of the associated user without asking her to log in again.

The authors' solution for step 2., is to iteratively generating and checking subsets of all the cookies, until the smallest subset that still allow the user to be authenticated in is found
- the output of the script was manually assessed for 70 websites
- only 2 output were found to be incorrect

### Results

- 70 popular websites were taken from the Alexa ranking, collecting a dataset of 327 cookies, including 103 authentication cookies
- 52 websites (74.3%) only use one authentication token, while the remaining 18 (25.7%) register two different tokens
- the most surprising evidence is that ==many cookies which comply with standard naming conventions for authentication cookies are not actually authentication cookies.==
- 82 out of 103 authentication cookies in our gold set ==do not comply with standard naming conventions==
- most of the authentication cookies ==are rather long as expected==, in that their values include at least 25 characters, even though we observe that some authentication cookies are ==surprisingly short==
- 53 out of 103 authentication cookies only use one case of letters and digits
- several authentication cookies present a fairly late expiration date
- cookies marked as HTTP-Only and/or Secure are likely to be auth [[cookie]], but not always
- the authors' tool performed quite well in correctly classifying the cookies in the gold dataset. The number of false positives is 33, which is better than all the other four examined solutions

---
#### References
- [[(Calzavara, Tolomei, et al., 2014)]]
