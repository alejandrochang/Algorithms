// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit.The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input:(7-> 1 -> 6) + (5 -> 9 -> 2). Thatis,617 + 295. Output: 2 -> 1 -> 9. Thatis,912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// // lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. Output:9 -> 1 -> 2.Thatis,912.

class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
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
ll.insertFirst(6);
ll.insertFirst(1);
ll.insertFirst(7);
// 7 -> 1 -> 6

const ll2 = new LinkedList();
ll2.insertFirst(2);
ll2.insertFirst(9);
ll2.insertFirst(5);
//5 -> 9 -> 2


function sumList(l1, l2) {

}

/*
  

*/