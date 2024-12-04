
| ID       | 2024-12-04-17:11 |
| -------- | ---------------- |
| **Tags** | #paper           |
## Abstract

The correctness of browser rendering is not always guaranteed, often leading to rendering bugs. Traditional differential testing, while successful in various domains, falls short when applied to rendering bug detection because an HTML file is likely yield different rendered outcomes across different browsers.
This paper introduces **Visual Delta Consistency,** a [[test oracle]] that detects rendering bugs in web browsers.

> ==Any modifications made to an HTML file should uniformly influence rendering outcomes across browsers.== The reaction of all browsers should be consistent (i.e., either all browsers render them identically or all render them differently).

Based on this insight, we implemented it as a practical fuzzer named JANUS (see [[fuzzling]]). JANUS:
- constructs pairs of slightly modified HTML files and observes the change statuses of the corresponding rendered pages across browsers for bug detection
- we evaluated it on three widely-used browsers: Chrome, Safari, and Firefox
- JANUS detected 31 non-crash rendering bugs, out of which 24 confirmed with 8 fixes


## References
[[ref_janus_detecting_rendering_bugs_web_browsers]]