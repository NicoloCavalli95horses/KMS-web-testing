
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

When a function is stored as a property of an object, it is called *method*.
- In this scenario, *this* points to the local object

```JavaScript
const obj = {
  val: 0,
  text: 'test',
  increment: function (inc) {
    this.val += (typeof inc === 'number') ? inc : 1;
    return this.val;
  },
  // (!) note that we cannot access the local object in an arrow function 
  getText: () => {
    return this.text;
  }
};

const incr = obj.increment(2);
const txt = obj.getText();

console.log( incr ); // 2
console.log( txt ); // undefined
```

### Function invocation pattern

When a function is not a property of an object, it is invoked as a function:
- In this scenario, *this* points to the global object
- This was a mistake in the design of the language

```JavaScript
function add(a,b){
    console.log(this); // global object
    return a+b;
}

const sum = add(3,4);
```

As a consequence, an inner function inside a method has an unexpected output regarding the keyword *this*:

```JavaScript
const obj = {
  val: 0,
  increment: function (inc) {
    this.val += (typeof inc === 'number') ? inc : 1;
    return this.val;
  },
  decrement: function() {
    // the variable name 'that' is a common convention
    let that = this;
    // here 'this' and 'that' are the same {val: 2, increment: fn, decrement: fn}
      const helper = function () {
        // here, 'this' points to the global object
        // we can use 'that' to access the local 'this'
        console.log( that ); // {val: 2, increment: fn, decrement: fn}
      }
    helper()
  }
};

obj.decrement = function() {
// the decrement method could have been defined even as follows, with the same results
}

obj.decrement = () => {
// with an arrow function, the value of 'this' is an empty object at the first level and a global object inside the inner function
}
	
obj.decrement()
```

### Construct invocation pattern

If a function is invoked with the *new* prefix, a new object will be created with a hidden link to the function's prototype
- In this scenario, *this* points to the function's prototype object
- This pattern is not recommended

```JavaScript
// functions to be called with the 'new' prefix have a capitalized name by convention
const Quo = function (str) {
  this.state = str;
}

Quo.prototype.get_status = function () {
  return this.state;
}

const qui = new Quo('confused');
console.log( qui.get_status() ); // confused
```

### Apply invocation pattern