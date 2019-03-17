// An sorted array of integers was rotated an unknown number of times.
// Given such an array, find the index of the element in the array in faster than linear time. 
// If the element doesn't exist in the array, return null.

// For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

// You can assume all the integers in the array are unique.

function rotatedSort(arr, el) {

}

console.log(rotatedSort([13, 18, 25, 2, 8, 10], 8));


// faster than linear time makes me think binary search or constant, but because we're looking into something that was previously sorted -> binary
// find a way to see where the pivot is for rotation