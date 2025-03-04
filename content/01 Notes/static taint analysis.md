---
ID: 2025-03-04-16:49
tags:
  - "#definition"
  - softwareEngineering
  - codeAnalysis
---
## Definition

Opposed as [[dynamic taint analysis]], static taint analysis does not require the code to be executed. Instead, it parses the code searching for special keywords or values that may cause an issue

**ESLint**, for example, may be augmented with a plugin to search for insecure pattern in the source code

```json
{
  "rules": {
    "security/detect-eval-with-expression": "error",
    "security/detect-object-injection": "warn"
  }
}
```

```javascript
const userInput = getUserData();
eval(userInput); // ⚠️ ESLint warn a risk of code injection
```

---
#### References
