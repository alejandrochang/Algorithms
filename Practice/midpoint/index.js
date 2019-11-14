// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // while therese a next, and a next.next on linkedList increment
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// slow should lag half of the input

const l = new LinkedList();
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')
console.log(midpoint(l)); // returns { data: 'b' }

// let slow = list.head; // list.getFirst()
// let fast = list.head; // list.getFirst()

// while (fast.next && fast.next.next) {
//   slow = slow.next;
//   fast = fast.next.next;
// }

// return slow;


// get first from linkedList, iterate through and see whats next