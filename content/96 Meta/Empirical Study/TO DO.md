### Implement testing infrastructure in Jest

- [ ] Test for false positives and false negatives
- [ ] Test domains that gives different results if Puppeteer is used and manually check with regular browser use

### Manual validation on random sample

After the test is done, conduct a randomized manual validation. 
Considering 
$$1−𝛼 = 95\%$$
And applying N = 250.000:

$$n = \frac{n_0}{1 + \frac{n_0 -1}{N}}$$
We need to test 384 domains to be 95% sure that the results are correct