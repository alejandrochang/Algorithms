// Write code to partition a linked list around a value X, such that 
// all nodes less than x come before all nodes greater than or equal
// to x. If x is contained within the list, the values of x only need to be 
// after the elements less than x. The partition element x can appear anywhere
// in  the 'right partition', it does not need to appear betweern the left and right partitions.

// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1, partition # 5
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

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

console.log(JSON.stringify(ll, null, 4));