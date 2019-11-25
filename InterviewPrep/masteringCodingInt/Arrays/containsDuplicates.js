
// create a containsDuplicate function

// contains duplicate if length is different
// if its the same it doesn't contain duplicate
const containsDuplicate = (nums) => {
  return nums.length !== [...new Set(nums)].length;
};

// time: O(n)
// spacee: O(1)

// const containsDuplicate = (nums) => {
//   let countMap = {};
//   for (let int of nums) {
//     countMap[int] = countMap[int] + 1 || 1;
//   }
  
//   for (let int in countMap) {
//     if (countMap[int] > 1) return true;
//   }
  
//   return false;
// };

// time: O(n)
// space: O(n)

console.log(containsDuplicate([1,2,3,1])); //true
console.log(containsDuplicate([1,2,3])); //false