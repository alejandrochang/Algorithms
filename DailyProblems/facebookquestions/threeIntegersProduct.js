
// This problem was asked by Facebook.

// Given a list of integers, return the largest product that can be made by multiplying any three integers.
// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
// You can assume the list has at least three integers.

function threeIntegersProduct(array) {
  let y = 0;
  let product = 0;
  for (let i  = 1; i < array.length; i++) {
    const startingNum = array[y]; // -10
    const currentNum = array[i]; // -10
    const nextNum = array[i + 1]; // -10
    let total = startingNum * currentNum * nextNum;
    if (product < total) product = total;
  }

  return product;
}

const arr = [-10, -10, 5, 2];
const arr2 = [-10, -10, 5, 2, 100];
const result = threeIntegersProduct(arr); // 500
const result2 = threeIntegersProduct(arr); // 500
console.log({ result });
console.log({ result2 });

// I: arr
// O: integer (product of all three)
// Time/Space Complexity:
// Assume length is at least 3 >=

// i = 0. y = 1, 2, 3
// i will increase by one while we continue through y