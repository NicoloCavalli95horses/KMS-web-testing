---
ID: 2024-12-04-14:27
tags:
  - definition
  - designPattern
  - model
---
## Definition

A Finite State Machine is a model of computation, based on a hypothetical machine made of one or more states.
- only one single state of this machine can be active at the same time
- the machine has to transition from one state to another in to perform different actions

A Finite State Machine is any device storing the state of something at a given time.
The state will ==change based on inputs==, providing the resulting output for the implemented changes.

A FSM is characterized as follows:
- We have a fixed set of states that the machine can be in
- The machine can only be in one state at a time
- A sequence of inputs is sent to the machine
- Every state has a set of transitions and every transition is associated with an input and pointing to a state

```javascript

const machine = {
    state: 'OFF',
    transitions: {
        OFF: {
            press() {
                this.state = 'ON'
            }
        },
        ON: {
            press() {
                this.state = 'BLINK';
            },
        },
        BLINK: {
            press() {
                this.state = 'OFF';
            },
        },
    },
    dispatch(actionName) {
        const action = this.transitions[this.state][actionName];

        if (action) {
            action.call(this);
        } else {
            console.log('invalid action');
        }
    },
};

const flashlight = Object.create(machine);

console.log(flashlight.state); // OFF
flashlight.dispatch('press'); 
console.log(flashlight.state); // ON
flashlight.dispatch('press');
console.log(flashlight.state); // BLINK

```
## References

https://medium.com/@mlbors/what-is-a-finite-state-machine-6d8dec727e2c
https://dev.to/spukas/finite-state-machine-in-javascript-1ki1