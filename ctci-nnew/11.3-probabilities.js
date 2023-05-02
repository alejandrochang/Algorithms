// You are given n numbers as well as n probabilities that sum up to 1. Write a function to
//  generate one of the numbers with its corresponding probability.

// For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], 
// your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.

// You can generate random numbers between 0 and 1 uniformly.


const input = [1,2,3,4];
const probabilities = [.1, .5, .2, .2]; // 10%, 50%, 20%, 20%


// prob * 100 = whole # (ex: .1 * 100 = 10) - num 0 -> 100
// 
