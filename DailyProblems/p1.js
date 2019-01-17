// Good morning! Here's your coding interview problem for today.
// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass ?


function twoSum(arr, k) {
  let numMap = {};

  for (let num of arr) {
    if (numMap[num] === true) {
      return true;
    }

    let difference = k - num;
    if (!numMap[difference]) {
      numMap[difference] = true;
    }
  }

  return false;
}

let arr = ([10, 15, 3, 7]); 
let arr1 = ([10, 15, 2, 9]); 
let arr2 = ([1, 5, 6, 2]); 
let arr3 = ([15, -5, 6, 2]); 

console.log(twoSum(arr, 17)); // true
console.log(twoSum(arr1, 17)); // true
console.log(twoSum(arr3, -3)); // true
console.log(twoSum(arr2, 100)); // false


