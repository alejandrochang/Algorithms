// Create a stack that gives you the result of the minimum number in the Stack
// Do it O(1) - constant time 

class myStack {
  constructor() {
    this.data = []; // [4, 2, 6, 1, 1]
    this.min = []; // [4, 2, 1, 1]
  }

  push(el) {
    this.data.push(el);
    if (!this.min.length) {
      this.min.push(el);
    } else if (el <= this.min[this.min.length - 1]) {
      this.min.push(el);
    }
  }

  pop() {
    let last = this.data.pop();
    if (last === this.minimum()) {
      this.min.pop();
    }

    return last;
  }

  minimum() {
    return this.min[this.min.length - 1];
  }

  all() {
    return this.min;
  }
}

const first = new myStack;
first.push(4);
first.push(2);
first.push(1);
first.push(6);
first.push(1);

first.pop(); 

console.log(first.minimum()); // 1
console.log(first.all()) // this.min = [ 4, 2, 1 ]


//pseudo code
// first create an array to store every less number you encounter
// if number is less than last number add to stack
// if you pop and the number is the least number pop that number as well
// return last number of min array