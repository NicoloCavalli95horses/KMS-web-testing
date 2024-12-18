| ID       | 2024-12-18-14:04 |
| -------- | ---------------- |
| **Tags** | #definition      |
## Definition

A word n-gram language model is a purely statistical model of language.
It has been superseded by [[RNN (recurrent neural network)]] –based models, which have been superseded by [[LLM (large language model)]].

It is based on an assumption that ==the probability of the next word in a sequence depends only on a fixed size window of previous words.==
- If only one previous word is considered, it is called a bigram model; if two words, a trigram model; if *n − 1* words, an n-gram model.

Special tokens are introduced to denote the start and end of a sentence *⟨s⟩* and *⟨/s⟩*

LM is a simple and intuitive approach that can be used to predict the next node in a sequence. The model:
- has limited memory, ignoring words that are out the *n - 1* window
- is subject to combinatoric computations, because large combinations of words have to be memorized  as the value of  *n* increases 
- is trained on a body of text, calculating the probability associated to every n-gram

### Application

- text auto-completion
- text correction
- automatic translation
- natural language synthesis

### Example with a bigram (n=2)

Let's suppose we have this body of text:

> The cat sleeps on the floor. The dog play with the cat

The first step is to tokenize the input

[ "The", "cat", "sleeps", "on", "the", "floor", ".", "The", "dog", ]

## References
https://en.wikipedia.org/wiki/Word_n-gram_language_model