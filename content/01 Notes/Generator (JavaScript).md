---
ID: 2026-02-27-11:30
tags:
  - "#definition"
  - JavaScript
  - programmingLanguage
---
## Definition

A generator is a function that:
- can stop mid-execution
- can resume where it left off
- produces values ​​one at a time
- It is defined with `function*`

**Example**

```javascript
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numbers();

console.log(gen.next()); 
// { value: 1, done: false }

console.log(gen.next()); 
// { value: 2, done: false }

console.log(gen.next()); 
// { value: 3, done: false }

console.log(gen.next()); 
// { value: undefined, done: true }
```

What happen here?
- every `yield` : returns a value, stops the execution and saves the internal state. What is actually returned is an object that wraps the actual value providing information about the current state `done: [boolean]`

A generator is a =="stoppable" function== that is extremely helpful when we have to iterate through large objects, list of data, or generate next values based on our custom logic.

### Use cases

**Generating sequences**
Generating ==infinite sequences or counters== without creating large arrays. In this case we'll have a `while(true)`, meaning that the counter can potentially go on forever.

```js
function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const c = counter();
console.log(c.next().value); // 0
console.log(c.next().value); // 1
console.log(c.next().value); // 2
```

This is particularly handy given that we have never defined the "next" value, it is created "on the fly" when is needed.


**Reading files**
Instead of giving back the whole file, we can use a generator to process one line at the time:

```javascript
function* readLines(text) {
  const lines = text.split("\n");
  for (const line of lines) {
    yield line;
  }
}
```
### Modern usage

Generators are iterable. The following code implicitly calls `.next()` at every iteration:

```javascript
for (const c of counter()) {
  console.log(c);
}
```

We can of course deal with `async` operations:

```javascript
async function* delayedNumbers() {
  yield 1;

  await new Promise(r => setTimeout(r, 1000));
  yield 2;

  await new Promise(r => setTimeout(r, 1000));
  yield 3;
}
```

---
#### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator