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
- is subject to combinatoric computations, because large combinations of words have to be memorized as the value of *n* decreases 
- is trained on a body of text, calculating the probability associated to every n-gram
### Application

- text auto-completion
- text correction
- automatic translation
- natural language synthesis
- sequence prediction in general - see [[ESG (event sequence graph)]]
### Example with a bigram (n=2)

**(1) Consider the following body of text:**

> The cat sleeps on the floor. The dog play with the cat

**(2) The first step is to tokenize the input**

"The", "cat", "sleeps", "on", "the", "floor", ".", "The", "dog", "play", "with", "the", "cat"

**(3) The input can be sanitized or filtered, for example by removing the "." and by lowercasing all the tokens.**

"the", "cat", "sleeps", "on", "the", "floor", "the", "dog", "play", "with", "the", "cat"

**(4) A bigram is created (n=2), considering all the possible ==consecutive couples==**

("the", "cat"), ("cat", "sleeps"), ("sleeps", "on") ...

**(5) The number of occurrences is counted**

("the", "cat"): 2
("cat", "sleeps"): 1
("sleeps", "on"): 1
...

**(6) The probability of a token is calculated as follows:**

$$P\left(w_1\left|w_2\right.\right)=\frac{count\left(n\right)}{count\left(n-1)\right)}$$
Therefore:

$$P\left(w_1\left|w_2\right.\right)=\frac{count\left('the', 'cat'\right)}{count\left('the'\right)} = 0.66 $$

The occurrences of the token ("the", "cat") is 2
The occurrences of the token ("the"), ignoring the surrounding words, (e.g., the total number that the article "the" appears): is 3
So 2/3 = 0.66,

**(7) The model can be used to predict the next token.** 
For example, given the word "the", we can predict with a probability of 66% that the next world will be "cat".

### Low n-gram vs. high n-gram

The number of n-gram to be considered is arbitrary and based on the available resources and the goals to be reached. In general:
- the lower the n-gram, the higher the number of couples. The result is more accurate but the context awareness is very low 
- the higher the n-gram, the lower the number of couples. The result is less accurate but depends on the training set. The context awareness is higher

```Python

from collections import Counter, defaultdict

def train_ngram(corpus, n=2):
    tokens = corpus.split()
    ngrams = [tuple(tokens[i:i+n]) for i in range(len(tokens)-n+1)]
    counts = Counter(ngrams)
    context_counts = Counter([ngram[:-1] for ngram in ngrams])
    
    model = defaultdict(lambda: defaultdict(float))
    for ngram, count in counts.items():
        context = ngram[:-1]
        next_word = ngram[-1]
        model[context][next_word] = count / context_counts[context]
    return model

corpus = "The cat sleeps on the floor. The dog play with the cat"
bigram_model = train_ngram(corpus, n=2)

context = ("the",)
print(dict(bigram_model[context])) # { "cat": 0.666, "dog": 0.333 }

```

### Model smoothness

N-gram models accuracy depend on the training set as well as the resources available. When the dataset does not include all the n-gram possible combinations, the probability associated to certain sequences is zero, even if those sequences are, in fact, possible. To mitigate this problem, several techniques have been proposed:
- ==**back-off**:== the context size is reduced when a n-gram is not available in the dataset. So, if the initial configuration was n = 3 (trigram), a step back is taken, and a n = 2 (bigram) is considered too. This will increment the probability to find the word in the token set, and to assign a probability higher than zero
- ==**interpolation**==: different probabilities of different n-grams are combined together to tune the final probability


## References
https://en.wikipedia.org/wiki/Word_n-gram_language_model