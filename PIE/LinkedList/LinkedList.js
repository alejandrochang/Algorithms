
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

  // head 
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
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

  //deleting
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

  // inserting
  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
    }

    let previous = this.getAt(idx-1) || this.getLast();
    let node = new Node(data, previous.next);
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };