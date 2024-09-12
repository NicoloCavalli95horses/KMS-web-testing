
| ID       | 2024-07-26-18:17       |
| -------- | ---------------------- |
| **Tags** | #UX #userModels #paper |
## Main concepts

- Dead-ends and navigational anomalies are frequent in large-scale web applications
- It is almost impossible to predict and address all of the user’s interaction expectations

How to obtain information about the user navigation:

- **Google Analytics** is used to infer user behavior models and track users’s actions. A snippet of JavaScript needs to be added to every page of the application
- **Proxy servers:** user requests are sent to a [[proxy-server]] that collect and analyze them and then send the requests to their destination.
- It is possible to modify the source code of browsers with JavaScript in order to gather data about the user navigation
- Classify user behaviour:
	- using clickstream method with the [[Markov’s chain and clickstream analysis]]
    - using clickstream graph
    - three phases process: preprocessing, pattern discovery, pattern analysis
    - analyzing the mean time spent on page

> In order to address navigation-related issues and to better understand where to maximize the testing efforts it is crucial to rank the web pages from the most visited to the last visited 

Understand what the most visited page is, is also interesting for **business reasons**: a custom ads could be placed in strategic point of the most visited pages only.

**Dead-end pages:** pages in which the users are being prevented from leaving the page without closing it (there are no ways to come back to previous or new pages)

> The more the developers of the applications know about their users’ needs and interests, the smarter choices they will make for their application’s development.

What can be done with web usage mining:

- personalized recommendation
- user intention prediction
- unpopular or dead-end pages detection
- web design enhancement
- support to new UX-UI design changes

> **Web usage mining:** the process of extracting useful information from web server logs based on the browsing and access patterns of the users.

## Automatically generate used behavioral models from the application’s log files

The author’s approach is to dynamically generate a set of probabilistic Markov models from the user’s interactions with a large-scale application and automatically augment the state of the models with reward values (user interest = page popularity). Methodology:

- identifying the initial parameters → association of atomic proposition to user requests (URL) in order to create a semantic map of the URLs. Creation of groups of labels
- generating the behavioural model → an engine analyzes the processed entries and generates a discrete-time Markov chain
- calculating and assigning reward values →  using Reinforcement Learning techniques to estimate the reward values for each web page
- analyzing the model

## References
[[ref_automatically_inferring_user_behavior]]