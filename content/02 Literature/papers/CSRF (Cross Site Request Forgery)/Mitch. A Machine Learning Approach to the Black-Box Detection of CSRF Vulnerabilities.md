---
ID: 2025-04-30T16:51:57.570Z
tags:
  - paper
  - projectSLR
  - machineLearning
  - CSFR
Rank: A
Project:
  - SLR
---
## Context

In a [[CSRF (cross-site request forgery)]] attack, a malicious website forces the web browser to perform authenticated, security-sensitive operations at a target web application by means of cross-site requests, without any involvement of the browser’s user. This can be done by using just standard HTML tags and JavaScript, making CSRF attempts trivial to perform and forcing security sensitive web developers to implement solutions to filter out malicious cross-site requests abusing authentication

## Approach

We develop a methodology to manually identify sensitive HTTP requests on existing web applications with limited effort. We use this approach to build a dataset of 5,828 HTTP requests from 60 popular websites of the Alexa ranking, including 939 sensitive requests.

We make the dataset available online, so as to provide a ground truth for future research on the automated detection of sensitive HTTP requests. This manual process is performed only once to train the classifier and is not part of Mitch

Starting from our dataset, we investigate which features are useful to discriminate between sensitive and insensitive HTTP requests. We then use our dataset to train and test a range of machine-learned classifiers, showing that sensitive HTTP requests can be identified with high accuracy. 

We experimentally show that our classifiers outperform existing detection heuristics proposed in the literature. These classifiers could be integrated in tools like Burp and ZAP to simplify the task of penetration testers

We use our best-performing classifier as a building block for Mitch, the first machine learning solution for the black-box detection of CSRF vulnerabilities.
- Mitch is a ==language-agnostic tool, based on a new CSRF detection heuristic, which operates without having access to the source code of the web application to test==. This makes it suited to analyze both open- and closed-source web applications, potentially developed using different programming languages
- We experimentally show the effectiveness of Mitch by exposing 35 new CSRF vulnerabilities on 20 major websites and 3 new CSRF vulnerabilities on production software which was already analyzed with Deemon
- We also assess that the number of false positives and false negatives returned by Mitch is limited, with just 12 false positives among 47 detected CSRFs and only 7 false negatives overall

---
#### References
- [[(Calzavara, Conti, et al., 2019)]]
