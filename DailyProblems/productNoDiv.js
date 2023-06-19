// Given an array of integers, return a new array such that each element
// at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1],
// the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?



function bruteForceProdWDivision(arr) {
  const totalProd = arr.reduce((acc, curr) => acc *= curr, 1);
  let result = [];

  for (let int of arr) {
    result.push(totalProd/int);
  }

  return result;
}

console.log('res', bruteForceProdWDivision([1, 2, 3, 4, 5])); //[120, 60, 40, 30, 24]
console.log('res', bruteForceProdWDivision([3, 2, 1])); // [2, 3, 6]









// function productNoDivision(arr) {
//   const prodMap = generateProdMap(arr);


// }


// I: array
// O: arr of products

// High Level: Generate Product Map - access product map and push up the corresponding index