const L = require('./LinkedList');
const List = L.LinkedList;
const Node = L.Node;

let l = new List;
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
l.insertLast(5);
l.insertLast(6);
l.insertLast(7);
l.insertLast(8);
l.insertLast(9);
l.insertLast(10);
// console.log('size', l.size());

function kToLast(list, k) {
  let slow = list.head;
  let fast = list.head;

  if (list.size < k) {
    return null;
  }
  
  while (k > 0) {
    fast = fast.next;
    k--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

console.log(kToLast(l, 3)); // 7
