// Implement and algo to delete a node in the middle of a sinfly linked list,
// given onlt the node that is to be removed

// delete middle node givent he head of the list

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
}

const ll = new LinkedList();
ll.insertFirst('e');
ll.insertFirst('d');
ll.insertFirst('c');
ll.insertFirst('b');
ll.insertFirst('a');
// ll.insertFirst(72);
// ll.insertFirst(1);
// ll.insertFirst(24);
// ll.insertFirst(33);
// ll.insertFirst(205);

// 205 -> 33 -> 24 -> 1 -> 72 -> 5

// a -> b -> c -> d -> e

const removeMiddleNode = (head) => {
  if (!head || !head.next) return head;
  let previous = head;
  let p1 = head;
  let p2 = head.next;

  while (p2.next && p2.next.next) {
    previous = p1;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  console.log({ previous, p1, p2 })
  // previous.next = p1.next;
  // p1 = p1.next;
}

console.log(removeMiddleNode(ll.head));
console.log(JSON.stringify(ll, null, 4));
// ll: a -> b -> d -> e