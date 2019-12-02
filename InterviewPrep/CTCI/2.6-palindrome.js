// Implement a function to check if a linked list is a palindrome
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

let ll = new LinkedList();
ll.insertFirst('r');
ll.insertFirst('a');
ll.insertFirst('c');
ll.insertFirst('e');
ll.insertFirst('c');
ll.insertFirst('a');
ll.insertFirst('r');

const palindromeList = (list) => {
  let arr = [];

  let node = list.head;
  while (node) {
    arr.push(node.data);
    node = node.next;
  }

  // console.log({ arr });
  return arr.join('') === arr.reverse().join('');
}

console.log(palindromeList(ll)); // true

// [pseudo]
// put all linked list items into an array
// strinigify arr, reverse arr, see if both equal eachother
// if they do return true else false;