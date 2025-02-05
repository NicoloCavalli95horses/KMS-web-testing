---
ID: 2025-01-30-14:55
tags:
  - paper
  - blackBoxTesting
  - clientSideAttacks
  - businessFlowTampering
  - JavaScript
  - codeAnalysis
  - cyberSecurity
---
[[BFT (business flow tampering)]] is a serious issue. Most of the digital content services (Amazon, Netflix, etc) implements one of the following business model:
- **advertising**: content providers earn revenue from advertisers, which are often protected by anti-adblocker
- **subscription**: [[paywalls]] are used 
- **donation**: from the user
- **non-profit** model (Wikipedia)

### BFT Detector implementation

**Dynamic execution and trace collection**
==Dynamic execution trace (e.g., functions name, execution paths) are collected ==by exercising business processes according to the business model. The output includes:
- call traces: caller function, function call statement, callstacks
- execution result snapshots, which are essentially screenshots and HTML/DOM data (this will be used in the testing phase).

To support this step, the V8 JS engine has been modified to modify the runtime execution of JavaScript

**Call Trace Differential Analysis**
Given the collected call traces of the passing[^1] and blocking[^2] runs, we perform a differential analysis to identify a divergence point representing the critical decision-making point in the business model.
-  A ==divergence point is a point from which you can distinguish between a path leading to the desired business flow and a path bypassing the execution of the regular flow==

In the following example, `user.isSubscribed` is a divergence point. Tampering this condition may result in access to premium content:

```JavaScript
if (user.isSubscribed) {
  showPremiumContent()
} else {
  redirectToSubscribePage()
}
```

The divergences points are automatically detected with the following algorithm:
1. execution traces are collected two times, one for the passing run and one for the blocking run. The definition of these runs is based on common implementation of the business models
2. Caller, [[callee]] and several [[callstack]] are used to create a map of the functions called in sequence to get to the current execution point
3. this map is called *call signature*
4. the algorithm then identify the *intersection* of the call signatures between passing run and blocking run. The intersection is considered to isolate the code that is relevant to the business model
5. the intersection is the set of the call signatures that are in common
6. then, unique call signatures for both passing and blocking runs are detected. A unique call signature occur in a run and not in the other
7. common call signatures and unique call signatures are matched
8. a divergence point occur when:
	- a function is a callee of a common call signature
	- the same function is a caller of a unique call signature
	- the callstack before the divergence is the same

In other words, a divergence point is a point after which the execution flow of two similar traces changes significantly

> [!EXAMPLE] Example
> Let's consider the LA Times example:
> - The passing run occur when the user views an article without an adblocker
> - The blocking run occur when the user views the same page with an adblocker enabled
> 
> The `Hf()` function that checks for adblocker is a divergence point, because it is present in both the passing and blocking runs, but then the blocking run continues by calling the `a.j()` function that displays the adblocker detection message.

**Test Input Generation**
We generate test inputs containing statements data to be mutated by using the call divergence points from the previous step.

**BFT Testing**
Our system repeatedly visits the web page to mutate the execution according to the test inputs generated from the previous step.

**Test Result Verification**
We measure whether our system successfully tampers with the business process by comparing snapshots from the test and the results from the original execution. A machine learning technique is used to calculate the degree of similarity between snapshots ([[BRF (Balance Random Forest)]] is used to balance the dataset)

352 real-world digital content service providers were tested, and 315 flaws were found.


> [!WARNING] Limits and shortcomings
> During the test result verification phase, it is worth noting that:
> - most of the text executions led to crashes, because undefined objects were accessed or functions were invoked with the wrong parameters
> - the system does not consider BFT flaws due to multiple mutations of the client-side codebase
> - does not work well in detecting flaws in large and complex codebases (+7100 functions)

---
## References
- [[ref_bft_detector_digital_content_services]]

### Notes
[^1]: access to premium content with a premium subscription
[^2]: being redirect to the subscription page while trying to access to premium content
