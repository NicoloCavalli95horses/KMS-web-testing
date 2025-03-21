---
ID: 2025-03-20-17:17
tags:
  - "#definition"
  - machineLearning
---
## Definition

RL is a branch of machine learning that focuses on teaching agents to make decisions by interacting with an environment

Through a system of rewards and penalties, the agent learns to take actions that maximize the cumulative reward over time

> [!warning] What is RL
> RL is best perceived as a category of problems rather than a mere collection of techniques

### Components of a RL model

- The **policy** of an agent dictates its actions in a given state, serving as a guide to choose the appropriate action based on the current state.
- A **reward** signal represents a singular numeric value that defines the objective of a RL problem. The agent's aim is to maximize its cumulative reward over time, with the reward signal indicating which events are advantageous or detrimental for the agent
- The **value function** is responsible for estimating the expected cumulative reward an agent can obtain from a specific state or action. By assigning values to states or actions based on their potential for future rewards, the value function assists the agent in decision-making processes
- The **model** of the environment (optional component) replicates the behavior of the actual environment or permits inferences about its future behavior. This model can be employed for planning and decision-making by simulating potential future scenarios

### Examples of RL algorithms

- [[Q-learning]]

---
#### References
- [[(Fonseka, Pashenna, et al., 2023)]]