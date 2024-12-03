
| ID       | 2024-12-03-15:07 |
| -------- | ---------------- |
| **Tags** | #paper #gui      |
## Main concepts

The paper proposes a GUI fault model for providing GUI testers with benchmark tools to evaluate the ability of GUI testing tools to detect GUI failures. 

![[user_interface_faults.png]]

This fault model has been empirically assessed by analyzing and classifying into it 279
GUI bug reports of different open-source GUIs. 

To demonstrate the benefits of the proposed fault model, mutants have then been developed from it on a Java open-source GUI. As an illustrative use case of these mutants, we executed two GUI testing tools on these mutants to evaluate their ability to detect them. This experiment shows that if current GUI testing tools have demonstrated their ability for finding several kinds of GUI errors, they also fail at detecting several GUI faults we identified. The underlying reasons are twofold.
- First, GUI failures may be related to the graphical rendering of GUIs. Testing a GUI rendering is a complex task since current testing techniques mainly rely on code analysis that can hardly capture graphical properties.
- Second, the current trend in GUI design is the shift from designing GUIs composed of standard widgets to designing GUIs relying on more complex interactions and ad hoc widgets

New GUI testing techniques have thus to be proposed for fully testing, as automated as possible, GUI rendering and complex interactions using ad hoc widgets.

## References
[[ref_classifying_and_qualifying_gui_defects]]