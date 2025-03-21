---
ID: 2025-02-03-13:42
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - businessFlowTampering
---
## Definition

DOM clobbering is a vulnerability that occurs when ==HTML element attributes (`id`, `name`) accidentally override undefined global JavaScript variables or default object properties==.

This can lead to unexpected behavior or security issues: DOM clobbering can be considered a type of [[XSS (cross site scripting)]] attack

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

DOM clobbering can leverage this particular browser behavior to mess with object values.

Similarly to [[prototype pollution]], it can lead to:
- [[RCE (Remote Code Execution)]] (with prototype pollution on Node.js)
- client-side [[CSRF (cross-site request forgery)]]
- privilege escalation issues

Code fragments called **script gadget** can interact to injected HTML markup and transform it into executable code

Combine pairs of HTML tags or browser specific markups and attributes, is it possible to modify:
- deep object properties
- nested window proxies
- loops

> [!WARNING] A widespread issue
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

==Any custom HTML tag, even invalid tags, can be used to clobber a target variable in the `window` object in all browsers==

```html
<body>
  <customTag id="x" test="true"></eruihiudfh>
</body>

<script defer>
  console.log( window.x.getAttribute('test') ); // true
</script>
```

**DOM Tree Accessors** (R2)
The markups of this group can shadow `document` object properties because browsers comply with the DOM Tree Accessors rule, which instructs browsers how to retrieve properties of the document object (e.g., DOM elements)
- Similarly to the previous group, these markups use a single named HTML element (e.g., object, or embed) to clobber a property `x` of the document.

**Form parent-child relationships** (R3)
These markups clobber properties `X.y` where `X` can be any of `x`, `window.x`, and `document.x`
- First, they exploit either the rules R1 or R2 to clobber the base object `X`
- Then, they use the Form Element rule (R3) to clobber property `y` of object `X`, i.e., the form elements’ parent-child relationships where the browser creates a property of the second element for the first element’s accessor variable

DOM Clobbering code that rely on this technique include a ==form tag and a child (e.g., an input)==

**Nested Window Proxies** (R4)
These markups use the Iframe `srcdoc` rule (R4) to create nested window proxies that are named with `x` and `y`, respectively.
- Similarly to the previous group of markups, it uses the rule R1 or R2 to clobber the base object
- Then, the stacked iframes enable attackers to exploit frame navigation features to clobber object properties like `x.y`

**HTMLCollection** (R5)
The last group of markups rely on a different rule known as `HTMLCollection` (R5)
- when two or more elements have the same `id` in the `DOM` tree, browsers create an array-like object called `HTMLCollection`, which contains all elements with the same `id`
- Elements inside `HTMLCollections` can be accessed by their index in the collection and their `id` and `name`, enabling attackers to abuse R5 to clobber arrays and loop elements. as well as object properties like `x.x` and `x.y`
- in Chrome and Firefox, for `object` and `form` tags, the `HTMLCollection` is created even with two identical `name` values

Similarly to the previous techniques, rules R1-2 can be combined with
R5 to clobber nested object properties like window.x.y.

==Even native browsers' DOM APIs can be clobbered (347 in total)==

### Mitigation techniques

**HTML sanitizers**
- HTML sanitizers tailored to protect against DOM clobbering (e.g., DOMPurify, HTML Janitor), or implementing CSP (Content Security Policy)
- Unfortunately, even these libraries are vulnerable to DOM clobbering, indicating that they don't offer a complete protection

[[CSP (Content Security Policy)]]
- to prevent XSS attacks, the `script-src` directive can be used to limit the value of scripts sources to a set of trusted domains
- CSP cannot guarantee protection against DOM clobbering that affects properties other than `src`

**Object.freeze()**
- this powerful method prevents the object to be overwritten by named DOM elements
- detecting all the objects that can be frozen is a non trivial and error-prone task
- native properties cannot be frozen

Other techniques:
- do not use global variables (without `let` or `const`)
- do not rely on `window` or `document` object in sensitive operations
- double check variables type with `instanceof` and `typeof` operators

---

#### References
- [[(Khodayari, Pellegrino, 2023)]]

