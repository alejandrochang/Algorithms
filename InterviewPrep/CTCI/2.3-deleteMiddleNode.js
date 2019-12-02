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
  let prev;
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;
  slow = slow.next;
}

console.log(removeMiddleNode(ll.head));
console.log(JSON.stringify(ll, null, 4));
// ll: a -> b -> d -> e