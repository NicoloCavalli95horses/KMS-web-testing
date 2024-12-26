---
ID: 2024-12-04-13:56
tags:
  - definition
  - designPattern
---
## Definition

The memento pattern is a [[design pattern]] that ==exposes the private internal state of an object for restoring or backup purposes==

Examples:
- restore an object to its previous state (undo via rollback)
- versioning
- custom serialization

The memento pattern is implemented with three objects: the **originator**, a **caretaker** and a **memento**. 
- The originator is an object that has an internal state
- The caretaker is going to do something to the originator, but wants to be able to undo the change.
- The caretaker first asks the originator for a memento object. Then it does whatever operation (or sequence of operations) it was going to do. To roll back to the state before the operations, it returns the memento object to the originator. The memento object itself is an opaque object (one which the caretaker cannot, or should not, change).

When using this pattern, care should be taken if the originator may change other objects or resources, as the memento pattern operates on a single object.


```javascript

// The Memento pattern is used to save and restore the state of an object.
// A memento is a snapshot of an object's state.
const Memento = {// Namespace: Memento
    savedState : null, // The saved state of the object.

    save : function(state) { // Save the state of an object.
        this.savedState = state;
    },

    restore : function() { // Restore the state of an object.
        return this.savedState;
    }
};

// The Originator is the object that creates the memento.
// defines a method for saving the state inside a memento.
const Originator = {// Namespace: Originator
        state : null, // The state to be stored

        // Creates a new originator with an initial state of null
        createMemento : function() { 
            return {
                state : this.state // The state is copied to the memento.
            };
        },
        setMemento : function(memento) { // Sets the state of the originator from a memento
            this.state = memento.state;
        }
    };


// The Caretaker stores mementos of the objects and
// provides operations to retrieve them.
const Caretaker = {// Namespace: Caretaker
        mementos : [], // The mementos of the objects.
        addMemento : function(memento) { // Add a memento to the collection.
            this.mementos.push(memento);
        },
        getMemento : function(index) { // Get a memento from the collection.
            return this.mementos[index];
        }
    };

const action_step = "Foo"; // The action to be executed/the object state to be stored.
const action_step_2 = "Bar"; // The action to be executed/the object state to be stored.

// set the initial state
Originator.state = action_step;
Caretaker.addMemento(Originator.createMemento());// save the state to the history
console.log("Initial State: " + Originator.state); // Foo

// change the state
Originator.state = action_step_2;
Caretaker.addMemento(Originator.createMemento()); // save the state to the history
console.log("State After Change: " + Originator.state); // Bar

// restore the first state - undo
Originator.setMemento(Caretaker.getMemento(0));
console.log("State After Undo: " + Originator.state); // Foo

// restore the second state - redo
Originator.setMemento(Caretaker.getMemento(1));
console.log("State After Redo: " + Originator.state); // Bar

```
## References
https://en.wikipedia.org/wiki/Memento_pattern