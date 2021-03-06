// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// A queue pushes to the end, and removes from the font
// or removes from the front and pushes on the end

class Queue {
  constructor() {
    this.data = [];
  }

  add(el) {
    // this.data.unshift(el)
    this.data.push(el);
  }

  remove(){
    // const removedElement = this.data.unshift();
    const removedElement = this.data.shift();
    return removedElement;
  }
}

// [pseudo]
// add - O(1) - constant pushing into array
// removeing - O(1) - popping from array


const queue = new Queue;

// adding to queue
queue.add(2);
queue.add(5);
queue.add(222);
queue.add(67);
queue.add(9);

// removing from queue
queue.remove();
queue.remove();

console.log({ queue });
// Expected: [ 222, 67, 9 ]