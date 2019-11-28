// const solution = (array) => {
//   let current = 0;
//   let greatest = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       current += array[i];
//     } else {
//       current = 0;
//     }

//     if (greatest < current) {
//       greatest = current;
//     }
//   }

//   return greatest;
// }


// console.log(solution([1, 2, -3, 4, 5, -6])); // 9
// console.log(solution([-8, 3, 0, 5, -3, 12])); // 12
// console.log(solution([-1, 2, 1, 2, 0, 2, 1, -3, 4, 3, 0, -1])); // 8


// const solution = (arr) => {
//   let map = {};
//   let totalSoldiers = 0;

//   for (let int of arr) {
//     map[int] = map[int] + 1 || 1;
//   }

//   for (let key in map) {
//     if (map[(parseInt(key) + 1).toString()]) {
//       totalSoldiers += map[key];
//     }
//   }

//   return totalSoldiers;
// }

// console.log(solution([3, 4, 3, 0, 2, 2, 3, 0, 0])); // 5
// console.log(solution([4, 4, 3, 3, 1, 0])); // 3
// console.log(solution([4, 2, 0])); // 0

// const solution = (arr) => {
//   let result = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     let difference = arr[i] - arr[i - 1];
//     result += difference > 0 ? difference : 0;
//   }

//   return result;
// }

// console.log(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2])); // 9
// // increasing
// // lowest = 1;
// // increasing to 3 , 2
// // currentCount = 1


// console.log(solution([5, 8])); // 8
// console.log(solution([1, 1, 1, 1])); // 1

function solution(X, Y, A) {
  var N = A.length;
  var result = -1;
  var nX = 0;
  var nY = 0;
  for (var i = 0; i < N; i++) {
      if (A[i] == X)
          nX += 1;
      else if (A[i] == Y)
          nY += 1;
      if (nX == nY)
          result = i;
  }
  return result;
}


console.log(solution(7, 42, [7, 6, 42, 11, 7, 1, 42])); // 4
console.log(solution(6, 13, [13, 13, 1, 6])); // -1
console.log(solution(100, 63, [100, 63, 1, 6, 2, 13])); // 5
console.log(solution(100, 63, [63, 100, 63, 100, 100, 63])); //
