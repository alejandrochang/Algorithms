// Given a pivot x, and a list lst, partition the list into three parts.

// The first part contains all elements in lst that are less than x
// The second part contains all elements in lst that are equal to x
// The third part contains all elements in lst that are larger than x
// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

function pivotList(arr, tgt) {
  const min = arr.filter((el) => el < tgt);
  const equal = arr.filter((el) => el === tgt);
  const max = arr.filter((el) => el > tgt);

  return [...min, ...equal, ...max];
}

const arr = [9, 12, 3, 5, 14, 10, 10];
let result = pivotList(arr, 10);
// console.log({ result }); // [9, 3, 5, 10, 10, 12, 14]


// Time: O(n) Space: O(n);


function swap(arr, f, s) {
  return [arr[f], arr[s]] = [arr[s], arr[f]];
}


function pivotListTwo(arr, tgt) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] < tgt) {
      // first
      swap(arr, low++, mid++)
    } else if (arr[mid] > tgt) {
      // last
      swap(arr, mid, high--);
    } else {
      // middle
      // < tgt
      mid++;
    }
  }

  return arr;
}

let result2 = pivotListTwo(arr, 10);
console.log({ result2 }); // [9, 3, 5, 10, 10, 12, 14]


// if < ==> 