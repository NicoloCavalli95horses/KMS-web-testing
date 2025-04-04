---
ID: 2025-03-04-16:47
tags:
  - "#definition"
  - softwareEngineering
  - codeAnalysis
---
## Definition

A [[dynamic analysis]] examines a program state throughout/after execution, by gathering additional information.

A dynamic taint analysis is a dynamic analysis executed for security purposes.
It tracks ==how private/sensitive information flows through the program== and if it is leaked to public observers.

### Example

The following function actually *change* the behavior of innerHTML, so that every time an innerHTML is executed, the function defined as the `set` value will be called:

```javascript
(function() {
  const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
  
  Object.defineProperty(Element.prototype, "innerHTML", {
    set: function(value) {
      if (value.includes("<script>")) {
        console.warn("🚨 Possible XSS detected!", value);
      }
      originalInnerHTML.set.call(this, value);
    }
  });
})();
```

So, every time something like this happen, a warning will be logged:

```javascript
  document.body.innerHTML = `<h1>${userInput}</h1>`
```

Technically you can apply taint tracking to any function, even non-native ones, by wrapping, overriding or proxy any function. This could help:
- Tracking when and how it is used
- Monitoring the values ​​that pass through it
- Modifing the behavior, if necessary

---
#### References
- Used by [[(Klein, Musch, et al., 2022)]] to detect the presence of [[XSS (cross site scripting)]] vulnerabilities in JavaScript code, after the user accept the [[cookie]] from the cookie banner
- [[(Kluban, Mannan, et al., 2024)]]