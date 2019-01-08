const boxes = [1, 2, 3, 4, 5];

// function allPairs(arr) {
//   let result = [];
//   for (let num1 of arr) {
//     for (let num2 of arr) {
//       result.push([num1, num2]);
//     }
//   }

//   return result;
// }

function allPairs(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result.push([arr[i], arr[j]])
    }
  }

  return result;
}

console.log(allPairs(boxes)); // 