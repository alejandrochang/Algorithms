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

let ll = new LinkedList();
ll.insertFirst('e');
ll.insertFirst('d');
ll.insertFirst('c');
ll.insertFirst('b');
ll.insertFirst('a');


