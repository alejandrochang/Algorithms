// class Node and class LinkedList

// Linked List Methods: insertFirst, size, getFirst, 
// getLast, clear, removeFirst, removeLast, insertLast, getAt, removeAt, insertAt, 

class Node {
  constructor(data, next = null) { // two properties: data, next
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) { // pass data and the head node
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
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
    let counter = 0;
    let node = this.head;
    while (node) {
      if (idx === counter) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(idx) {
    if (!this.head) {
      return null;
    }

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(idx - 1);
    if (!previous || !previous.next) {
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
      return;
    }

    let previous = this.getAt(idx - 1) || this.getLast();
    let node = new Node(data, previous.next);
    previous.next = node;
  }
}

module.exports = { LinkedList, Node };
// const nodeOne = new Node(5);
// const list = new LinkedList();

// list.head = nodeOne; // 5
// list.insertFirst(20); // change the head to 20
// console.log(list) // LinkedList { head: Node { data: 20, next: Node { data: 5, next: null } } }