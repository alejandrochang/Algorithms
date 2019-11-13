// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// Queus made from two stacks
// Stack: push, pop, peek

class Queue {
  constructor() {

  }

  add(el) {

  }

  remove() {

  }

  peek() {
    
  }
}

class Stack {
  constructor() {
    this.data = [];
  }

  push(el) {
    this.data.push(el);
  }

  pop() {
    const el = this.data.pop();

    return el;
  }

  peek() {
    const last = this.data[this.data.length - 1];
    console.log(last);
  }
}