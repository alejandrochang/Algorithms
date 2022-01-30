


// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]



function threeSum(arr) {
  if (!arr.length || arr.length < 3) return [];
  arr = arr.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        res.push([arr[i], arr[j], arr[k]]);

        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;


        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        // sum > target
        k--;
      }
    }
  }

  return res;
}


console.log("result", threeSum([-1, 0, 1, 2, -1, -4]));


// I: arr
// O: set of arrays


