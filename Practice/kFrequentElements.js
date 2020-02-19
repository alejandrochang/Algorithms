



const topKFrequent = (nums, k) => {
  let countMap = {};
  let results = [];

  for (let num of nums) {
    countMap[num] = countMap[num] + 1 || 1;
  }

  let sorted = Object.entries(countMap).sort((a, b) => {
    return b[1] < a[1];
  });

  for (let i = 0; i < k; i++) {
    results.push(Number(sorted[i][0]));
  }

  return results;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
// [1, 2]