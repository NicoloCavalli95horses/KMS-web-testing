---
ID: 2024-08-21-14:43
tags:
  - JavaScript
---
# Bracketless if statements

Even though 'if statements' can be bracketless, it is ==highly discouraged to omit the brackets==

```JavaScript
// 1) valid use case
if (a) execB();

// 2) error prone case
if (a)
  execB();
  execC();
```

In the second example it looks like execB() is followed by execC(), but the code is actually executed as follows:

```JavaScript
if (a) {
  b();
}
c();
```

# Semicolon insertion

JavaScript has a mechanism that tries to correct faulty programs by automatically inserting semicolons. This means that opening a curly bracket after a return will cause unexpected results if is done on a new line:

```JavaScript
// this returns undefined
const test = () => {
  return  // a semicolon is automatically inserted here
    {
      test: true
    };
}

// this returns { test: true }
const test2 = () => {
  return {
    test: true
  };
}
```