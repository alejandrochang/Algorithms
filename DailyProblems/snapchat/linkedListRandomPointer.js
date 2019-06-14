class Node {
  constructor(data, next = null, pointer) {
    this.data = data;
    this.next = next;
    this.pointer = pointer;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head, 60);
  }

  insertLast(data) {
    let node = this.head;
    if (!this.head) {
      this.head = new Node(data, this.head);
    }

    while (node.next) {
      node = node.next;
    }

    node.next = new Node(data, null, 30);
  }
}


const ll = new LinkedList();
ll.insertFirst(15);
ll.insertLast(30);
ll.insertLast(44);
ll.insertLast(60);
ll.insertLast(75);
ll.insertLast(90);

const linkedListRandomPointer = (node) => {
  const head = node;

} 



console.log(ll);
console.log(linkedListRandomPointer());


// Given the head to a singly linked list where each node aslo has a 'random'
// pointer that points to anywhere in the linked list, deep clone the list.


// Methds