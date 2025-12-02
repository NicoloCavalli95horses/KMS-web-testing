---
ID: 2025-12-02T08:13:48.129Z
tags:
  - paper
  - CSS
  - historySniffing
  - clientSideAttacks
Rank: A*
---
## Context

History sniffing attacks allow web sites to learn about users’ visits to other sites. The major browsers have recently adopted a defense against the current strategies for history sniffing. In a user study with 307 participants, we demonstrate that history sniffing remains feasible via interactive techniques which are not covered by the defense.

**History sniffing:** illicit inspection of someone's browsing history

**Interactive sniffing**: victims must also be willing to interact with an attacker-controlled website. This is not rare since:
- legitimate websites display [[CAPTCHA (Completely Automated Public Turing-test-to-tell Computers and Humans Apart)]]  asking an user to complete simple puzzles or insert characters
- users like games, as a form of entertainment

Why sniffing?
- **good reasons**: banks or other high-risks platforms could warn the user if he has recently visited a known phishing website
- **malign reasons**: get info about the user, profiling, selling info illegally, create more customized phishing attacks, blackmail, ...

## Approach


**CAPTCHA-like games**
Victims are asked to type several short English words. Each word is a hyperlink to an URL that the attacker wishes to probe; if visited, the word is styled to be drawn in black as usual, but if unvisited, it is drawn in the same color as the background. Thus, victims see only words corresponding to sites they have visited. 

```html
<a href="facebook.com">dog</a> <!-- this is visible -->
<a href="instagram.com">cat</a> <!-- this is NOT visible -->
<!-- visibility is set with :visited by the attacker -->
```


The attacker must arrange for at least one word to be visible no matter what; otherwise, a victim who has visited none of the URLs the attacker is probing will see a blank CAPTCHA and think the site has malfunctioned.
- small number of links per session
- requires elevate interaction from the user

This task can be ==improved by combining special font (eg., LCD-like) and symbols to test the visitedness of up to 36 links per user input==: we can design a character that is made of many symbols and ask the user to type what he sees. Depending on the visited websites he will see a different character/symbol and will type the right one, giving the attacker the only correct information about his browsing history (e.g., `4 + 5 = 9`)

Similar interactive exploitation can take the form of a pattern matching puzzle, or a chessboard puzzle.
## Approach and results

We tested the feasibility of the attack on 307 participants
- Not all of the participants completed all of the tasks successfully, but we have usable data from at least 177 participants for each task
- some participants became so frustrated with the task that after a few trials they started hitting RETURN without attempting to type anything


---
#### References
- [[(Weinberg, Chen, et al., 2011)]]
