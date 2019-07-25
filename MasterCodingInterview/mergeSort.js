// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift())
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return [...result, ...left, ...right];
// }



function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

const arr = [1, 53, -2, -42, 5, 77, 2323, 31, 1];
console.log(mergeSort(arr)); // [ -42, -2, 1, 1, 5, 31, 53, 77, 2323 ]