class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

// linked list methods - size, clear, getLast, getFirst, insertFirst
class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      this.head = new Node(data, this.head);
    }
  }
}

module.exports = LinkedList;