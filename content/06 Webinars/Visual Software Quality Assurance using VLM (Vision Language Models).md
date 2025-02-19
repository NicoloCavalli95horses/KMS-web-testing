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
fig.1

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

**GlitchBench**: 593 images and descriptions of video game glitches from 205 games


