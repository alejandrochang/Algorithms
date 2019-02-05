// This problem was asked by Google.
// Given two singly linked lists that intersect at some point, find the intersecting node.The lists are non - cyclical.
// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.
// Do this in O(M + N) time(where M and N are the lengths of the lists) and constant space.

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

let List1 = new LinkedList;
let List2 = new LinkedList;

//L1
List1.insertFirst(10);
List1.insertFirst(8);
List1.insertFirst(7);
List1.insertFirst(3);
//L2
List2.insertFirst(10);
List2.insertFirst(8);
List2.insertFirst(1);
List2.insertFirst(99);

let l1 = List1.head;
let l2 = List1.head;

function intersect(l1, l2) {
  
}

