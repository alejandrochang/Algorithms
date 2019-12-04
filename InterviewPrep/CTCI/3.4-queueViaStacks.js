// Implement a MyQUeue class which implements a queue using two stacks
// push(), pop(), peek(), isEmpty()

class myStack {
  constructor() {
    this.data = [];
  }

  push(data) {
    this.data.push(data);
  }

  pop(){
    let last = this.data.pop();
    return last;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class MyQueue {
  constructor() {
    this.first = new myStack();
    this.second = new myStack();
  }

  add(el) {
    this.first.push(el);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let last = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return last;
  }

  peek(){
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let last = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return last;
    // return this.first.data[0];
  }
}

let q = new MyQueue();
q.add(5);
q.add(10);
q.add(20);
console.log(q.peek()); // [5, 10, 20]







// Implementing a queue via stacks
