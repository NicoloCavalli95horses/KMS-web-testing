---
ID: 2025-06-17T06:50:28.754Z
tags:
  - paper
  - XSS
  - CSS
  - clientSideAttacks
Rank: A*
---
## Context

[[XSS (cross site scripting)]] have been studied in-depth since its discovery and a number of solutions have been proposed. A successful XSS depends on:
1. **Injectability**: the attacker must be able to inject data into the Document Object Model (DOM) rendered by the Web browser
2. **Executability**: if JavaScript (or any other code) is injected, it must be executed
3. **Exfiltration Capability**: attacker-harvested data must be delivered to another domain or resource for further analysis and exploitation

[[CSP (Content Security Policy)]] and disabling JS are often used as mitigations.
In this paper, we evaluate whether restricting scripting content is sufficient for attack mitigation.

==Do we actually need JavaScript to perform XSS attacks?==

**Contributions**
We demonstrate that an adversary can use CSS in combination with SVG images, font files, HTTP requests, and plain inactive HTML, to achieve a partial JavaScript-like behavior
- an adversary can steal sensitive data, including passwords, and perform [[CSRF (cross-site request forgery)]]

We elaborate and discuss defense mechanisms

**Threat model**
We consider an app that may be
- in an HTML iframe (sandbox)
- using NoScript and similar script-blockers
- using client-side XSS filters
- e-mail clients and instant messaging

We consider that an attacker can inject arbitrary data into the DOM rendered by the browser (e.g., HTML mail body in a web mail application)

## Scriptless attacks

**Discretionary ligatures or contextual alternatives**
WOFF, in combination with CSS3 allows using a feature called discretionary ligatures or contextual alternatives. By specifying those for a WOFF font, arbitrary strings of almost any length can be represented by a single character.

Consequences:
- **Content obfuscation**: the text displayed on the screen does not match the text in the DOM
- Security tools, crawlers, parsers or search engines do not see the real text, making it difficult to detect suspicious content. Anti-bot and anti-scraping pages can hide the real content by using obfuscated fonts. Bots that read the DOM see gibberish or symbols, while the human user sees readable content
- It can be used to **evade automatic analysis** (e.g. by search engines, anti-phishing systems, antivirus, etc.)
- **Evasion of assistive technologies.** Screen readers, screen readers and accessibility tools do not read the content correctly, because the font displays different words than the encoded ones. This compromises accessibility, and can be exploited to hide discriminatory text, deceptive advertising or phishing
- **Spear phishing or targeted attacks**. Deceptive messages (e.g. “Account Verified”) can be displayed without these words being in the source code, evading automatic inspections

**CSS-based animations**
With CSS based animations, it is possible to over time change a wide range of CSS and DOM properties without using any script code

**CSS content property**
CSS allows to use a property called content to extract arbitrary attribute values and display the value either before, after, or instead of the selected element

```css
a[href^=http://]:after{
  content:attr(href)
}
```
- get all the `<a>` tags that have an attribute `href` that starts with `http://`
- `:after` adds content in a pseudo-element
- `content:attr(href)` inserts the value of `href` as content

`<a href="http://example.com">Click</a>` will produce: `Click http://example.com`
`
**CSS media query**
CSS Media Queries: CSS Media Queries provide website developers with a convenient way to deploy device-dependent style-sheets. A user agent can use a media query to for instance determine whether the device visiting the website has a display with a view-port width greater than 300 pixels.

## Results


## Limits



---
#### References
- [[(Heiderich, Niemietz, et al., 2012)]]
