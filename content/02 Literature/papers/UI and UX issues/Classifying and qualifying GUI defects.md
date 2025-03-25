---
ID: 2024-12-03-15:07
tags:
  - paper
  - GUI
---
## Abstract

The introduction of new types of interactions in GUIs presents new kinds of [[error]] that are not targeted by current testing techniques. We believe that to advance GUI testing, the community needs a comprehensive and high level GUI fault model, which incorporates all types of interactions.

The work detailed in this paper establishes 4 contributions:
1) A GUI [[fault model]] designed to identify and classify GUI faults.
2) An empirical analysis for assessing the relevance of the proposed fault model against failures found in real GUIs
3) An empirical assessment of two GUI testing tools (i.e. GUITAR and Jubula) against those failures
4) GUI mutants we’ve developed according to our fault model. These mutants are freely available and can be reused by developers for benchmarking their GUI testing tools.

==The current trend in GUI design is the shift from designing standard widgets to designing [[ad hoc widgets]] that can handle [[multi-event interactions]] and [[multi-modal interactions]]==

The GUI goals are:
- allow the user to reach his goals by performing certain actions that modify the system state
- presents data
- aesthetics purposes

**Direct manipulation**: aims at minimizing the mental effort required to use systems (e.g., drawing application)

**Feedback**: the response of the system after an user action

**Reversible action**: it reduce user anxiety about making mistakes. It consists in the possibility to cancel an action in progress (e.g., ctrl + z)

![[user_interaction_faults.png]]
## GUI fault model

A fault model describes a high level set of faults and issues that may concerns a system
- ==faults are graphical or textual differences between an incorrect and a correct behavior==

==The paper proposes a GUI fault model to be used to *test GUI testers*.== 
- The model serves as a benchmark tool, to evaluate the ability of GUI testing tools to detect GUI failures. 
- Given this model is possible to build a set of benchmark mutations to evaluate the ability of GUI testing tools further

![[user_interface_faults.png]]

**Q: Is usability a GUI fault?** usability issues are related to a poor design but are not faults per se, considering a fault as a mismatch between the observed behavior and the expected one. This reasoning can be extended to other topics, such as performance or accessibility

The proposed fault model has been empirically assessed by analyzing and classifying into it 279 GUI bug reports. of different open-source GUIs. 

To demonstrate the benefits of the proposed fault model, mutants have then been developed from it on a Java open-source GUI. As an illustrative use case of these mutants, we executed two GUI testing tools on these mutants to evaluate their ability to detect them. This experiment shows that if current GUI testing tools have demonstrated their ability for finding several kinds of GUI errors, they also fail at detecting several GUI faults we identified. The underlying reasons are twofold.
- First, GUI failures may be related to the graphical rendering of GUIs. Testing a GUI rendering is a complex task since current testing techniques mainly rely on code analysis that can hardly capture graphical properties.
- Second, the current trend in GUI design is the shift from designing GUIs composed of standard widgets to designing GUIs relying on more complex interactions and ad hoc widgets

New GUI testing techniques have thus to be proposed for fully testing, as automated as possible, GUI rendering and complex interactions using ad hoc widgets.

---
## References
- [[(Lelli, Blouin, Baudry, 2015a)]]