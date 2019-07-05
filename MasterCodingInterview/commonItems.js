// Given 2 arrays, create a function that lets a user know (true/false)
// whether these two arrays contain any common items


const commonItems = (arr, arr2) => {
  let countMap = {};
  for (let ch of arr) {
    countMap[ch] = countMap[ch] + 1 || 1;
  }

  for (let ch of arr2) {
    countMap[ch] = countMap[ch] + 1 || 1;
  }

  for (let key in countMap) {
    if (countMap[key] === 2) return true;
  }

  return false;
}


const a = ['a', 'b', 'c', 'x'];
const b = ['z', 'y', 'i'];
const c = ['z', 'y', 'x'];

console.log(commonItems(a, b)); // false
console.log(commonItems(a, c)); // true

// i: array
// o: boolean
// no constraints
// O(n) - iterating

// 1) brute force/naive approach, whys is it inefficient?
// 2) 