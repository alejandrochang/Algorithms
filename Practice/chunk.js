// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  // initialize array
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index = index + size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2)); // --> [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // --> [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // --> [[ 1, 2, 3, 4, 5]]

// I: arr
// O: arr
// T: O(n)
// S: O(n)

// [pesudo]
// slice at the index of size [1, 2] push idx + size, 
// return new array;