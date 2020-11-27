
// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.
// Given a positive integer n, find the smallest number of squared integers which sum to n.
// For example, given n = 13, return 2 since 13 = 3^2 + 2^2 = 9 + 4.
// Given n = 27, return 3 since 27 = 3^2 + 3^2 + 3^2 = 9 + 9 + 9.


function smallestNumberSquared(n) {
  let floor = Math.floor(Math.sqrt(n));
  const squared = Math.pow(floor, 2);
  let nums = 1;

  if (squared === n) return nums;
  let diff = n - squared;
  console.log({ diff })
  if (Math.sqrt(diff) % 2 === 0) return 2;




  console.log({ floor, squared })


}

console.log(smallestNumberSquared(13));
console.log(smallestNumberSquared(27));


// n = 13 -> 
// 3^2 + i^2= 13
// update floor while target number has not been reached

// have a count = 1; -> represents 13

// 13 -> 3
// 