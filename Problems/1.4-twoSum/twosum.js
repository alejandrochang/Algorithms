
function twoSum(arr, sum) {
  let numMap = {};

  for (let num of arr) {    
    let sumMinusEl = sum - num; // 10 - -1

    if (numMap[sumMinusEl] === true) {
      return true;
    }
  
    numMap[sumMinusEl] = true;
  }

  return false;
}


module.exports = twoSum;