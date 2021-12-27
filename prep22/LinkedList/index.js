// LinkedList Problems

const { LinkedList, Node } = require("../LinkedList");

// const nodeOne = new Node(4);
// const nodeTwo = new Node(5);
const list = new LinkedList();
const list2 = new LinkedList();
const list3 = new LinkedList();
const list4 = new LinkedList();

list.head = new Node(5); // 5
list.insertFirst(4); // change the head to 4
list.insertFirst(1); // change the head to 1
// Example1:  1 -> 4 -> 5

list2.head = new Node(0); // 0
// Example2:  0

list3.head = new Node(1); // 1
// Example3: 1

list4.head = new Node(2); // 2
list4.insertFirst(2);
list4.insertFirst(3);
list4.insertFirst(2);
list4.insertFirst(4);
// Example4: 4 -> 2 -> 3 -> 2 -> 2

// Question 1: Count Elements in a LinkedList
// Given an unsorted linked list, count the number of elements
const countElements = (list) => {
  if (!list.head) return 0;
  let count = 1;
  let node = list.head;

  while (node.next) {
    count++;
    node = node.next;
  }

  return count;
}

// console.log('countElements:', countElements(list)); // 3
// console.log('countElements:', countElements(list2)); // 1
// ---------------------------------------------------------

// Question 2: Append an element to a LinkedList
// Given an linked list, append ane elmeent with a target value to the list
const appendElementTarget = (list, target) => {
  if (!list.head) return 0;
  let node = list.head;

  while (node.next) {
    node = node.next;
  }

  node.next = new Node(target);

  return JSON.stringify(list, null, 4);
}

// console.log('appendElementTarget:', appendElementTarget(list, 7)); // 1 -> 4 -> 5 -> 7
// console.log("appendElementTarget:", appendElementTarget(list2, 7)); // 0 -> 7
// ---------------------------------------------------------

// Question 3: Find Max Element in an unsorted LinkedList
// Given a linked list find the element with the largest value
const findMaxElement = (list) => {
  if (!list.head) return 0;
  let node = list.head;
  let max = node.data;
  while (node) {
    if (max < node.data) max = node.data;
    node = node.next;
  }

  return max;
}

// console.log('findMaxElement:', findMaxElement(list)); // 1 -> 4 -> 5 -> 1 returns 5
// console.log("findMaxElement:", findMaxElement(list3)); // 1 returns 1
// ---------------------------------------------------------


// Question 4: Remove all Elements with a target value in a Linked List
// Given a linkes list and a target integer, remove all nodes with the value of the target.
const removeTargetElement = (list, tgt) => {
  if (!list.head) return null;
  let previous = list.head;
  let currentNode = previous.next;

  if (!currentNode && previous.data === tgt) {
    list.head = new Node();
  }

  while (currentNode) {
    if (currentNode.data === tgt) {
      previous.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      previous = currentNode;
      currentNode = currentNode.next;
    }
  }

  return JSON.stringify(list, null, 4);
}

// previous, current -> if current = tgt - previous = current.next
// console.log('removeTargetElement:', removeTargetElement(list4, 2)); // 4 -> 2 -> 3 -> 2 -> 2, target 2 //  4 -> 3
// console.log("removeTargetElement:", removeTargetElement(list3, 1)); // 1, target 1, returns empty list
// ---------------------------------------------------------

// Question 5: Find El in sorted linked list
// Given a sorted linked list of unique integers, check if the list contains and element with a target valie
let sortedList = new LinkedList();
sortedList.insertFirst(5);
sortedList.insertFirst(3);
sortedList.insertFirst(2);
// 2 -> 3 -> 5
const findElInSortedList = (list, target) => {
  if (!list.head) return false;
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    if (slow.data === target || fast.data === target || fast.next.data === target) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

// console.log("findElInSortedList:", findElInSortedList(sortedList, 2)); // 2 -> 3 -> 5,  tgt : 2 // return True
// console.log("findElInSortedList:", findElInSortedList(sortedList, 4)); // 2 -> 3 -> 5, tgt: 4  returns False
// ---------------------------------------------------------

// Question 6: Insert a Tgt Element in Sorted Linked List
// Given a sorted list, insert an element in the apropriate position
const insertTargetElementSorted = (list, tgt) => {
  if (!list.head) {
    list.head = new Node(tgt);
    return list;
  }

  let previous = list.head;
  let node = previous.next;

  while (node && node.next) {
    if (previous.data < tgt < node.data) {
      let newNode = new Node(tgt);
      previous.next = newNode;
      newNode.next = node;
    }

    previous = node;
    node = node.next;
  }

  return JSON.stringify(list, null, 4);
}

let sortedList2 = new LinkedList();
sortedList2.insertFirst(4);
sortedList2.insertFirst(3);
sortedList2.insertFirst(1);

// console.log("insertTargetElementSorted:", insertTargetElementSorted(sortedList2, 2)); // 1 -> 3 -> 4, tgt 2 =  1 -> 2 -> 3 -> 4
// console.log("insertTargetElementSorted:", insertTargetElementSorted(new LinkedList(), 1)); // LL, tgt 1 = 1
// ---------------------------------------------------------


// Question 7: Remove a tgt element from a sorted linked list
// Given a sorted linked list of unique integers, remove a node fwith the tft value from the list
const removeList = new LinkedList();
const removeTargetElementSorted = (list) => {

}

console.log('removeTargetElementSorted:', removeTargetElementSorted(list)); // -1 -> 1 -> 3 -> 4. tgt: 1 // -1 -> 3 -> 4
console.log("removeTargetElementSorted:", removeTargetElementSorted(list3)); // 5, tgt: 3, //  5
// ---------------------------------------------------------


// Question 8: Find the Middle Element from a Linked List in One pass
const middleElementOnePass = (list) => {

}

// console.log('middleElementOnePass:', middleElementOnePass(list)); // 1 -> 3 -> 5 // 3
// console.log("middleElementOnePass:", middleElementOnePass(list3)); // 1 -> 2 -> 3 -> 4 // 2
// ---------------------------------------------------------


// Question 9: Find the Kth Element form the end of a linked list in one pass
const findKthElement = (list) => {

}

// console.log('findKthElement:', findKthElement(list)); // 13 -> 1 -> 5 -> 3 -> 7 -> 10, k: 0 // 10
// console.log("findKthElement:", findKthElement(list3)); // 13 -> 1 -> 5 -> 3 -> 7 -> 10, k: 6 // -1
// ---------------------------------------------------------


