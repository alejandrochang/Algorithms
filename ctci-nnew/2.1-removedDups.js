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

// console.log(JSON.stringify(ll, null, 4));


function removeDups(list) {
  let node = list.head;

  while (node.next) {
    if (node.data === node.next.data) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return list; // JSON.stringify(list, null, 4);
}


const result = removeDups(ll);
console.log(JSON.stringify(result, null, 4)); // 


// I: LinkedList
// O: LinkedList (with no duplicates)

/*
  Approaches:
  1. Iterate through the nodes. While next node -> if value is equal to curr nnode (keep going to next node)
  Time: O(n), Space: O(1)
*/