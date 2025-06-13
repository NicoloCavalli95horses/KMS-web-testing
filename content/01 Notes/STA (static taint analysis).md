---
ID: 2025-03-04-16:49
tags:
  - "#definition"
  - softwareEngineering
  - codeAnalysis
---
> [!SUMMARY]
> Static taint analysis commonly refers to a traversal through an abstracted code representation ([[AST (Abstract Syntax Tree)]]) that *contains information on the data nodes and their relationships*

## Definition

Taint analysis is a type of data flow analysis that examines the *path of input data through a program*. Specifically, inputs from defined untrusted sources (i.e., inputs that can be controlled by the user) are **tainted** and followed 
- from the “source” (an initial place in code, where the input was introduced)
- to the [[sink function]] (a potentially vulnerable functionality that can be exploited if the input is malicious)

The objective is to determine whether a function containing a potential exploit ==is reachable by an attacker with her chosen inputs==. Therefore, this approach requires correct identifications of “vulnerable sinks” and possible “malicious data sources.” [[(Kluban, Mannan, et al., 2024)]]

Opposed as [[DTA (dynamic taint analysis)]], static taint analysis does not require the code to be executed. Instead, it parses the code searching for special keywords or values that may cause an issue

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
- [[(Kluban, Mannan, et al., 2024)]]