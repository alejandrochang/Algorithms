// Sort Stack:
// Write a program to sort a stack such that smallest items are on the top
// and largest are at bottom. You can use a temp stack but may not copy elements
// into another structure such as an array. The stack supports these operations:
// push, pop, peek, isEmpty

class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const sortStack = (input) => {
  let tempStack = new Stack();

  while (!input.isEmpty()) {
    let temp = input.pop();
    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      input.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}

let s1 = new Stack();
s1.push(5);
s1.push(75);
s1.push(56);
s1.push(115);
s1.push(2);
console.log(sortStack(s1));