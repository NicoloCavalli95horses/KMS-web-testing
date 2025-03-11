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
- In this paper, we perform an in-depth ==quantitative and qualitative study on static buffer overflow detection==
- More specifically, we obtain both the buggy and fixed versions of 100 buffer overflow bugs from 63 real-world projects totalling 28 [[LoC]] based on the reports in [[CVE (common vulnerabilities and exposures)]]

Then, quantitatively, we apply Fortify, Checkmarx, and Splint to all the buggy versions to investigate their false negatives, and also apply them to all the fixed versions to investigate their false positives.

We also qualitatively investigate the causes for the false-negatives and false-positives of studied techniques to guide the design and implementation of more advanced buffer overflow detection techniques. Finally, we also categorized the patterns of manual buffer overflow repair actions to guide automated repair techniques for buffer overflow. 

## Research questions

- **RQ1**: How do state-of-the-art static buffer overflow detection techniques perform in terms of false-negatives and false-positives?
- **RQ2**: How do state-of-the-art static buffer overflow detection techniques perform in terms of efficiency?
- **RQ3**: Which types of API or code constructs are closely related to real-world buffer overflow bugs?
- **RQ4**: How do developers manually fix real-world buffer overflow bugs?

**RQ1**
Checkmarx is the best tool that can detect the most overflow bugs among the three tools. Splint performs the best in terms of false negative rate, while Fortify performs the best in terms of the false positive rate. The developers should use all the three tools together to achieve ideal performance in terms of false negative rates, and use the Fortify tool alone to achieve ideal performance in terms of false positive rates.

**RQ2**
The Checkmarx technique tends to be the most costly technique to apply, followed by the Fortify technique.

**RQ3**
Array, memcpy and sprintf are the top three APIs related to buffer overflow bugs. Splint works well on array, where Fortify and Checkmarx need to improve their performance. However, Fortify and Checkmarx can find most bugs on unsafe APIs like sprintf and strcpy

**RQ4**
- **Boundary Check**. Adding a boundary check before a strcpy or other API can avoid the buffer overflow. This is the most widely used strategy for fixing the studied buffer overflow bugs, indicating that missing boundary checks can be the main reason for buffer overflow bugs (see [[boundary value analysis]])
- **Use larger buffer**. using a larger buffer can fix the problem to some degree
- **API substitution.** substituting another safer API for the buggy one is also widely used to fix buffer overflow bugs
- **Integer check**: integer overflow is a common cause of buffer overflow. Checking the involved integer can prevent the issue
- **Add string end.** All string should end with string end ′∖0′. Otherwise copying it may lead to a buffer overflow. Adding string end to the end of the string can solve the problem 
- **Malloc check.** The use of failed malloc may cause the buffer overflow problem. Therefore, checking the corresponding malloc parameter and return value can be used to avoid buffer overflow bugs,
- **String reformat.** Formatting string can control how many bytes are written to a buffer Formatting string can control how many bytes are written to a buffer

---
## References
- [[(Ye, Zhang, Wang et al., 2016)]]