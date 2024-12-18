
| ID       | 2024-12-18-09:41        |
| -------- | ----------------------- |
| **Tags** | #paper #android #mobile |
## Abstract

GUI-based models extracted from Android app execution traces, events, or source code can be extremely useful for challenging tasks such as the generation of scenarios or test
cases. However, extracting effective models can be an expensive process. Moreover, existing approaches for automatically deriving GUI-based models are not able to generate scenarios that include events which were not observed in execution (nor event) traces. 
In this paper, we address these and other major challenges in our novel hybrid approach, coined as MONKEYLAB
- Our approach is based on the Record→Mine→Generate→Validate framework, which relies on recording app usages that yield execution (event) traces, mining those event traces and generating execution scenarios using statistical language modeling, static and dynamic analyses, and validating the resulting scenarios using an interactive execution of the app on a real device
- The framework aims at mining models capable of generating feasible and fully replayable (i.e., actionable) scenarios reflecting either natural user behavior or uncommon usages (e.g., corner cases) for a given app. 
- We evaluated MONKEYLAB in a case study involving several medium to-large open-source Android apps
- Our results demonstrate that MONKEYLAB is able to mine GUI-based models that can be used to generate actionable execution scenarios for both natural and unnatural sequences of events on Google Nexus 7 tablets.

## References
[[ref_mining_android_app_usages]]
