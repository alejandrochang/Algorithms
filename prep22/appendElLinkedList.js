const { LinkedList, Node } = require("./LinkedList");

const nodeOne = new Node(4);
const nodeTwo = new Node(5);
const list = new LinkedList();
const list2 = new LinkedList();

list.head = nodeTwo; // 5
list.insertFirst(4); // change the head to 4
list.insertFirst(1); // change the head to 1

// console.log(JSON.stringify(lisJSON.stringify(t, null, 4)) // LinkedList { head: Node { data: 20, next: Node { data: 5, next: null } } }

// Q: Given a ll, append an element w/ target valuye tot he list iteratively.

const appendElLinkedList = (list, target) => {
  if (!list.head) return;
  let node = list.head;

  while (node.next) {
    node = node.next
  }

  node.next = new Node(target);

  return list;
}

const result = appendElLinkedList(list, 7);
console.log('result', JSON.stringify(result, null, 4));