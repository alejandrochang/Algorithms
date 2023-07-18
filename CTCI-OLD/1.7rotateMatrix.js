
// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

/*
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]
*/

// length - 2 = 2 (steps away from destination) - go right, down, left, up,