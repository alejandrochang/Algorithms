
// A linkedList has a class for LinkedList and Node
// Node: contains the data and the pointer to next
// LinkedList contains all the nodes

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinekdList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

const List = new LinekdList();
List.insertFirst(5);
List.insertFirst(6);
List.insertFirst(12);
List.insertFirst(5);
List.insertFirst(18);


// 2.1 - Problem: Remove Dups
// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed

const removeDuplicates = (head) => {
  if (!head || !head.next) return head;

  let nodes = {};
  let p1 = head;
  let p2 = head.next;
  nodes[p1.data] = true;

  while (p2) {
    if (nodes[p2.data]) { // if its includes
      p1.next = p2.next;
    } else {
      nodes[p2.data] = true;
      p1 = p2;
    }

    p2 = p2.next;
  }
}

console.log(JSON.stringify(List, null, 4));
console.log(removeDuplicates(List.head));
console.log('post removal', JSON.stringify(List, null, 4));

// [pseudo]
// iterating once storing data seen in hashtable as true
// continue iterating, if seen again set the:
// current node -> node.next