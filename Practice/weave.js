// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

class Queue {
  constructor() {
    this.data = [];
  }

  add(el) {
    this.data.push(el)
  }

  remove() {
    return this.data.shift();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const weave = (q1, q2) => {
  const q3 = new Queue;

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q3.add(q1.remove());
    }

    if (q2.peek()) {
      q3.add(q2.remove());
    }
  }

  return q3;
}

// [pseudo]
// check left queue, element? push into queue, check right queue, element? push into queue

// I: queue1, queue2
// O: queue3 -> new queue 

   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);
  
   const queueTwo = new Queue();
   queueTwo.add('Hi');
   queueTwo.add('There');

   const q = weave(queueOne, queueTwo);
   console.log(JSON.stringify(q, null, 4));

  //  {
  //   "data": [
  //       1,
  //       "Hi",
  //       2,
  //       "There"
  //   ]
  // }

  //  q.remove() // 1
  //  q.remove() // 'Hi'
  //  q.remove() // 2
  //  q.remove() // 'There'
