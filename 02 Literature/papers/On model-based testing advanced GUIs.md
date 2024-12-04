
| ID       | 2024-12-04-09:40 |
| -------- | ---------------- |
| **Tags** | #paper #gui      |
## Abstract

GUI design is currently shifting from designing GUIs composed of [[standard widgets]] to designing GUIs relying on more natural interactions and [[ad hoc widgets]].  
This shift is meant to support the advent of GUIs providing users with more adapted and natural interactions, and the support of new input devices such as multi-touch screens with [[multi-modal interactions]].

Standard widgets (e.g. buttons) are more and more replaced by ad hoc ones (e.g. the drawing area of graphical editors), and interactions are shifting from [[mono-event interaction]] (e.g. button pressures) to [[multi-event interactions ]](e.g. multi-touch and gesture-based
interactions). 

As a consequence, the current GUI model-based testing approaches, which target event-based systems, show their limits when applied to test such new advanced GUIs. The work introduced in this paper establishes the following contributions:
- a precise analysis of the reasons of these current limits
- a proposition to tackle the identified limits by leveraging the Malai GUI specification language and by proposing the concept of interaction-action-flow graph
- feedback from two use cases
- an industrial project and an open-source application, where the proposed approach has been applied.
## References
[[ref_on_model_based_testing_advanced_guis]]