
| ID       | 2024-08-07-10:27 |
| -------- | ---------------- |
| **Tags** | #JavaScript      |

# Functions are objects

Functions are used for code reuse, information hiding, and composition.
Function are objects, and therefore presents a prototype chain, that ==may includes one or more *Function.prototipe* and that will end up in the same Object.prototype==. 

> Everything in JavaScript is included into a giant Object.prototype. If we add a property at this root level, both all the functions and all the new created objects will access this property.

```JavaScript
Object.prototype.newProperty = 'This is a new property';

const myObject = {};
function myFunction() {}

console.log(myObject.newProperty); // "This is a new property"
console.log(myFunction.newProperty); // "This is a new property
```

Note that since function are objects, we can access functions properties with the dot syntax

So what is the difference between an object and a function?
 - a function can be invoked
 - a function have parameters
 - in addition to the declared parameters, every function receives two additional parameter, ==arguments==, and ==this==

# Arguments

*Arguments* is a silent keyword that we can use to get an array of all the parameters, without specifying their name. This give us some flexibility but it is not very used

```JavaScript
function func1(a, b, c) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}

func1(1, 2, 3);
```

The rest operator '...' has a similar function, but it allows us to freeze some parameters while simultaneously allowing an indefinite number of parameters.

```JavaScript
function test(a, ...args) {
  console.log('the value of a:', a);
  console.log('the other values:', ...args);
}

test(10, 20, true, []);
```

# This

*This* is a special keyword in JavaScript, and its meaning changes depending on the function invocation pattern. There are 4 different invocation pattern:
1. method invocation
2. function invocation
3. constructor invocation
4. apply invocation

### Method invocation

When a function is stored as a property of an object, it is called method
- *this* points to the local object

```JavaScript
const obj = {
  val: 0,
  increment: function (inc) {
    this.val += (typeof inc === 'number') ? inc : 1;
    return this.val;
  }
};

const incr = obj.increment(2);
console.log( incr ); // 2

```

 
