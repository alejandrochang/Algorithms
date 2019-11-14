// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const L = require('./linkedlist');
// initialize LinkedList and Node
const LinkedList = L.LinkedList;
const Node = L.Node;

const fromLast = (list, i) => {
  let slow = list.head;
  let fast = list.head;

  while (i > 0) {
    fast = fast.next;
    i -= 1;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');

console.log(fromLast(list, 2).data); // 'b'

// I: linkedList
// O: Node
// Time: 
// Space: 

// [pseudo]

// 4 - 2 = 2, 2 + 2 = 4, decrease the next node, keep[ track of the previous
// one and see where it ends up relative to the end

// a, b, c, d, track a, got to c, increment by 1, get to b, d,
// b is 2 spaces from 2, 2 spaces from last