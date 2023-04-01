// Three in One: Describe how you could use a single array to implement three stacks.

// Methods in stack:
/* 

push(): Adds a single or multiple items to the top of the Stack.
pop(): Removes and Returns the top item of the Stack.
peek(): Returns the top item of the Stack.
isEmpty(): Returns True if Stack is empty, False otherwise.
clear(): Removes all the items from the Stack.

*/

// Single Array to implement 3 stacks
// LIFO (LAST IN FIRST OUT)

class Stack {
  constructor() {
    this.data = [];
  }

  push(el) {
    this.data.push(el)
  }

  pop() {
    console.log(this.data);
    return this.data.shift()
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  clear() {
    this.data = [];
  }
}

const s = new Stack();
s.push(5);
s.push(10);
s.push(15);

// [5, 10, 15]

console.log(s.peek()); // 5
console.log(s.isEmpty()); // false
console.log(s.pop()); // 5
console.log(s.clear()); // undefined
