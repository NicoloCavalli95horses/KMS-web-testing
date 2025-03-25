---
ID: 2024-12-04-17:11
tags:
  - paper
  - browser
  - visualTesting
---
## Abstract

The correctness of browser rendering is not always guaranteed, often leading to rendering bugs. Traditional [[differential testing]], while successful in various domains, falls short when applied to rendering bug detection because an HTML file is likely yield different rendered outcomes across different browsers.

This paper introduces **Visual Delta Consistency,** a [[test oracle]] that detects rendering bugs in web browsers.

> [!summary]
> ==Any modifications made to an HTML file should uniformly influence rendering outcomes across browsers.== The reaction of all browsers should be consistent (i.e., either all browsers render them identically or all render them differently).

We implemented a practical fuzzer named JANUS (see [[fuzzing]]), that:
- constructs pairs of slightly modified HTML files and observes the change statuses of the corresponding rendered pages across browsers for bug detection (1)
- we evaluated it on three widely-used browsers: Chrome, Safari, and Firefox
- JANUS detected 31 non-crash rendering bugs, out of which 24 confirmed with 8 fixes

> [!NOTE] Very old bugs detected
> Through manual verification it is confirmed that JANUS founded bugs that existed since the initial implementation of certain rendering features in browsers. In fact, only 4 bugs were recently-introduced regression bugs.

**This process consists of three parts:**
1. Initial DOM Generation, which generates initial HTML files that are compatible with the browsers under test, and able to cover a wide range of rendering features
	- this is possible thanks to an analysis of web standard and browser compatibility
	- the initial HTML generated is compatible and supported by all the browsers
	- the initial HTML should be diverse enough to cover a broad spectrum of features
2. HTML Transformation, which properly constructs a modified HTML file of the initial HTML file while ensures the soundness of visual delta consistency
3. Consistency Checking, which observes the visual deltas across browsers and identify rendering bugs (screenshots comparison on Selenium)

---
## References
- [[(Zhou, Zhang, Qian, et al., 2024)]]