// Doubly Linked List and their problems
// Access , Search, Insertion, Deletion

// O(n) - O(n) - O(1) - O(1)
// benefits are insertion and deletion, you still have to iterate through 
// the whole linked list to find any given node


class Node {
  constructor(data) {
    this.data =data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
}

const dLL = new DoublyLinkedList;
[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
  dLL.append(item);
});

module.exports = dLL;
