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
// Q1: Given a ll, sum of elements

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

// Q2:  maxEl from Linked List
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

// console.log("res1", JSON.stringify(res1, null, 4)); // 5
// console.log("res2", JSON.stringify(res2, null, 4)); // 1


// Q3: 
const list3 = new LinkedList();
const list3Node = new Node(2);
list3.head = list3Node; // 5
list3.insertFirst(2);
list3.insertFirst(3);
list3.insertFirst(2);
list3.insertFirst(4);

const removeEleTgtVal = (list, tgt) => {
  if (!list.head) return;
  let node = list.head;

  while (node.next) {
    // if node.data = tgt - 2
    // keep previous node to point to next node
    node = node.next;
  }
}


const res3 = removeEleTgtVal(list, 2);
const res4 = removeEleTgtVal(list2, 4);

console.log("res3", JSON.stringify(list3, null, 4)); // 5
// console.log("res3", JSON.stringify(res3, null, 4)); // 5
// console.log("res4", JSON.stringify(res4, null, 4)); // 1