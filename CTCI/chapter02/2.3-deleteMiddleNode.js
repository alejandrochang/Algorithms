// Delete middle node from LL

const LinkedList = require('./2.0-LinkedList');

const ll = new LinkedList();
const arr = [1,2,3,4,5];

for (let num of arr) ll.insertFirst(num);


function deleteMiddleNode(list) {
  let prev = null;
  let slow = list.head;
  let fast = list.head.next;

  while (fast.next && fast.next.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;
  }

  prev.next = slow.next;
  slow = slow.next;
  return list;
}

// 1 -> 2 -> 3   if (!fast.next) slow.next = fast
// 1 -> 2 -> 3 -> 4  

// let prev, slow and fast

const result = deleteMiddleNode(ll);
console.log('res', JSON.stringify(result, null, 4));