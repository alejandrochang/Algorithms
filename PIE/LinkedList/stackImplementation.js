/* Problem
Discuss the stack data structure. Implement a stack in Javascript using either a linked list or 
a dynamic array and justify your decision. Design the interface to your stack to be complete,
consistent and easy to use.
*/

const L = require('./LinkedList');
let List = L.LinkedList;
let Node = L.Node;

// l = new List;
// l.insertLast('a')
// l.insertLast('b')
// l.insertLast('c')
// l.insertLast('d')
// console.log(l.getLast());

class Stack {
  constructor() {
    this.data = new List;
  }

  push(data) {
    this.data.insertLast(data);
  }

  pop() {
    let previous = this.data.head;
    let node = this.data.head.next;
    if (!this.data.head.next) {
      this.data.head = null;
      return;
    }

    while (node.next) {
      previous = previous.next;
      node = node.next;
    }

    let last = previous.next;
    previous.next = null;
    return last;
    // take last element from the list
  }

  peek() {
    let last = this.data.getLast();
    return last;
    // show last element from list
  }
}

let stack = new Stack;
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.pop()); // c, removes c 
console.log(stack.peek()); // b
console.log(stack.peek()); // b
console.log(stack); // a

// Node { data: 'c', next: null }
// Node { data: 'b', next: null }
// Node { data: 'b', next: null }
// Stack { data: LinkedList { head: Node { data: 'a', next: [Node] } } }

/* Pros and Cons of Dynamic Array vs. LinkedList (to hold data)
Stack:
The stack data structure consist of three main methods: push(), pop() and peek(), these method help maintain 
the structure of a stack efficient with O(1) insert and deletion, O(n) traversal. Stacks are useful data structures 
for tasks that are divided into multiple subtasks.

Access, Search, Insertion, Deletion

A: O(1), O(n), O(n), O(n)
LL: O(n), O(n), O(1), O(1)

Depends on the importance of access and insertion and deletion. Linked List use more memory than arrays due 
to their reference of next and prev at times. If memory is not an issue use LinkedList. 

Access

1) Linked Lists allow only sequential access to elements. Thus the algorithmic complexities is order of O(n)
Arrays allow random access to its elements and thus the complexity is order of O(1)
Storage

2) Linked lists require an extra storage for references. This makes them impractical for lists of small data items such as characters or boolean values.
Arrays do not need an extra storage to point to next data item. Each element can be accessed via indexes.
Size

3) The size of Linked lists are dynamic by nature.
The size of array is restricted to declaration.
Insertion/Deletion

4) Elements can be inserted and deleted in linked lists indefinitely.
Insertion/Deletion of values in arrays are very expensive. It requires memory reallocation.
*/