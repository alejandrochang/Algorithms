// Implement a LinkedList, Node and Class
// Use methods: clear, size, getAt(idx),
// insertAt(data, idx),removeFirst(), removeAt(idx), 
// insertFirst(data), getLast(), insertLast(data), forEach(fn)

// LinkedList keep track of its current node and its next node
// next is initialized to null, as we don't know the next number
// 1 -> 2 -> 3 -> 4 -> 5

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

  clear() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter += 1;
      node = node.next;
    }

    return counter;
  }

  getAt(idx) {
    // check to see where linked list starts
    if (!this.head) return null;
    let counter = 0;
    let node = this.head;

    while (node) {
      if (idx === counter) {
        return node;
      }

      node = node.next;
      counter += 1;
    }

    return null;
  }

  insertAt(data, idx) {
    if (!this.head) {
      // insert at first slot if no linkedList present
      this.head = new Node(data);
    }

    let counter = 0;
    let previous = this.head;
    let node = this.head.next;

    while (node) {
      
    }

    previous.next = new Node(data, node);
  }
}

// inserting at idx, iterate through counter see where to insert index,
// if idx = 0, push head to next
// keep track of previous, and current node (this.head.next)
