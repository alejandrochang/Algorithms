// Implement an algorithm to find the kth last element
// of a singly linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.size
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

const ll = new LinkedList();
ll.insertFirst(5);
ll.insertFirst(1);
ll.insertFirst(135);
ll.insertFirst(72);
ll.insertFirst(23);

const kthFromLast = (head, k) => {
  if (!head) return null;
  if (!head.next) return head;

  let slow = head;
  let fast = head;

  while (k > 0) {
    fast = fast.next;
    k--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

console.log(JSON.stringify(ll, null, 4));
console.log(kthFromLast(ll.head, 2)); // 135

// [pseudo]
// decrease the next element from k-- elements away,
// iterate while theres a next and a next of a next
// return the element when there isnt