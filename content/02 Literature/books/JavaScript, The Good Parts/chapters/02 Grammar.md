---
ID: 2024-08-03-15:01
tags:
  - JavaScript
---
# Whitespace

JavaScript offers two forms of comments:

```JavaScript
// one line comment
/* multiple line comment */
```

The multiple line comment syntax, often used to document exported functions, is actually error prone, because [[RegEx (Regular Expression)]] symbols may be interpreted as closing comments, throwing a syntax error

```JavaScript
/* this is a commented RegEx /a*/.match(s) */
```

# Names

Reserved words cannot be used to declare a new variable (abstract, boolean, case, catch, delete, default, etc...). There are some key words that, who knows why, should have been reserved but were not.

```JavaScript
// Valid JavaScript (!)
const undefined = true;
const NaN = 'test';
const Infinity = [1, 2, 3];
const obj = { undefined: true };
```

# Numbers

### No integer type

Numbers in JavaScript are represented by a 64-bit floating point (same as Java's double). There is no separate integer type, so 1 and 1.0 are the same value
This actually prevents a whole class of numeric type errors
### Big numbers

If a number literal has an exponent part, the value of the literal is computed as follows:
- the number at the left of e is multiplied by 10
- the number at the right of e, is the power

``` JavaScript
100 == 1e2 // true
```

### Infinity

```JavaScript
Infinity >= 1.797693134962131570e+308 // true
```

# Strings

JavaScript does not have a character type. To represent a single character create a variable with a single value or use \u to specify character code points numerically:

```JavaScript
'A' === '\u0041' // true
```

# Statements

A compilation unit contains a set of executable statements. In web browsers, each \<script> tag delivers a compilation unit that is compiled and immediately executed. The final namespace is common and global

```HTML

<script>
  const a = true;
</script>

<script>
  console.log(a) // true
</script>
```

### Labeled statements

The *switch, while, for* and *do* statements support an optional **label** prefix that interacts with the *break* statement. The label allows us to identify a specific statement and can be useful when a lot of nested loops are required

```JavaScript
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 3) {
            break; // quit the internal loop
        }
        console.log(`i = ${i}, j = ${j}`); // i = 4, j = 4
    }
}

outerLoop: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 3) {
            break outerLoop; // quit both the loops
        }
        console.log(`i = ${i}, j = ${j}`); // i = 2, j = 2
    }
}
```

Using a labeled statements:
- give more control over the execution
- makes the code more explicit and readable
- prevent the use of boolean flag variables

### For in loops

The for in loop enumerates the property names (keys) of an object. This loop may be dangerous because when explicitly iterating over an object to find a key, the whole prototype chain is considered. It is then necessary to explicit check the presence of the key in that particular object:

```JavaScript
const name = 'nick';

for (nick in obj) {
  if (obj.hasOwnProperty(name)) {
    ...
  }
}
```

### Operator precedence

| Operator                | Description                         |
| ----------------------- | ----------------------------------- |
| . [] ()                 | Refinement and invocation           |
| delete new typeof + - ! | Unary operators                     |
| * / %                   | Multiplication, division, module    |
| + -                     | Addition/concatenation, subtraction |
| \>= <= > <              | Inequality                          |
| \== \=== \!==           | Equality                            |
| &&                      | Logical and                         |
| \|\|                    | Logical or                          |
| ?:                      | Ternary operator                    |
