

// push, pop, 

class Stack {
  constructor() {
    this.data = [];
  }

  push(el) {
    this.data.push(el)
  }

  pop() {
    return this.data.pop();
  }
}

let stack = new Stack;
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop(); // take away 50 

console.log(stack); // Stack { data: [ 10, 20, 30, 40 ] }
