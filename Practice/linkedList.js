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
      if (counter === idx) {
        // set the head to current data, set current node to next
        previous.next = new Node(data, node);
        return;
      }

      previous = node;
      node = node.next;
      counter += 1
    }

    // if idx not found, insert at the end of LinkedList
    previous.next = new Node(data, node);
  }

  removeFirst() {
    if (!this.head) return;

    // cut off the inital part of LinkedList
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

  removeAt(index) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index - 1) {
        if (node.next) {
          return (node.next = node.next.next);
        } else {
          return (node.next = null);
        }
      }
      node = node.next;
      counter++;
    }
  }

  getFirst() {
    return this.head;
  }

  insertFirst(data) {
    this.head = new Node(data, this.getFirst());
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
      return last.next;
    } else {
      this.head = new Node(data);
      return this.head;
    }
  }
}

// inserting at idx, iterate through counter see where to insert index,
// if idx = 0, push head to next
// keep track of previous, and current node (this.head.next)
