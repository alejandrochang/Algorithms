// You have 2 numbers represented by a linked list, where each node 
// contains a single digit. The digits are stored in reverse order,
// such that the 1's digit is at the head of the list. Write a function 
// that ads the two numbers  and returns the sum as a linked list

// ex:
// Input: 7 -> 1 -> 6 + 5 -> 9 -> 2 = 617 + 295

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

let l1 = new LinkedList();
l1.insertFirst(6);
l1.insertFirst(1);
l1.insertFirst(7);

let l2 = new LinkedList();
l2.insertFirst(2);
l2.insertFirst(9);
l2.insertFirst(5);

// console.log(JSON.stringify(l1, null, 4));
// console.log(JSON.stringify(l2, null, 4));

const sumLists = (list1, list2) => {
  let result = new LinkedList();
  let arr1 = []; // [7, 1, 6] -> '617'
  let arr2 = []; // [5, 9, 2] -> reverse, join -> '295'
  let total = 0;

  let node1 = list1.head;
  let node2 = list2.head;

  while (node1) {
    let data = node1.data;
    arr1.push(data);
    node1 = node1.next;
  }

  while (node2) {
    let data = node2.data;
    arr2.push(data);
    node2 = node2.next;
  }

  // done with linked list, update arrays
  arr1 = arr1.reverse().join(''); // 617
  arr2 = arr2.reverse().join(''); // 295
  total = String(parseInt(arr1) + parseInt(arr2));

  for (let i = 0; i < total.length; i++) {
    let int = parseInt(total[i]);
    result.insertFirst(new Node(int));
  }

  // console.log('here', JSON.stringify(result, null, 4));
  return result;
}
console.log(sumLists(l1, l2));

// 912
// 2 -> 1 -> 9`