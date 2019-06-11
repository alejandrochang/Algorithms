
class LinkedList {
  constructor(head, next = null) {
    this.head = head;
    this.next = next;
  }
}

const swapEveryTwoNodes = (head) => {

}

console.log(swapEveryTwoNodes()); 
//  1 -> 2 -> 3 -> 4 === 2 -> 1 -> 4 -> 3

// swap from left to right, move to next, swap from right again and the move again