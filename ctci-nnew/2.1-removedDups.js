// Remove Dups! Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?


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

ll.insertFirst(2);
ll.insertFirst(5);
ll.insertFirst(6);
ll.insertFirst(6);
ll.insertFirst(6);
ll.insertFirst(10);
ll.insertFirst(15);

console.log(JSON.stringify(ll, null, 4));


function removeDups(list) {

}


// I: LinkedList
// O: LinkedList (with no duplicates)


/*
  Approaches:
  1. Iterate through the nodes. While there
*/