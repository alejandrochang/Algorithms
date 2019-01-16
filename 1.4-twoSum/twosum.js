let arr1 = [1, 2, 3, 9]; // false
let arr2 = [1, 2, 4, 4]; // true
let arr3 = [-1, 2, 11, 4]; // true

function twoSum(arr, sum) {
  let numMap = {};

  for (let num of arr) {
    if (numMap[num]) {
      return true;
    }
    
    let sumMinusEl = sum - num; // 10 - -1

    if (numMap[sumMinusEl] === true) {
      return true;
    }
  
    numMap[sumMinusEl] = true;
  }

  console.log(numMap);
  return false;
}

// console.log(twoSum(arr1, 8)); // false
// console.log(twoSum(arr2, 8)); // true
console.log(twoSum(arr3, 10)); // true