| ID       | 2024-08-03-15:01 |
| -------- | ---------------- |
| **Tags** | #tag             |
## Whitespace

JavaScript offers two forms of comments:

```JavaScript
// one line comment
/* multiple line comment */
```

The multiple line comment syntax, often used to document exported functions, is actually error prone, because [[RegEx (Regular Expression)]] symbols may be interpreted as closing comments, throwing a syntax error

```JavaScript
/* this is a commented RegEx /a*/.match(s) */
```

## Names

Reserved words cannot be used to declare a new variable (abstract, boolean, case, catch, delete, default, etc...). There are some key words that, who knows why, should have been reserved but were not.

```JavaScript
// Valid JavaScript (!)
const undefined = true;
const NaN = 'test';
const Infinity = [1, 2, 3];
const obj = {
  undefined: true,
}
```

## Numbers

