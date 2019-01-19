const twosum = require('./twosum');

let arr1 = [1, 2, 3, 9]; // false
let arr2 = [1, 2, 4, 4]; // true
let arr3 = [-1, 2, 11, 4]; // true, 11 + -1 = 10

test('Requires a twoSum function', () => {
  expect(twosum).toBeDefined();
});

test('Requires two sum to add two positive numbers', () => {
  expect(twosum(arr1, 8)).toEqual(false);
});

test('Requires two sum to add two positive numbers', () => {
  expect(twosum(arr2, 8)).toEqual(true);
});

test('Requires two sum to add negative numbers succesfully', () => {
  expect(twosum(arr3, 10)).toEqual(true);
});



// console.log(twoSum(arr1, 8)); // false
// console.log(twoSum(arr2, 8)); // true
// console.log(twoSum(arr3, 10)); // true