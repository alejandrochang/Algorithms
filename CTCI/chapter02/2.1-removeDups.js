
const LinkedList = require('./2.0-LinkedList');

const ll = new LinkedList();
const list = [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]
for (let el of list) {
  ll.insertFirst(el);
}

// console.log(JSON.stringify(ll, null, 4));

function removeDuplicates(list) {
  let node = list.head;
  const set = new Set();

  while (node) {
    set.add(node.data);
    node = node.next;
  }

  const newList = new LinkedList();
  set.forEach((value) => newList.insertFirst(value));

  return newList;
}

const res = removeDuplicates(ll);

console.log(JSON.stringify(res, null, 4)); // [1, 5, 6, 8]