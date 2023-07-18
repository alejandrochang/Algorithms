// Stack Min: How would you design a stack which,\
// in addition to push and pop, has a function min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

// Methods: push, pop, min (return minimum element)

class MinStack {
  constructor() {
    this.data = [];
    this.min = [];
  }

  push(el) {
    if (!this.min.length || el < this.min[this.min.length - 1]) {
      this.min.push(el);
    }

    this.data.push(el)
  }

  pop() {
    const lastElement = this.data.pop();
    if (lastElement === this.min[this.min.length - 1]) {
      this.min.pop();
    }

    return lastElement;
  }

  minimum() {
    return this.min[this.min.length - 1];
  }
}

const s = new MinStack();

s.push(5);
s.push(10);
s.push(1);
s.push(122);

console.log('plop', s.minimum());


// have a minimum array - track all small elements
// reguar stack tracks normal 