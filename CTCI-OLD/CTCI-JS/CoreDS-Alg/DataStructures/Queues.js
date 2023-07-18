
// first in first out (FIFO);

class Queue {
  constructor() {
    this.data = [];
  }

  add(el) {
    this.data.unshift(el);
  }

  remove() {
    return this.data.pop()
  }
}

let q = new Queue;
q.add(10);
q.add(20);
q.add(30);
q.add(40);
q.add(50);
q.remove();

console.log(q); // Queue { data: [ 50, 40, 30, 20 ] }
// 10 was first in, first out
