---
ID: 2025-03-31T08:12:16.467Z
tags:
  - paper
  - X-frame-options
  - projectSLR
  - [[clickjacking]]
  - riskAssessment
Project:
  - SLR
---
## Context

A [[clickjacking]] attack occurs when a user clicks on a visual object present on a webpage, but the action of the click is applied to another webpage. As a result, such a click may cause unintended consequences without the knowledge of the user

*RQ: how to quantify the risk[^1] due to [[clickjacking]] attacks for an organization deploying a web application?*

### How do we measure the security of our software

Related works:
- **code-level vulnerability count**: computation of the occurrence of specific known vulnerability based on source code analysis
- **temporal security metric**: include a base score (considering properties that do not change), exploitability (how easy is to exploit an issue), remediation (time and cost to fix the issue), report confidence (how accurate is a report on a specific issue). Subjective categories are given for each feature
- automatic generation of IT security metrics based on ISO protocols

The author's model considers risk as (`0 < R < 1`):
- number of possible attacks
- number of possible countermeasures
- possibility of successful attacks
- possibility of successful defenses

### How to quantify attacks

- **AM1**:  iframes having visibility attributes, divided by the total number of iframes
- **AM2**: consider the z-[[index]] property and calculates how much overlapping space is present for a given webpage compared to the entire available display space. The assumption here is that if overlapping objects are being displayed in larger space in the stack, then it is more likely to be part of [[clickjacking]] attacks.
- **AM3**: most [[clickjacking]] attacks may occur by redefining event handler methods related to mouse movement and attaching that to the document object. Thus, we propose a metric that computes the ratio of the total number of defined event handler methods to the total number of invoked event handler methods in a webpage.
- **AM4**: A common mechanism deployed by [[clickjacking]] attackers is to modify the mouse pointer-events property so that a click does not lead to any actions. We define a metric that computes the ratio between the number of clickable objects where pointer-event is nullified to the number of all clickable objects
- **AM5, AM6**: environmental metrics (take into consideration the underlying browser execution environment, such as the presence of XSS protection and disabling JS code execution)

### How to quantify defenses (server-side)

- **DM1**: number of pages having framebusting code in a webpage divided by the total number of accessible webpages
- **DM2**: number of pages where HTTP headers is sent from a page specifying framing policy, divided by the total number of accessible pages
- **DM3**: HEAD elements having style attribute to control the display of a page based on its location (no display if in an iframe), divided by the total number of HEAD elements in a webpage
- **DM4**: consider the browsers to support server-side mitigation such as X-FRAME-HEADER option. Assume that a user is using version `n` of a browser and the most recent version of the browser is `m`, then DM4 is computed as `1 – n/m`.
- **DM5**: This metric computes the presence of browser specific extensions currently present to support the prevention of overlapping clicks, control JavaScript code execution, or detect [[clickjacking]] attacks

## Evaluation

The risk associated with [[clickjacking]] was calculated for the apps:
- Moodle (e-learning)
- PHP-Fusion (content management system)
- PHP password manager

---
#### References
- [[(Shahriar, Haddad, et al., 2015)]]

[^1]: Risk is computed as multiplication of threat or vulnerability probability and the loss or impact on assets.
