const { LinkedList, Node } = require("./LinkedList");

const nodeOne = new Node(4);
const nodeTwo = new Node(5);
const list = new LinkedList();
const list2 = new LinkedList();

list.head = nodeTwo; // 5
list.insertFirst(4); // change the head to 4
list.insertFirst(1); // change the head to 1

console.log(JSON.stringify(list, null, 4)) // LinkedList { head: Node { data: 20, next: Node { data: 5, next: null } } }


const countLLElements = (list) => {
  if (!list.head) return 0;
  let count = 1;
  let node = list.head;
  while (node.next) {
    count+=1;
    node = node.next;
  }

  return count;
}

console.log('result', countLLElements(list)); // 3
console.log("result", countLLElements(list2)); // 0

// Q: Given an unsorted linked list, coun the nu, of elements
//  1 -> 4 -> 5  returns 3
//  0  returns 1