// This problem was asked by Twitter.

// Given a list of numbers, create an algorithm that arranges them in
//  order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510

function largestInteger(arr) {

}

console.log(largestInteger([10, 7, 76, 415])); // , you should return 77641510

// 7 76 415 10

// go idx by idx, check # to every other #
// if = too check next #, if greater than 