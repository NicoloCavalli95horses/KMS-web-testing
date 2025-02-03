---
ID: 2025-02-03-13:42
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - businessFlowTampering
---
## Definition

DOM clobbering is a vulnerability that occurs when ==HTML element attributes (`id`, `name`) accidentally override global JavaScript variables or default object properties.== This can lead to unexpected behavior or security issues. It can be considered a type of [[XSS (cross site scripting)]] attack.

```html
<a id="globalConfig" href="hacked.js" />

<script>
  const script = document.createElement('script');
  let config = window.globalConfig || {href: 'script.js'};
  script.src = config.href;
  document.body.appendChild(script);

  console.log(script.src); // hacked.js
</script>

```

This can happen mostly in legacy JavaScript codebases, where global variables were stored directly in global object, by mistake or by design (using `window`, `document`, `history`, `localStorage`) 

DOM clobbering can leverage this particular browser behavior to mess with object behavior. Similarly to [[prototype pollution]], it can lead to:
- arbitrary code execution
- client-side [[CSFR (cross-site request forgery)]]
- privilege escalation issues

Code fragments called **script gadget** can interact to injected HTML markup and transform it into executable code

Combine pairs of HTML tags or browser specific markups and attributes, is it possible to modify:
- deep object properties
- nested window proxies
- loops

> [!WARNING] Even the big guys!
> DOM clobbering vulnerabilities have been found in **Gmail** and **Google Analytics**

### The problem is growing over time (!)

When looking at the evolution of DOM Clobbering attack markups, we observe a consistent complexity growth:
- starting from a single HTML element that can overwrite a variable,
- evolving with pairs of HTML tags that clobber properties of objects (2013-15)
- then advancing into a wide variety of browser-specific combinations of different HTML tags and attributes that can not only overwrite variables, but also native DOM objects (2015-18)
- even nested object properties, and loop elements (2018-22)

### Types of DOM clobbering

![[dom_clobbering_types.png]]

**Named Access Window** (R1)
These groups of markups leverage a single HTML element whose `id` or `name` is set to a target variable `x`, clobbering `window.x` 
- as a final result, both  `window.x` and `x` (which is interpreted as global x belonging to window) are clobbered

**DOM Tree Accessors** (R2)
The markups of this group can shadow `document` object properties because browsers comply with the DOM Tree Accessors rule, which instructs browsers how to retrieve properties of the document object (e.g., DOM elements)
- Similarly to the previous group, these markups use a single named HTML element (e.g., object, or embed) to clobber a property `x` of the document.

**Form parent-child relationships**
These markups clobber properties ‘X.y’ where ‘X’ can be any of ‘x’, window.x, and document.x.
- First, they exploit either the rules R1 or R2 to clobber the base object ‘X’
- Then, they use the Form Element rule (R3) to clobber property ‘y’ of object ‘X’, i.e., the form elements’ parent-child relationships where the browser creates a property of the second element for the first element’s accessor variable

DOM Clobbering code that rely on this technique CA a form tag and a child (e.g., an input) named ‘x’ and ‘y’, respectively.
### Mitigation techniques

- HTML sanitizers tailored to protect against DOM clobbering (e.g., DOMPurify, HTML Janitor), or implementing CSP (Content Security Policy)
- Unfortunately, even these libraries are vulnerable to DOM clobbering, indicating that the problem is more complicated that it seems


---

#### References
- [[ref_dom_clobbering_attack_techniques]]

