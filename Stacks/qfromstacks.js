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

class myStack {
  constructor() {
    this.data = [];
  }

  push(el) {
    this.data.push(el);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = new myStack;
    this.second = new myStack;
  }

  add(el) {
    this.first.push(el);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let result = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return result;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let result = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return result;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());  // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2