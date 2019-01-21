const L = require("./LinkedList");
const List = L.LinkedList;
const Node = L.Node;

let l = new List();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);

// let l = new List();
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);


function cycle(l) {
  let slow = l.head;
  let fast = l.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

console.log(cycle(l)) // false