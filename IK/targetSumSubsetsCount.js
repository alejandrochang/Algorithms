// Possible To Achieve Target Sum
// Given a set of integers and a target value k, 
// find whether there is a non-empty subset that sums up to k.


// function checkIfSumPossible(arr, k) {
//   let res = [];
//   let count = 0;

//   function permute(array, sum, idx) {
//     if (sum > k) return;
//     if (sum === k) { 
//       count++;
//       res.push(array);
//     }

//     for (let i = idx; i < arr.length; i++) {
//       permute([...array, arr[i]], sum + arr[i], i);
//     }
//   }

//   permute([], 0, 0);

//   console.log({ res })
//   return count;
// }


// let result = checkIfSumPossible([2,4,8], 6);
// let result = check_if_sum([2, 4, 8], 6);
let result = check_if_sum([10, 20], 0);
console.log({ result }); // 1

function check_if_sum(arr, k) {
  let count = 0;
  const start = arr[0];

  function buildSum(array, sum, inputArr) {
    if (!inputArr.length) return;
    if (sum === k) {
      console.log({ sum, k })
      count++;
    }

    for (let i = 1; i < inputArr.length; i++) {
      const curr = inputArr.shift();
      buildSum([...array, curr], sum + curr, inputArr);
    }
  }

  buildSum([], start, arr);
  return count > 0;
}