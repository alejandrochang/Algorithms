// Given an array and a size,
// split the array items into a list of arrays of the given size.

const chunk = (arr, size) => {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]);
console.log(chunk([1, 2, 3, 4], 3)); // [[1, 2, 3], [4]]);
// console.log(chunk([1, 2, 3, 4], 5)); // [[1, 2, 3, 4]]);

// [pseudo]
// slice up to the size of the array, if you cant push array