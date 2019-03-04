

function twoSum(array, tgt) {
  let hashMap = {};
  for (let num of array) {
    let sumMinusElement = tgt - num;
    hashMap[sumMinusElement] = true;

    if (hashMap[num]) {
      return true;
    }
  }

  return false;
}

console.log(twoSum([4, 6, 1, -1], 0)); // true
console.log(twoSum([4, 6, 1, -1], 5)); // true
console.log(twoSum([4, 61, 2, -1], 0)); // false
console.log(twoSum([100, -100], 0)); // true