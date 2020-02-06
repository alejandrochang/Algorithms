

const longestContinousSubArraySum = (arr) => {
  if (arr.length === 0) return;

  let temp = { start: 0, sum: 0 };
  let result = { start: 0, end: 0, sum: 0 };

  for (let i = 0; i < arr.length; i++) {
    temp.sum += arr[i];

    // is sum greater than result?
    if (temp.sump > result.sum) {
      result = { start: temp.start, end: i, sum: temp.sum };
    }

    if (temp.sum < 0) {
      temp.sum = 0;
    }
  }

  console.log({ temp, result });

  return result.sum;
}

console.log(longestContinousSubArraySum([2, 5, 6])); // 13
console.log(longestContinousSubArraySum([2, -1, 5, -10, 6])); // 6
console.log(longestContinousSubArraySum([2, 5, -99, 6])); // 7