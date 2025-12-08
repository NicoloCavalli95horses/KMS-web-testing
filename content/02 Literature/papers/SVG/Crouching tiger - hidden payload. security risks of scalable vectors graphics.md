---
ID: 2025-12-08T08:30:09.278Z
tags:
  - paper
  - SVG
  - clientSideAttacks
  - XSS
Rank: A*
---
## Context

SVG is based on XML and was first published by the W3C in 1999. The W3C and WHATWG draft specifications for HTML5 require modern web browsers to support SVG images’ embedment in a multitude of ways.
- SVG images can now for example be engrafted in a given document either in the classical way via specific tags such as ==`<embed>` or `<object>` tags,== or in the novel ways such as ==with `<img>` tags or inline== in any HTML5 document.

An SVG file can contain interactive and animated elements. Processing events and raster images, embedding videos, and rich-text are also feasible. Contrary to popular belief, ==SVG files should thus not be considered to be plain images or animations, and it is necessary to treat them as fully functional, one-file web applications== capable of potentially containing HTML, JavaScript, Flash and other interactive code structures.

**Contributions**
We introduce several novel attack techniques of using SVG images to target modern, real life web applications
- Active Image Injection (AII) attack, in which arbitrary JavaScript code can be delivered via SVG files
- SVG-based [[XSS (cross site scripting)]]
- SVG chameleons (files that are interpreted differently depending on how they are opened)
- deception of filtering techniques via SVG files



## Approach

Describe the research approach in simple terms. What did the authors do to solve the problem?

## Evaluation

Often a tool or a solution is implemented. How was that solution evaluated?

## Results

Describe the results in simple terms

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Heiderich, Frosch, et al., 2011)]]
