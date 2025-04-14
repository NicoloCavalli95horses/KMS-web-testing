---
ID: 2025-04-03T08:58:58.491Z
tags:
  - paper
  - projectSLR
  - behavioralModel
  - biometric
  - behavioralBiometric
  - userModels
  - authentication
Project:
  - SLR
---
Authentication enhancement through behavioral biometric measurement to mitigate [[session hijacking]] attack
## Context

Many authentication schemes were proposed over the years; as of today, the most used authentication scheme is still username and password.

Even with advanced system like 2FA (two factor authentication), the core idea it is still the same: ==the user is authenticated only once==, and if his credentials are stolen nothing will stop the attacker from impersonating the user.

Therefore, a continuous authentication scheme is necessary to keep verifying user’s behavior throughout the session.

Traditional mouse/touch metrics include:
- movement coordinates,
- timestamps,
- scrolling,
- mouse press or release,
- touch pressure and size
- movement velocity
- curvature,
- number of clicks,
- number of double clicks,
- ...

On this paper the focus is on *user continuous verification using pointing device movements.*

## Approach

The authors propose user continuous verification analyzing contextual sequences (how the user browses a website)
- The basic assumption is that each user has its own “preferred” paths, and sharp deviations could Indicate an abnormal behavior
- A path could indicate the order in which the user visits the different elements and the action in each element while the user is in the website
- A path consists of the ==elements on which the pointing device traversed==

The learning and prediction are performed using Hidden Markov Model combined with Linear Regression

**Data collection**
We collected each pointing device event (move, press, scroll, swipe, etc.) during the user’s session using a JavaScript. Instead of calculating features using this data as previous papers suggested, we ignore the traditional X, Y movements features and extract the following information for each event:
- **Element type**: which DOM element the user interacted with (buttons, tags, form fields, etc)
- **Element ID**: given by the website developers
- **Ancestor**: if an element does not contain an ID, the closest ancestor is considered instead
- **Interaction type**: was the element hovered, pressed or swiped on

Each quartette is treated as a *state in a time series sequence of actions*

**Sequence construction**
Our technique considers several sequence construction options:
- Construct sequences based on all the elements the user hovered/swiped on with the pointing device during the session
- Construct the sequence based only on pressed elements
- Construct sequences based on the elements that the user stopped on for a predefined period of time (stopping is defined using a predefined time window in which the user did not moved the pointing device)

**Training phase**
[[HMM (Hidden Markov Model)]] was used, ==as it is a popular and powerful probabilistic approach for modeling and analyzing time-series data==

**Test phase**
As a new test session arrives, we extracted the session’s element-based sequences using and tested it against the model we trained.

Different techniques were tested to detect deviations (that is, abnormal behaviors that may not be performed by the same user)
- linear and polynomial regressor
- distance from point to regressor
- static threshold

## Results

Best results on both mouse and touch devices data were obtained using ==linear regressor== with margin as our dynamic threshold.
- On the Mouse data we achieved AUC of approximately 0.91, with 93% true negative (TN) and 80% true positive (TP)
- On the Mobile data with linear regressor we achieved AUC of 0.922, with 90% true negative (TN) and 77% true positive (TP)

These results imply that our method is able to profile real users using data collected from their accounts in an uncontrolled environment with high accuracy, while detecting the vast majority of impostors

## Limits

- [[privacy]] concerns not discussed
- consequences of false positives not discussed (legitimate users logged out by mistake)

---
#### References
- [[(Levi, Hazan, et al., 2019)]]
