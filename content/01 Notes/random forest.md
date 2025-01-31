---
ID: 2025-01-31-10:52
tags:
  - "#definition"
  - machineLearning
  - classifier
---
## Definition

Random forests is an ensemble [[machine learning]] method for ==classification, regression and other tasks, that works by creating a multitude of decision trees during training.==
- For classification tasks, the output of the random forest is the class selected by most trees
- For regression tasks, the output is the average of the predictions of the trees

Random forests correct for decision trees'a habit of [[overfitting]] to their training set.

A variant of this techniques, used for imbalanced dataset is [[BRF (Balance Random Forest)]]

## Example

Consider a dataset with 100 transactions, of which:
- 80 non-fraudulent transactions
- 20 fraudulent transactions

The goal is to build a Random Forest model to ==classify new transactions as fraudulent or non-fraudulent.==

Each transaction has some features that we can use to the analysis:

| ID  | Value   | Time  | Country | Attempts number | Is fraudolent |
| --- | ------- | ----- | ------- | --------------- | ------------- |
| 1   | 12.00€  | 10:01 | ITA     | 1               | NO            |
| 2   | 200.00€ | 05:55 | USA     | 2               | NO            |
| 3   | 3932.2€ | 14:12 | UK      | 3               | YES           |
| ... | ...     | ...   | ...     | ...             | ...           |
| 100 | 65.50€  | 16:40 | GER     | 2               | NO            |

In the example, the features are: value, time, country, attempts number

**Subset extraction**
From the original dataset, several subsets are extract (usually using bootstrapping, which involves randomly drawing with repetition).
- Each subset contains a random sample of the data, some of which may be repeated, while others may not be included.

**Decision tree training**
On each of these subsets, ==the algorithm trains a decision tree== (typically using a splitting algorithm like [[CART (classification and regression test)]]).
- Each tree is trained to make predictions (e.g., distinguishing fraudulent from legitimate transactions) based on the characteristics of the data it is fed.

Each tree may have a different structure. This could be an example of decision tree, that is the output of the algorithm:

```txt
          value > 2000€?
         /               \
      Yes                 No
     /                    \
   Attempts > 2?        Time > 18?
   /         \           /        \
Fraud     Non-Fraud   Fraud   Non-Fraud
```

**Majority predictions**
==Once all the trees are trained, each tree makes its own classification for a new transaction (fraudulent or legitimate). The final Random Forest classification is determined by the majority of the trees' classifications== 

## References
https://en.wikipedia.org/wiki/Random_forest