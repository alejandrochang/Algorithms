// Find the minimum value to be added so that array becomes balanced

// Input : 1 2 1 2 1 3
// Output : 2
// Sum of first 3 elements is 1 + 2 + 1 = 4, 
// sum of last three elements is 2 + 1 + 3 = 6
// To make the array balanced you can add 2.

// Input : 20 10
// Output : 10

const balancedArray = (arr) => {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length / 2; i++) {
    sum1 += arr[i];
  }

  for (let i = arr.length / 2; i < arr.length; i++) {
    sum2 += arr[i];
  }

  return Math.abs(sum1 - sum2);
}

let arr = [1, 2, 1, 2, 1, 3];
let arr2 = [20, 10];

console.log(balancedArray(arr)); // 2
console.log(balancedArray(arr2)); // 10

// I: arr
// O: int
// Time: O(n)
// Space: O(n)


// iterate thorugh half of the array, see the sum,
// iterate through the second half, see the sum
// take difference between both