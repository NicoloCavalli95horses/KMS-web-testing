---
ID: 2025-03-20T15:40:46.331Z
tags:
  - paper
  - phishing
  - tabnabbing
  - machineLearning
Project:
  - SLR
---
## Context

[[tabnabbing]] attacks exploit user behavior in web browsers, deceiving users by altering content in inactive tabs to appear legitimate, leading to data disclosure or unintended actions.
## Approach

This research evaluates the effectiveness of [[RL (Reinforcement Learning)]] in detecting Tabnabbing attacks at the web browser level, presenting a proactive defense mechanism against this cyber threat

**Dataset**
A publicly available dataset (Phishpedia) was utilized to train the model. The dataset contained both ==phishing websites and legitimate websites==. 

**Features of the model**
- Title
- IP address in domain
- URL length
- Presence of '@' in the URL
- Redirection using '//' symbol
- Prefix or suffix separated by '-' symbol
- Subdomains and multi subdomains in the URL
- Favicon URL
- Percentage of request URLs
- Percentage of links in `<meta>`, `<script>`, and `<link>` tags

---
#### References
- [[(Fonseka, Pashenna, et al., 2023)]]
