---
ID: 2025-04-16-10:58
tags:
  - "#definition"
  - prototypePollution
  - gadget
---
## Definition

A gadget, under the context of a JavaScript [[prototype pollution]] vulnerability is ==a code snippet containing a dataflow==, starting from an “undefined” property and flowing to a [[sink function]]. 
- this sink function could be leading to [[RCE (Remote Code Execution)]]  or a statement with control- or data-flow dependency on another gadget

### Example

```js
// This is a gadget, a vulnerable code snippet
function executeUserCode(config) {
  const func = config.handler;
  func();  // <- sink function
}
```

The method `handler`, if previously undefined, can be inherited from the prototype. If the attacker manage to send a JSON file as input, like in the following example, he has full control of the code

```json
{
  "__proto__": {
    "handler": ` ... malicious function here ...`
  }
}
```

Notes:
- the gadget always starts from an `undefined` property (e.g., `config.handler`)
- such undefined property could be either a ==direct lookup== (`config.handler`) or a ==looped lookup== (e.g., `for prop in obj`)
- in a direct lookup, the `undefined` property can be used in an `if` statement or in an assignment (e.g., `obj.prop || ''`)
- gadgets end with a sink, that could be a function invocation, such as`func()`, or a statement *related to another gadget*
- in the latter case, we can state that we are dealing with ==chained gadgets==

#### Direct gadgets
The prototype pollution flows directly to a sink via the gadget

#### Indirect/chained gadgets
More complicated gadgets that involve multiple undefined properties that are chained together. For example, a first gadget alters the control or data-flow of another gadget which then flows to the sink

**Vertically-chained (Self-chained) Gadgets**
These gadgets have nested payload structure, which *triggers the same gadget multiple times with different inputs*

```js
function walkAST( ast , before, after, options) {
  switch ( ast.type ) {
    ... 
    case 'Code': 
      if ( ast.block ) {
        ast.block = walkAST(ast.block, before, after, options)
      }
      break;
    case 'Comment':
      break;
  }
}
```

**Horizontally-chained gadgets**
These gadgets have parallel payload structure, which triggers different gadgets with different input. In the example, the method `prototype` takes other two possible methods, which can be compromised by polluting the same `prototype` object

```js
const sqrl = require('squirrelly')
const path = require('path')

Object.prototype.n = "each’)\nprocess.mainModule. require(’child_process’).execSync(’sleep 10’);\n//" 

Object.prototype.settings = {
  'view options': { ... };
}
```

**Control-flow Dependent Gadgets**
When we say two gadgets have a control-flow dependency, one gadget affects the control-flow of the target program, thus leading to the second gadget.

**Data-flow Dependent Gadgets**
When we say two gadgets have a data-flow dependency, one gadget affects the data-flow of the target program and subsequently the second gadget.

---
#### References
- [[(Liu, An, et al., 2024)]]