// Given an array of integers, return a new array such that each element
// at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1],
// the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?



function bruteForceProdWDivision(arr) {
  const totalProd = arr.reduce((acc, curr) => acc *= curr, 1);
  let result = [];

  for (let int of arr) result.push(totalProd / int);

  return result;
}

// Time: O(2n)
// Space: O(n)
// console.log('res', bruteForceProdWDivision([1, 2, 3, 4, 5])); //[120, 60, 40, 30, 24]
// console.log('res', bruteForceProdWDivision([3, 2, 1])); // [2, 3, 6]

function productNoDivision(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let prodTot = arr.reduce((acc, curr, idx) => {
      if (i !== idx) acc *= curr;
      return acc;
    }, 1);

    res.push(prodTot);
  }

  return res;
}

console.log('res2', productNoDivision([1, 2, 3, 4, 5])); //[120, 60, 40, 30, 24]
console.log('res2', productNoDivision([3, 2, 1])); // [2, 3, 6]

// Time: O(n^2)
// Space: O(n)

// I: array
// O: arr of products

// High Level: Generate Product Map - access product map and push up the corresponding index;