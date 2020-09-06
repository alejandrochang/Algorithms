


// Check if subarray with 0 sum exists or not
// Given an array of integers, check if array 
// contains a sub-array having 0 sum

// Set methods:
// .has(), .entries(), .clear(), .delete(), .add()


function subarrayWith0SumPairs(arr) {
  let set = new Set();

  set.add(0);
  let sum = 0;

  for (let val of arr) {
    sum += val;

    if (set.has(sum)) {
      return true;
    }

    set.add(sum);
  }

  return result;
}


console.log(subarrayWith0SumPairs([3,4,-7,3,1,3,1,-4,-2,-2]));
// [[3,4,-7], [4,-7,3], [-7,3,1,3], [3,1,-4], [3,1,3,1,-4,-2,-2], [3,4,-7,3,1,3,1,-4,-2,-2]];
// console.log(subarrayWith0SumPairs([3,4,-7,3,1,3,1,-4,-2,-2]));

function zeroSumPairs(arr) {
  let finalPairs = [];
  let result = { sum: 0, pairs: [] };

  for (let i = 0; i < arr.length; i++) {
    // let tempArr = [];
    let el = arr[i];
    result.sum += el;
    result.pairs.push(el);

    if (result.sum === 0) {
      finalPairs.push([...result.pairs]);
    }
  }

  return finalPairs;
}

console.log(zeroSumPairs([3,4,-7,3,1,3,1,-4,-2,-2]));

// temp: { result: sum, pairs: }

// i = 0, arr[i]: 3, sum = 3, 
// i = 1, arr[i]: 4, sum = 7, 
// i = 2, arr[i]: -7, sum = 0, 
// 


// { sum: 0, result: [], }
// if --- 10 - sum is updated, result: []


//  store the indices: [], whatever equals 0 I want those indices,

// sum 0
// sum 3
// sum 7
// sum 0