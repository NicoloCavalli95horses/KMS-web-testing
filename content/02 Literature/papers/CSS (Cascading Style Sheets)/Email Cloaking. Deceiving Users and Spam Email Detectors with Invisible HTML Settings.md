---
ID: 2025-11-24T07:24:15.101Z
tags:
  - paper
  - CSS
  - email
Rank: A
---
## Context

Statistics indicate that the average number of spam emails sent per day is 85 billion. Spam filtering relies on multiple factors, including sender verification (e.g., SPF) and content detection

Cloaked Spam Email (CSE) can covertly bypass spam detection engines. It utilizes the CSS configuration in HTML emails that can create invisible effects==, inserting interfering text content into the emails==. This interferes with the judgment of spam detection engines, thus achieving the goal of bypassing detection.

CSE can lure a victim into opening an email:
- By using invisible tags, they embed normal content at the beginning of the email, ensuring that normal email content is seen in the email summary, thereby inducing users to click on spam emails

> [!NOTE] Note
> Because spam detectors do not render CSS properties, they process both invisible and visible text together

## Approach

To assess CSE threat, we conducted systematic tests on 14 major email providers.
- First, by thoroughly analyzing HTML implementation standards 6 and validating them in email clients, we identified 16 invisible configurations that can render text content invisible

We define 5 categories:
1. visibility control
2. color-related
3. size-related
4. layout related
5. content manipulation

To test whether the use of invisible CSS configurations could bypass spam detection engines, we collected test samples from open-source spam datasets and selected 14 email providers.

We embedded 16 invisible CSS properties within these spam samples separately to interfere with the detection systems’ judgment of email content while ensuring user readability, resulting in a total of 2,240 test samples. Finally, we sent these spam test samples to the controlled test accounts of the 14 email providers.

The results revealed that 12 email providers, e.g., ==Gmail== and ==iCloud==, were ==vulnerable to CSE risks==, with test samples successfully bypassing detection engines and reaching users’ inboxes.

Finally, we conducted a large-scale assessment of CSE impact using two real-world spam datasets: an open-source spam dataset and the actual logs from a leading email service provider
- Through analyzing a total of 8,816,785 emails, CSEMiner successfully identified 102,156 CSE attacks, involving 73,202 distinct spam senders.
## Approach

To comprehensively understand and characterize the landscape of CSE in the wild, ==we designed and implemented CSEMiner, a framework to automatically detects email cloaking==. Subsequently, we applied CSEMiner to two real spam datasets and measured real-world CSE threat impact.
## Results

In our dataset of 8,816,785 spam emails, CSEMiner first excluded 5,178,482 non-HTML emails and discovered 102,156 CSEs in the remaining 3,638,303 HTML emails. Due to the limitations of the ground truth, we manually examined the detection results. We randomly sampled 2,000 emails from the suspected CSEs, extracted their HTML source codes, and manually reviewed their contents. We confirmed that 1,973 were indeed CSEs, resulting in a false positive rate of only 1.35%.
## Ethics

They report references for the ethical guidelines:
- For the Protection of Human Subjects of Biomedical, U.S.N.C., Research, B.: The Belmont report: ethical principles and guidelines for the protection of human subjects of research. Department of Health, Education and Welfare (1979)
- Kenneally, E., Dittrich, D.: The menlo report: Ethical principles guiding information and communication technology research. Available at SSRN 2445102 (2012)

What are the limits of the research? What could be improved?

---
#### References
- [[(Guo, Liu, et al., 2025)]]
