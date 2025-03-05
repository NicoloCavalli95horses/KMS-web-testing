---
ID: 2025-03-04-15:55
tags:
  - "#definition"
  - cyberSecurity
  - sink
---
## Definition

In computing, a sink, or data sink generally refers to the ==destination of data flow==

The word sink has multiple uses in computing:
- In software engineering, an event sink is a class or function that receives events from another object or function
- In cyber security, a **sink function** is a target function, maybe a vulnerable one, that ==receives an user's input and does not check it properly==

### Example

```javascript
function writeToDOM() { //sink function
  const search = document.getElementById('search').value;
  const results = document.getElementById('results');
  results.innerHTML = 'You searched for: ' + search;
}
```

In the context of web application security, sink functions often make use of the following methods:
- `document.write()`
- `innerHTML()`
- `eval()`

---
#### References
- [[(Klein, Musch, et al., 2022)]]