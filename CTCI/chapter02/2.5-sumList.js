const LinkedList = require('./2.0-LinkedList');
const l1 = new LinkedList();
const l2 = new LinkedList();


const arr = [7,1,6];
const arr2 = [5,9,2];

for (let i = 0; i < arr.length; i++) {
  l1.insertFirst(arr[i]);
  l2.insertFirst(arr2[i]);
}

/*
  High Level:
  1. Go through list, add value to string '716'
  2. Convert to num(str) -> add values 
  3. Convert to string/split, pass along value of num into new LinkedList. (might need to reverse arr depending on order);
*/

function sumList(l1, l2) {
  // Assume same length;
  let s1 = '';
  let s2 = '';

  let node = l1.head;
  let node2 = l2.head;
  while (node) {
    s1 += node.data;
    s2 += node2.data;

    node = node.next;
    node2 = node2.next;
  }

  const sum = parseInt(s1, 10) + parseInt(s2, 10);
  // Sum is 912
  const str = String(sum).split('');
  let result = new LinkedList();
  for (let ch of str) {
    result.insertFirst(parseInt(ch, 10));
  }

  return result;
}

// LL is 2 -> 1 -> 9

const result = sumList(l1, l2);
console.log('result', JSON.stringify(result, null, 4));



// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912



// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 9. the answer refers to 1612