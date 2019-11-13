// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


// add front, remove end
class Queue {
  constructor() {
    this.data = [];
  }

  add(el) {
    // add to end
    this.data.push(el);
  }

  remove() {
    // Remove from front, O(n)
    return this.data.shift();
  }
}


// methods: add, remove, peek
// Time Complexity: O(1) - constant for all methods

// Queue: Data Structure can either add in front and remove from end, or add to end and remove from front

class Queue2 {
  constructor() {
    this.data = [];
  }

  add(el) {
    // add to front, O(n)
    this.data.unshift(el);
  }

  remove() {
    // remove from end
    return this.data.pop();
  }
}

const queue = new Queue;
const queue2 = new Queue2;


queue.add(1)
queue2.add(1)
queue.add(10)
queue2.add(10)
// queue.add(1000)
// queue2.add(1000)

queue.remove();
queue2.remove();

queue.add(100)
queue2.add(100)

console.log(JSON.stringify(queue, null, 4));
console.log(JSON.stringify(queue2, null, 4));

// Solution:
// {
//     "data": [10, 100]
// }
// {
//     "data": [ 100, 10]
// }