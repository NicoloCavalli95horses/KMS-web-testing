
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

// Example 1: predefined number of arguments
function func1(a, b, c) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}

func1(1, 2, 3);

// Example 2: undefined number of arguments
function sum() {
  let out = 0;
  for (let i=0; i<arguments.length; i++) {
    out += arguments[i];
  }
  return out;
}

const ret = sum(1, 2, 3);
console.log( ret ); // 6
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

The *apply()* method lets us to:
- choose the object to which *this* points (first parameter)
- construct an array of arguments to use to invoke the function (second parameter)

```JavaScript
function sum(a,b,c) {
  console.log(this); // {test: true}
  return a + b + c;
}

const arr = [1, 2, 3];
const out = sum.apply({test: true}, arr);
console.log(out); // 6

```

# Return

A function always return a value.
- If the return value is not specified, then undefined is returned
- If the function is invoked with the *new* prefix, and the return value is not an object, then the new object (local *this*) is returned

# Exceptions 

Exceptions are used to prevent error and to define custom responses in error scenarios. With the *throw* statement the function is interrupted. 
- the keys name and message are not mandatory but conventional

```JavaScript
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    }
  }
  return a + b;
}

add('four', 'two'); // { name: 'TypeError', message: 'add needs numbers' }
```

The exception object will be delivered to the catch clause of a try statement

```JavaScript
try {
  add('four', 'two');
} catch (e) {
  console.log(e); // { name: 'TypeError', message: 'add needs numbers' }
}
```

Note that a *catch* statement will catch all exceptions - if you have more than one error, inspect the name or the id of the exception object.

# Augmenting types

We can make a method available to all functions by augmenting the Function.prototype. This practice may have limited advantages in few scenarios but it is typically discouraged

This example create a new method called 'method', that allow to recall the prototype object without typing .prototype:

```JavaScript
// The method 'method' is now globally available
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
}
```

Adding global methods directly on the prototype is generally discouraged because of:
- polluting of the global scope
- possibility of names collision, especially while using libraries or plugins
- negative impact on performance (with lots of global methods available everywhere)
- less predictability and maintainability of the code
- compatibility problems with different version of JavaScript

A better solution simply relies on importing and exporting utilities functions

# Recursion

```JavaScript
function factorial(n, incr = 1) {
  return n < 2 ? incr : factorial(n - 1, incr*n );
}

const out = factorial(5);
console.log( out ); // 120

/* 
factorial(5, undefined) {
  ⏎ factorial(4, 5);
    ⏎ factorial(3, 5*4)
	  ⏎ factorial(2, 20*3);
        ⏎ factorial(1, 60*2);
	      ⏎ 120;
}
*/
```

JavaScript does not have native tail recursion optimization. If a function returns the result of invoking itself recursively, the invocation is not replaced with a loop. ==Valid functions that recurse very deeply may fail by exhausting the return stack==

# Scope

The scope controls the visibility and lifetimes of variables and parameters. It is best to declare all of the variables used in a function, at the top of the function body.

# Closure

A closure is created ==when a nested (inner) function "remembers" the scope in which it was defined, even after the outer scope has finished executing==. In other words, a closure is a function that has access to the variables of its external lexical scope even after the external scope has ended.

```JavaScript
function incr() {
  let tot = 0;
  return function() {
    tot +=1;
    return tot;
  }
}

const counter = incr(); // a function is assigned to counter
console.log( counter() ); // 1
console.log( counter() ); // 2 the previous tot value is saved
console.log( counter() ); // 3 the previous tot value is saved

```

# Callbacks

JavaScript is single threaded but support asynchronous programming and [[web workers]], that allow it to perform parallel computations.

# Module

The module pattern refers to the possibility of creating an independent piece of code that exposes public variables and methods, maintaining its private variables for itself
- This pattern exploit the *closure* principle to create a private space that is not accessible unless it is explicitly exposed

The following example makes use of an [[IIFE (immediately invoked function expression)]]
```JavaScript
const myModule = (function () {
  // private variables
  const privateVariable = "I am private";
    
  function privateFunction() {
    console.log(privateVariable);
  }

  // Public functions and variables (exposed)
  return {
    publicMethod: function () {
      privateFunction();
    }
  };
})();

myModule.publicMethod();  // "I am private"
console.log(myModule.privateVariable);  // undefined

```

Advantages:
- *encapsulation*: implementation details and complexity is hidden
- clear *differentiation* between private state and public state
- *name space management*: an isolation of private variables and methods prevents name collisions reducing the global namespace pollution

Disadvantages:
- a private state is complex to debug and to test
- difficult to integrate with other external dependencies or functions
- ES6 offers a better solution with the import/export syntax, allowing a simpler management of isolated modules

# Cascade (or method chaining)

If a method of an object return *this*, we can enable cascades of functions. Cascades can produce interfaces that are very expressive.
- this pattern can help control the tendency to make interfaces that try to do too much at once and promotes separation of concerns
- it also makes extremely clear the order of execution

```JavaScript
const snake = {
 moveHead: function () {
    console.log('moving head');
    return this;
 },
 moveBody: function() {
     console.log('moving body');
     return this;
 },
 moveTail: function() {
     console.log('shaking the tail');
     return this;
 }
}
    
snake
  .moveHead()  // 'moving head'
  .moveBody()  // 'moving body'
  .moveTail(); // 'shaking the tail'
```

# Curry

**Currying** is a functional programming technique that involves splitting a function that takes multiple arguments into a series of functions that take one argument each.
- This allows you to apply arguments to a function incrementally, and can lead to more modular and reusable code.

```JavaScript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log( double(5) );   // 10

```

# Memoization

Memoization is an optimization technique used to optimize the performance of a function that has to be called several time. It is basically a cache technique that exploits the *closure* principle.

With memoization, results are cached and immediately returned, preventing unnecessary computations.

The memoized version is better even with a single call, because

```JavaScript
function testPerformance( func, ...args ) {
  const iterations = 5000;
  let totalTime = 0;

  for (let i = 0; i < iterations; i++) {
    const t0 = performance.now();
    func( ...args );
    const t1 = performance.now();
    totalTime += t1 - t0;
  }

  // return an average for more precision
  return totalTime / iterations;
}


function factorial(n) {
  if (n == 0 || n == 1 ) return 1;
  return n *factorial( n - 1 );
}


function memoizedFactorial() {
  const cache = {}; // persistent cache
  
  return function _factorial(n) {
    if (n in cache) {
      return cache[n];
    }        
    if (n == 0 || n == 1 ) {
      cache[n] = 1;
      return 1;
    }
      
    const res = n * _factorial(n - 1);
    cache[n] = res;
    return res;
  };
}

const num = 2000;
const t1 = testPerformance(factorial, num);
const t2 = testPerformance(factorial, num);
const t3 = testPerformance(factorial, num);
const avg = (t1+t2+t3)/3
console.log( 'avg time: ', avg );

const t4 = testPerformance(memoizedFactorial, num);
const t5 = testPerformance(memoizedFactorial, num);
const t6 = testPerformance(memoizedFactorial, num);
const avgMemo = (t4+t5+t6)/3;
console.log( 'avg time memoization: ', avgMemo );
```