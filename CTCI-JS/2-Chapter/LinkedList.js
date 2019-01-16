
class Node {
  constructor(data, next) {
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

  getLast(){
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return this.head;
    }
    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let nextNode = this.head.next;
    this.head = nextNode;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = previous.next;
      node = node.next;
    }
    previous.next = null;
  }
}

module.export = { Node, LinkedList };