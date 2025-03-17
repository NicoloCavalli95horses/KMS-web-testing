---
ID: 2025-03-17-11:24
tags:
  - "#definition"
  - unsupervisedLearning
---
## Definition

Co-clustering is an unsupervised learning technique that simultaneously groups both elements (rows) and features (columns) of a data matrix.

Imagine having a ==table where each row represents a document and each column represents a word==. Each cell in the table indicates *how many times* that word appears in the corresponding document.

Traditionally, clustering groups only one dimension:
- Document clustering → we group similar documents together
- Word clustering → we group words that often appear together

Co-clustering, on the other hand, simultaneously groups both documents and words, finding associations between groups of documents and groups of words.

## Example

| -       | Action | Shot | Explosion | Romantic | Love |
| ------- | ------ | ---- | --------- | -------- | ---- |
| Movie 1 | 5      | 5    | 4         | 0        | 0    |
| Movie 2 | 6      | 4    | 5         | 0        | 1    |
| Movie 3 | 0      | 0    | 1         | 4        | 5    |
| Movie 4 | 1      | 0    | 1         | 6        | 6    |
Co-clustering helps us detecting:
- A group of action reviews (Review 1 and 2), related to the words Action, Shooting, Explosion
- A group of romantic reviews (Review 3 and 4), related to the words Romantic, Love, Sweet

In practice, co-clustering helps us understand which groups of documents share relevant groups of words. This can be useful in many applications, such as ==content filtering or text data analysis.==

---
#### References
- Used by [[(Ben Jaballah, Kheir, et al., 2016)]] to predict user interaction