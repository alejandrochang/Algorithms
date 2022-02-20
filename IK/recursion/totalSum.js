


// Create recursive function where you take all sum of all numbers
// provided

function recurseTotalSum(arr, idx) {
  if (idx === arr.length) return 0;

  let sum = arr[idx] + recurseTotalSum(arr, idx + 1);

  return sum;
}


const arr = [1, 2, 3, 4, 5]; // 15
let result = recurseTotalSum(arr, 0);

console.log({ result });