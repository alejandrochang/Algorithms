const { LinkedList, Node } = require("./LinkedList");

// const test = new Node(1);
const nodeOne = new Node(4);
const nodeTwo = new Node(5);
const list = new LinkedList();
list.head = nodeTwo; // 5
list.insertFirst(4); // change the head to 4
list.insertFirst(1); // change the head to 1

const list2 = new LinkedList();
list2.head = new Node(1);
// console.log(JSON.stringify(lisJSON.stringify(t, null, 4)) // LinkedList { head: Node { data: 20, next: Node { data: 5, next: null } } }
// Q: Given a ll, sum of elements - maxEl from Linked List

const sumOfElementsLinkedList = (list) => {
  if (!list.head) return;
  let node = list.head;
  let sum = list.head.data;

  while (node.next) {
    node = node.next;
    sum += node.data;
  }

  return sum;
};

const maxElLinkedList = (list) => {
  if (!list.head) return;
  let node = list.head;
  let maxEl = node.data;

  while (node.next) {
    node = node.next;
    if (maxEl < node.data) maxEl = node.data;
  }

  return maxEl;
};

const result = sumOfElementsLinkedList(list); // 10
const result2 = sumOfElementsLinkedList(list2); // 1
// console.log("result", JSON.stringify(result, null, 4));
// console.log("result2", JSON.stringify(result2, null, 4));


const res1 = maxElLinkedList(list);
const res2 = maxElLinkedList(list2);

console.log("res1", JSON.stringify(res1, null, 4)); // 5
console.log("res2", JSON.stringify(res2, null, 4)); // 1