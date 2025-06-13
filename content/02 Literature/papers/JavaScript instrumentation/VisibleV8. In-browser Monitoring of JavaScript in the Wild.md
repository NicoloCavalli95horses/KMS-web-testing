---
ID: 2025-06-11T13:14:03.480Z
tags:
  - paper
  - project
  - chromium
  - codeAnalysis
  - instrumentation
Rank: A
---
## Context

It is possible to perform [[static taint analysis]] or [[dynamic taint analysis]] in different ways in the web.
- researchers can modify the implementation of an open source browser to provide in-browser (i.e., out-of-band) JS instrumentation
- researchers can exploit the flexibility of JS itself to inject language-level (i.e., in-band) instrumentation directly into JS applications at run-time

**Limits of in-band instrumentation**
In-band instrumentation works with *prototype patching* ([[monkey patching]]), by replacing references to target JS functions or objects with references to instrumented wrapper functions or proxy objects. The wrappers can access the original target through references captured in a private scope inaccessible to any other code.
- *structural limits*: JS relies on a global object (`window`) and there is no mutable root reference to the global object, and thus no way to replace it with a proxy version. You can only create proxies for specific objects of window. This way, complete coverage criterion is not achieved.
- *policy limits*: not all Chrome browser API features can be patched or wrapped by design policy (e.g., `window.location`, `window.document`)
- *patch detection*: prototype patches of native API functions (or property accessors) can be detected directly and thus fail the criterion of stealth. ==A script can change its behavior in direct response to detected patch==
- *patch Subversion.* Finally, prototype patches can be subverted through abuse of `<iframe>` elements. Each `<iframe>` is an independent browser window with its own global object, unaffected by prototype patches in other frames.

> [!NOTE]
> Robust JS instrumentation systems must be tamper proof, must provide comprehensive coverage, and must not introduce unmistakable identifying artifacts

VisibleV8 (VV8): a transparently instrumented variant of the Chromium browser for dynamic analysis of real-world JS. VV8 lets us passively observe native (i.e., browser-implemented) API feature usage by popular websites with fine-grained execution context (security origin, executing script, and code offset) regardless of how a script was loaded (via static script tag, dynamic inclusion, or any form of eval).
## Approach

We demonstrate VV8 by recording native feature usage across the Alexa top 50k websites, identifying feature probes indicative of bot detection, and analyzing the extent of such activity across all domains visited

## Evaluation

Our identification and analysis of bot detection artifacts used in the wild showcases VV8’s unique advantages over traditional JS instrumentation techniques:
- improved stealth in the face of evasive scripts (in-bound scripts may be detected)
- universal property access tracking on native objects that do not support proxy-based interposition

---
#### References
- [[(Jueckstock, Kapravelos, et al., 2019)]]
- Chromium modified version at: https://kapravelos.com/projects/vv8/#bibtex-vv8-imc19
