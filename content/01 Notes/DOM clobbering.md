---
ID: 2025-02-03-13:42
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - businessFlowTampering
---
## Definition

DOM clobbering is a vulnerability that occurs when ==HTML element attributes (`id`, `name`) accidentally override global JavaScript variables or default object properties.== This can lead to unexpected behavior or security issues.

```html
<div id="customProp" name="customProp" />

<script>
  document.customProp = { test: true };
  console.log(document.customProp); //<div id="customProp" />
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

### Mitigation techniques

- HTML sanitizers tailored to protect against DOM clobbering (e.g., DOMPurify, HTML Janitor), or implementing CSP (Content Security Policy)
- Unfortunately, even these libraries are vulnerable to DOM clobbering, indicating that the problem is more complicated that it seems


---

#### References
- [[ref_dom_clobbering_attack_techniques]]

