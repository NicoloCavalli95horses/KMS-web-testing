---
ID: 2025-02-21-16:42
tags:
  - "#definition"
  - pixelStealing
  - timingAttack
---
## Definition

Pixel stealing is a [[timing attack]] technique that attempts to extract visual information from protected content (e.g. a cross-origin iframe or password field) by exploiting side effects in browser rendering. While an attacker cannot directly access the iframe's pixels, they can infer information based on how the browser renders graphics.

### How it works

The browser must draw the pixels of a page on the screen. The rendering time of a page can vary based on several factors:
- The displayed text (e.g. length, font, size)
- The background color and contrast with the text
- Hidden or overlapping elements

The attacker tries to influence or measure these effects to infer the hidden content.

> [!SUMMARY] CSS filters
> It has been discovered that CSS native filters highly influence the rendering time and can magnify the difference in rendering time in different scenarios (e.g., user logged-in, user not logged-in)

---
#### References
- [[(Kotcher, Pei, Jumde, et al., 2013)]]