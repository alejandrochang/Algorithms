

// sort them by bsearch swap and drop for 0
// then 1s, move index along 
// move all 0s then all 1s, (max 3)

// Time Complexity: O(n) - n is the items in the arr
// Space Complexity: O(1) - constant space

const sortColors = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }

  let z = j;
  for (let m = 0; m < arr.length; m++) {
    if (arr[m] === 1) {
      [arr[z], arr[m]] = [arr[m], arr[z]];
      z++;
    }
  }

  return arr;
}


let arr = [2, 0, 2, 1, 1, 0];

// [0,0,1,1,2,2]
console.log('result:', sortColors(arr));















// const sortColors = (arr) => {
//   let i = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === 0) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//       i++;
//     }
//   }

//   let z = i;
//   for (let m = 0; m < arr.length; m++) {
//     if (arr[m] === 1) {
//       [arr[m], arr[z]] = [arr[z], arr[m]];
//       z++;
//     }
//   }

//   return arr;
// };

