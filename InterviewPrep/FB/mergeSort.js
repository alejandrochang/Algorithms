// mergeSort
// sort an unsorted array


// Time: O(n * log(n)) // divide and conquer, halfing your sort every time
// Space: O(n) -> space grows relative to the input


const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

// const mergeSort = (arr) => {
//   if (arr.length < 2) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// const merge = (left, right) => {
//   let result = [];

//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return [...result, ...left, ...right];
// }


const arr = [38, 27, 43, 3, 9, 82, 10]; // [ 3, 9, 10, 27, 38, 43, 82 ]
console.log(mergeSort(arr));