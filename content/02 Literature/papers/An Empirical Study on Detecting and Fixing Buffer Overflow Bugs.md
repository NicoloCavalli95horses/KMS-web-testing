---
ID: 2025-01-14-14:04
tags:
  - paper
  - bufferOverflow
  - cyberSecurity
---
## Abstract

[[buffer overflow]] is one of the most common types of software security vulnerabilities. 
Although researchers have proposed various static and dynamic techniques for buffer overflow detection, buffer overflow attacks against both legacy and newly-deployed software systems are still quite prevalent. 

Compared with dynamic detection techniques, static techniques are more systematic and scalable. However, there are few studies on the effectiveness of state-of-the-art static buffer overflow detection techniques.
- In this paper, we perform an in-depth quantitative and qualitative study on static buffer overflow detection. More specifically, we obtain both the buggy and fixed versions of 100 buffer overflow bugs from 63 real-world projects totalling 28 [[LoC]] based on the reports in [[CVE (common vulnerabilities and exposures)]]

Then, quantitatively, we apply Fortify, Checkmarx, and Splint to all the buggy versions to investigate their false negatives, and also apply them to all the fixed versions to investigate their false positives.

We also qualitatively investigate the causes for the false-negatives and false-positives of studied techniques to guide the design and implementation of more advanced buffer overflow detection techniques. Finally, we also categorized the patterns of manual buffer overflow repair actions to guide automated repair techniques for buffer overflow. 

## Research questions

- **RQ1**: How do state-of-the-art static buffer overflow detection techniques perform in terms of false-negatives and false-positives?
- **RQ2**: How do state-of-the-art static buffer overflow detection techniques perform in terms of efficiency?
- **RQ3**: Which types of API or code constructs are closely related to real-world buffer overflow bugs?
- **RQ4**: How do developers manually fix real-world buffer overflow bugs?

**RQ1**
Given time constraint, Checkmark

## References

[[ref_empirical_study_detecting_buffer_overflow]]