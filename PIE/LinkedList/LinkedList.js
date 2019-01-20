
// Typical Methods on a Linked List 
// insertFirst, deleting, returning this.head, traversing the list

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

  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  getLast() {

  }

  getAt(idx) {
    let node = this.head;
    let count = 0;

    while (node.next) {
      if (count === idx) {
        return node;
      }
      node = node.next;
      count++;
    }

    return null;
  }

  removeAt(idx){
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let previous = this.getAt(idx - 1);
    if (!previous || previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
    }

    // if ()

  }
}