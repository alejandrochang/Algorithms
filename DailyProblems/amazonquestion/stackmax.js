// Implement a stack that has the following methods:

// push(val), which pushes an element onto the stack

// pop(), which pops off and returns the topmost element of the stack. 
// If there are no elements in the stack, then it should throw an error or return null.

// max(), which returns the maximum value in the stack currently. 
// If there are no elements in the stack, then it should throw an error or return null.

//Each method should run in constant time.

class stackMax {
  constructor() {
    this.data = [];
    this.max = [];
  }

  push(el) {
    this.data.push(el);
    if (this.max.length) {
      if (this.max[this.max.length - 1] < el) {
        this.max.push(el);
      }
    } else {
      this.max.push(el);
    }
  }

  pop() {
    if (!this.data.length) {
      return null;
    }
    let last = this.data.pop();
    if (last === this.max[this.max.length - 1]) {
      this.max.pop();
    }

    return last;
  }

  greatest() {
    return this.max[this.max.length - 1];
  }
}

const s = new stackMax;
s.push(25);
s.push(4);
s.push(120);
s.push(1);
s.push(30);

s.pop();
s.pop();
s.pop();

console.log('max', s.greatest()); // 25, after popping gretest
console.log(s);