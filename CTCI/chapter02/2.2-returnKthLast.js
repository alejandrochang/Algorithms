const LinkedList = require('./2.0-LinkedList');

const ll = new LinkedList();
const arr = [5,4,3,2,1];
for (let num of arr) ll.insertFirst(num);

function returnKthToLast(list, k) {
  let slow = list.head;
  let fast = slow.next;

  while (k) {
    fast = fast.next;
    k--;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}

const result = returnKthToLast(ll, 1); // 4
const result2 = returnKthToLast(ll, 3); // 2
const result3 = returnKthToLast(ll, 4); // 1

console.log('res 1:', JSON.stringify(result, null, 4));
console.log('res 2:', JSON.stringify(result2, null, 4));
console.log('res 3:', JSON.stringify(result3, null, 4));