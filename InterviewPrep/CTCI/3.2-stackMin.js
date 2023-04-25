// Stack Min:
// How would you design a stack which in addition to push and pop, has 
// a function min which returns the minimum element.
// Methods: push, pop, min, should all operate in O(1) time


class minStack {
  constructor() {
    this.data = [];
    this.minimum = [];
  }

  push(data) {
    if (!this.minimum.length || data < this.minimum[this.minimum.length - 1]) {
      this.minimum.push(data);
    }

    this.data.push(data);
  }

  pop() {
    let last = this.data.pop();
    if (last === this.minimum[this.minimum.length - 1]) {
      this.minimum.pop();
    }

    return last;
  }

  min(){
    return this.minimum[this.minimum.length - 1];
  }
}

// [5, 10, 2]
// min: [5, 2]

let s = new minStack();
s.push(5);
s.push(10);
s.push(30);
s.push(2);
s.push(60);
s.push(120);
console.log(s.min());  // 5


// we cant just have a counter, because as we remove we need to know what elements are smaller
// [5]


// [pseudo]
// data = [];
// counter variable of min
// push, pop methods
// min: 