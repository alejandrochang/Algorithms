// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

class Node {
  constructor(data, next=null) {
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
ll.insertFirst(4);
ll.insertFirst(8);
ll.insertFirst(12);
ll.insertFirst(24);
ll.insertFirst(8);
ll.insertFirst(10);


function kthLast(list, k) {
  if (!list) return null;
  if (!list.head.next) return list;
  let slow = list.head;
  let fast = list.head;

  while (k > 0) {
    fast = fast.next;
    k--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}

const result = kthLast(ll, 2);
console.log(JSON.stringify(ll, null, 4));
console.log({ result });

// list: 4 -> 8 -> 12 -> 24 -> 8 -> 10
// k = 2

/*
  Approaches:
  1. Two pointers to nodes (fast and slow node) -> coutn difference from slow and fast to equal kth -end
  Time: O(n) Space: O(1)

*/