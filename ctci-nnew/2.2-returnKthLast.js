// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

class Node {
  constructor(data, next=null) {
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

const ll = new LinkedList();
ll.insertFirst(4);
ll.insertFirst(8);
ll.insertFirst(12);
ll.insertFirst(24);


function kthLast(list) {
  
}