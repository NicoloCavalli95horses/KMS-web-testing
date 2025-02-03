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
<div id="customProp" />

<script>
  document.customProp = { test: true };
  console.log(customProp); //<div id="customProp" />
</script>

```

This can happen mostly in legacy JavaScript codebases, where global variables were stored directly in global object, by mistake or by design (using `window`, `document`, `history`, `localStorage`) 

DOM clobbering can leverage this particular browser behavior to mess with object behavior. Similarly to [[prototype pollution]], it can lead to privilege escalation issues.

### Risks and associated issues
- Code fragments called **script gadget** can interact to injected HTML markup and transform it into executable code


---

#### References
- [[ref_dom_clobbering_attack_techniques]]

