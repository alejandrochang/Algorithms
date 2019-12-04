// Three in One: Describe how you could use a single array to implement three stacks

// Accessing nexted arrays which would be the stacks inside an array gives you full
// control on those three stacks by index 0, 1, 2
// Ex.
// [ [stack1], [stack2], [stack3] ];
// do as you want with each stack with a single array


// methods pop, push, peek, isEmpty
// Stacks LIFO (Last In First Out)
class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    let item = this.data.pop();
    return item;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

let s = new Stack();
s.push(5);
s.push(15);
s.push(25);
s.push(35);
s.push(45);
s.pop();
// [5, 15, 25, 35]

// console.log(s.peek()); // 35
// console.log(s.isEmpty()); // false

// Queue is FIFO (First in First Out)
// methods: add, remove(first item), peek, isEmpty
class Queue {
  constructor() {
    this.data = [];
  }

  add(el) {
    this.data.unshift(el);
  }

  remove() {
    let item = this.data.pop();
    return item;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty(){
    return this.data.length === 0;
  }
}

let q = new Queue();
q.add(5);
q.add(15);
q.add(25);
q.add(35);
q.add(45);
q.remove(); // get rid of 5
console.log(q.isEmpty()); // false
console.log({ q }); // { q: Queue { data: [ 45, 35, 25, 15 ] } }

