


// Sum two arrays 
// Ex. [8,4,5] + [7,2]
// 845 + 72 = 917

function toNum(str) {
  return parseInt(str, 10);
}

function nonNativeSumArr(arr1, arr2) {
  let sum = toNum(arr1.join('')) + toNum(arr2.join('')); // 917
  let strSol = sum.toString().split('');
  return strSol.map((s) => toNum(s));
}


let result1 = nonNativeSumArr([8, 4, 5], [7, 2]); // [9,1,7]
// console.log({ result1 });

// sol w/ native methods: join + parse + sum + split
// nativeSumAr without in-built methods

function nativeSum(arr1, arr2) {
  let res = [];
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let remainder = 0;

  while (i >= 0 || j >= 0) {
    let val1 = arr1[i] || 0;
    let val2 = arr2[j] || 0;
    let sum = val1 + val2 + remainder;
    remainder = 0;

    if (sum > 10) {
      const remain = sum % 10;
      res.push(remain);
      remainder = remain;
    } else {
      res.push(sum);
    }

    i--;
    j--;
  }

  return res.reverse();
}

let result2 = nativeSum([8, 4, 5], [7, 2]); // [9,1,7]
let result3 = nativeSum([1, 0, 0, 1, 5], [1, 2]); // [9,1,7]
console.log({ result2, result3 }); 


// [8, 4, 5]
//    [7, 2]


// 7
// < 10 ? push 7
// 11
// > 10
//   sum - 10 = 1
//   remainder = 11 % 10 = 1