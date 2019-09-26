// Rotate Matrix
// Given an image represented by a N x N matrix,
// where eaxch pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees?
// Can you do this in place?

const rotateMatrix = (arr) => {
  let result = ;
  for (let i = 0; i < arr.length; i++) {
    result[i + 2] = arr[i];
  }

  return result;
}


// 1 2 3       7 4 1      0 1 2
// 4 5 6   ->  8 5 2 -->  3 4 5 
// 7 8 9       9 6 3      6  7 8 


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

console.log(rotateMatrix(arr));
