

const arr1 = [-1,3,8,2,9,5];
const arr2 = [4,1,2,10,5,20];


function closestSum(arr1, arr2, tgt) {
  const results = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const sum = arr1[i] + arr2[j];
      const diff = Math.abs(sum - tgt);
      const pairs = [i, j];
      results.push({ sum, diff, pairs });
    }
  }.

  return results;
};

console.log("res", closestSum(arr1, arr2, 24)); // [[5,20], [3,20]];
// const arr1 = [1, 4, 8, 10];
// const arr2 = [2, 6, 7, 5];
// tgt; 10
// [[2,8],[6,4]]


// 3 types of data: { differenceFromTgt, pairs, }



// [1, 4, 8, 10];
// [2, 5, 6, 7 ];
// tgt 10