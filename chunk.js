// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let result = [];
  let i = 0;

  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }

  return result;
}


console.log(chunk([1, 2, 3, 4], 2)); // --> [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // --> [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // --> [[ 1, 2, 3, 4, 5]]



/// 1st solution


// function chunk(array, size) {
//   let result = [];

//   for (let el of array) {
//     let last = result[result.length - 1];
//     if (!last || last.length === size) {
//       result.push([el]);
//     } else {
//       last.push(el);
//     }
//   }

//   return result;
// }