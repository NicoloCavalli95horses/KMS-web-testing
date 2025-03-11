---
ID: 2025-02-19-13:55
tags:
  - webinar
  - testingTechniques
  - visualTesting
speaker: Dr. Cor-Paul Bezemer, associate professor, University of Alberta
abstract: "Visual software quality assurance (QA) ensures that everything displayed on the screen looks as expected. Because visual QA is challenging to automate it is mostly done manually or through snapshot testing by comparing screenshots. However, manual testing does not scale well, and snapshot testing leads to many false positives for modern intelligent software due to its non-determinism. For example, AI-driven non- player characters (NPCs) in a game or personalized experiences on a website may cause differences between screenshots. To complicate matters, many visual anomalies (such as stylistic issues) require commonsense reasoning to detect, which traditional testing techniques cannot do. In my lab, we focus on visual quality assurance using vision language models. In my talk, I will give an overview of some of our most recent work on using vision language models for visual bug analysis for games.Bio: Cor-Paul Bezemer (he/his) is an Associate Professor in the Electrical and Computer Engineering department at the University of Alberta. He is the Canada Research Chair (CRC) in Quality Assurance of Intelligent Systems. He heads the Analytics of Software, GAmes And Repository Data (ASGAARD) lab. Before that, he was a postdoctoral research fellow in the Software Analysis and Intelligence Lab (SAIL) at Queen’s University in Kingston, Canada. His research interests cover a wide variety of software engineering and performance engineering-related topics. His work has been published at premier software engineering and machine learning venues such as the TSE and EMSE journals and the ICSE, ESEC-FSE, CVPR and NeurIPS conferences. Before moving to Canada, he studied at Delft University of Technology in the Netherlands, where he received his BSc (2007), MSc (2009) and PhD (2014) degrees in Computer Science."
---
All the example comes from games
- huge market valuation (321 billions estimated in 2026)
- games contain many hard to detect visual bugs
- most of the testing for game is done manually

![[bugs_in_games.png]]
*fig.1*

Bugs in games:
- bodies in unnatural position
- wrong physics (e.g., raining inside)

Specify a [[test oracle]] is not feasible
- there are too many things to consider
- it requires common sense
- how to teach a computer to have common sense?

LLM offer useful testing capabilities:
- they can somehow 'reason'

**VLM (Vision Language Models)**: can provide output given a visual input
- a VLM can be used as a test oracle

How to detect bugs in:
- realistic video-games
- non-realistic video-games, where the physics can be funny

What do a VLM need to create test oracles in fig.1?
- identify the table
- identify the table cloth
- identify wrong pattern on the table cloth

**GlitchBench**: 593 images and descriptions of video game glitches from 205 games (https://glitchbench.github.io/)

ChatGPT is already pretty good at distinguish between legitimate images and images in which the physics is broken

*Rendering and texture bugs are the most common in the game industry*

Models like ChatGPT are trained to **ignore defects on human faces, in order to be politically correct**:
- As a result, ChatGPT cannot detect bugs in rendering faces in NPC or main players' avatars in a game

**Bugs detection capabilities of VLM in HTML [[canvas DOM element]]**
- many of these apps are 2D, non-realistic games
- the canvas is hard to test because it is not represented in the DOM, so VLM can be useful in this context

20 open source canvas applications, 100 screenshots
- 1 bug-free image
- 4 buggy images per application

In 2D non-realistic games VLM cannot rely as much on their understanding of the world (approx. 26% accuracy)

How to improve the models?
- create bigger models, o a model tailored for this kind of tasks
- specialized models can lead to vendor lock-in
- better prompts: giving extra context about the application improve the accuracy of the model's response

**Providing extra context about an application**
- README file which include info about the type of application, its features, game rules, etc
- description of the types of bugs we are looking for
	- it is difficult to create valid bugs taxonomies because usually a bug is caused by multiple factors
- bug-free screenshot to comparison: it gives the biggest improvement to a model
- examples of image assets

**A model fine-tuned for video games understanding**: VideoGameBunny
- https://videogamebunny.github.io
- trained on YouTube gameplay videos: frames were extracted and labels were provided for each frame

Result of the training:

![[LLM_trained_for_videogames.png]]

3K questions about common sense were asked to the model. A 73.3% of accuracy was achieved

---

Email: bezemer@ualberta.ca
Website: https://asgaard.ece.ualberta.ca