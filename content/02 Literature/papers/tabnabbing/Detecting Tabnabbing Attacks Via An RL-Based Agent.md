---
ID: 2025-03-20T15:40:46.331Z
tags:
  - paper
  - phishing
  - tabnabbing
  - machineLearning
---
## Context

[[tabnabbing]] attacks exploit user behavior in web browsers, deceiving users by altering content in inactive tabs to appear legitimate, leading to data disclosure or unintended actions.
## Approach

This research evaluates the effectiveness of [[RL (Reinforcement Learning)]] in detecting Tabnabbing attacks at the web browser level, presenting a proactive defense mechanism against this cyber threat

**Dataset**
A publicly available dataset (Phishpedia) was utilized to train the model. The dataset contained both ==phishing websites and legitimate websites==. 
- 48,046 data instances, with 19,388 being legitimate and 28,658 being phishing data

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

The [[random forest]] algorithm was used to select the most significant features from the initial set. 5 features were identified as the most important

The algorithm used to train the RL agent was DQN algorithm, which combines the principles of [[Q-learning]] with deep neural networks to approximate the Q-values (action values) for each state action pair

## Results

- During the testing phase, the RL agent achieved an accuracy of 83%, indicating its ability to correctly classify phishing and legitimate websites
- Some false negatives were present
- The achieved AUC-ROC of 85% suggests that the performance is quite robust

---
#### References
- [[(Fonseka, Pashenna, et al., 2023)]]
