// Delete middle node from LL

const LinkedList = require('./2.0-LinkedList');

const ll = new LinkedList();
const arr = [1,2,3,4,5];

for (let num of arr) ll.insertFirst(num);


function deleteMiddleNode(list) {
  let slow = list.head;
  let fast = slow.next.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = fast;
  return list;
}

// 1 -> 2 -> 3   if (!fast.next) slow.next = fast
// 1 -> 2 -> 3 -> 4  

const result = deleteMiddleNode(ll);
console.log('res', JSON.stringify(result, null, 4));