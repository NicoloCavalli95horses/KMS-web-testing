| ID       | 2024-07-26-18:23 |
| -------- | ---------------- |
| **Tags** | #ref             |
## External Link

[Automatically inferring user behavior models in large-scale web applications](https://www.sciencedirect.com/science/article/abs/pii/S0950584921001579?via%3Dihub)
## BibTeX

@article{GHAEMMAGHAMI2022106704,
title = {Automatically inferring user behavior models in large-scale web applications},
journal = {Information and Software Technology},
volume = {141},
pages = {106704},
year = {2022},
issn = {0950-5849},
doi = {https://doi.org/10.1016/j.infsof.2021.106704},
url = {https://www.sciencedirect.com/science/article/pii/S0950584921001579},
author = {Saeedeh Sadat Sajjadi Ghaemmaghami and Seyedeh Sepideh Emam and James Miller},
keywords = {Model inference, User behavioral model, Reinforcement learning, Web application},
abstract = {Context
Inferring a behavioral model from users’ navigation patterns in a web application helps application providers to understand their users’ interests. It is essential to automatically identify and generate such models as the volume of daily interactions with applications are enormous.
Objective
The goal of this paper is to incrementally generate such an automated user behavior model with no instrumentation for understanding users’ interests in large-scale mobile and desktop applications.
Method
We propose an approach to fully automate the behavioral model generation for large-scale web applications. Our proposed solution infers a reward augmented behavioral model using a reinforcement learning method by 1) dynamically generating a set of probabilistic Markov models from the users’ interactions, 2) augmenting the state of the model with reward values. Our analysis engine of the proposed solution evaluates the evolving properties of interaction patterns against the inferred behavioral models using probabilistic model checking.
Results
We evaluate the utility of our approach by using it on a large-scale mobile and desktop application. In order to show that it is assigning meaningful reward values, we compare these values with results from Google Analytics (as a state-of-the-art approach). Empirical results indicate that our approach is not only compatible with the results from Google Analytics, but also can provide information in situations, where Google Analytics data is not available.
Conclusion
In this paper, we present a novel stochastic approach to (1) generate user behavioral models for mobile and desktop web applications, (2) automatically calculate the states’ rewards, (3) annotate and analyze the models to verify their quantitative properties, and (4) address many limitations found in existing approaches.}
}