---
ID: 2025-01-28-16:08
tags:
  - "#definition"
  - softwareEngineering
---
## Definition

An Abstract Syntax Tree (AST) is a ==tree representation of the structure of source code==.

It breaks down the code into its *syntactic components*, showing the relationships between elements in a hierarchical format.
- The AST represents the code's structure *without including syntax details, like parentheses or semicolons.*

### What is it useful for?

- **Code Analysis**: Tools like linters (e.g., ESLint) analyze the AST to find potential issues in your code.
- **Code Transformation**: Tools like Babel or SWC transform modern JavaScript syntax into syntax supported by older browsers.
- **[[compiler]] Design:** Compilers parse code into an AST to generate machine code or intermediate representations.
- **Optimization**: Tools optimize the code by analyzing its structure (e.g., tree-shaking in Webpack).
- [[static analysis]]: Tools like TypeScript use ASTs to check types without executing the code

### Example in JS

```Javascript
const x = 5 + 3;
```

How an AST might look for this code:
- A **VariableDeclaration** for const x.
- An **AssignmentExpression** for the = operator
- A **BinaryExpression** for 5 + 3

The AST of that simple JS statement could be translated in the following JSON:

```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": { "type": "Identifier", "name": "x" },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": { "type": "Literal", "value": 5 },
            "right": { "type": "Literal", "value": 3 }
          }
        }
      ],
      "kind": "const"
    }
  ]
}
```

You can use a lib such as  `@babel/parser` to convert a string, representing JavaScript code, to an AST:

```JavaScript
const parser = require('@babel/parser');

// Parse JavaScript code into an AST
const code = 'const x = 5 + 3;';
const ast = parser.parse(code);

console.log(JSON.stringify(ast, null, 2));

```

---
## References
- https://en.wikipedia.org/wiki/Abstract_syntax_tree