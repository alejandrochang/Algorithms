// Stack of Plates
// Imagine a literal stack of plates. If the stack gets too hight
// it might topple. We would likely start a new stack when the previous
// stack exceeds some threshold. Implement a data structure that mimics this. 

// methods: push, pop: limit 5 length

class platesStack {
  constructor() {
    this.data = [[]];
    this.currentStackIdx = 0;
    this.maxLength = 5;
  }

  push(data) {
    if (this.data[this.currentStackIdx].length === this.maxLength) {
      // push a new arr into stacks
      this.data.push([data]);
      this.currentStackIdx++;
      return;
    }

    this.data[this.currentStackIdx].push(data);
  }

  pop() {
    if (this.data[this.currentStackIdx].length === 0) {
      // remove last arr and subtract idx
      this.data.pop();
      this.currentStackIdx--;
    }

    let last = this.data[this.currentStackIdx].pop();
    return last;
  }
}

let pStack = new platesStack();
pStack.push(1);
pStack.push(2);
pStack.push(3);
pStack.push(4);
pStack.push(5);
// new stack
pStack.push(100);
pStack.pop();
pStack.pop(); // 5
console.log(JSON.stringify(pStack, null, 4));

