
| ID       | 2024-12-18-09:41        |
| -------- | ----------------------- |
| **Tags** | #paper #android #mobile |
## Abstract

GUI-based models extract from Android app execution traces, events, or source code. These models can be extremely useful for the generation of scenarios or test cases. However, extracting effective models can be an expensive process. Existing approaches for automatically deriving GUI-based models are not able to generate scenarios that include events which were not observed in execution (nor event) traces. 

In this paper, we address these and other major challenges in our novel hybrid approach, coined as **MONKEYLAB**
- Our approach is based on the Record → Mine → Generate → Validate framework, which relies on ==recording app usages that yield execution (event) traces==, mining those event traces and generating execution scenarios using statistical language modeling, [[static analysis]] and [[dynamic analysis]], and validating the resulting scenarios using an interactive execution of the app on a real device
- The framework aims at mining models capable of generating feasible and fully replayable (i.e., actionable) scenarios reflecting either natural user behavior or uncommon usages (e.g., corner cases) for a given app. 
- We evaluated MONKEYLAB in a case study involving several medium to-large open-source Android apps
- Our results demonstrate that MONKEYLAB is able to mine GUI-based models that can be used to generate actionable execution scenarios for both natural and unnatural sequences of events on Google Nexus 7 tablets.

Although several tools are available to support automated execution of Android apps for validation purposes, in practice, testing is still performed manually.

The Android ecosystem is so heterogeneous that some apps may have users coming from up to 132 unique devices.

**What are GUI models**: abstract representations that are de

## References
[[ref_mining_android_app_usages]]
