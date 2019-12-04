// Given two singly linked list, determine if the two list intersect
// Return the intersecting node. Note that this intersection is defined
// based on reference, not value. That is if the kth node of the first
// linked list is the exact same node (By reference) as the jth node
// of the second linked list then they are intersecting

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

let l1 = new LinkedList();
l1.insertFirst('e');
l1.insertFirst('d');
l1.insertFirst('c');
l1.insertFirst('b');
l1.insertFirst('a');
// a -> b -> c -> d -> e

let l2 = new LinkedList();
l2.insertFirst(5);
l2.insertFirst(7);
l2.insertFirst('c');
l2.insertFirst(1);
l2.insertFirst(9);
// 5 -> 7 -> c -> 1 -> 9

const intersection = (l1, l2) => {
  let node1 = l1.head;
  let node2 = l2.head;

  while (node1 && node2) {
    if (node1.data === node2.data) return node1;
    node1 = node1.next;
    node2 = node2.next
  }

  return null;
}

console.log(intersection(l1, l2)); // returns Node: C

