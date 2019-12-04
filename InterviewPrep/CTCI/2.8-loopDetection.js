// Given a circular list, imp[lement an  algorithm that returns the 
// node at the beginning of the loop.

// DEFINITION
// Circular linked list; A corrupt linked list in which a node's
// next pointer points to an earlier node, so as to make a loop
// in the linked list.

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

  inserFirst(data) {
    this.head = new Node(data, this.head);
  }
}

let ll = new LinkedList();
ll.inserFirst('e');
ll.inserFirst('c');
// ll.inserFirst('d');
ll.inserFirst('b');
ll.inserFirst('a');
ll.inserFirst('d');
ll.inserFirst('c');

const loopDetection = (list) => {
  let seenMap = {};
  let node = list.head;

  while (node) {
    if (seenMap[node.data]) {
      return node;
    }
    seenMap[node.data] = true;
    node = node.next;
  }

  return null;
}

console.log(loopDetection(ll)); // 