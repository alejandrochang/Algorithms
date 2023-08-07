// Given a array of numbers representing the stock prices of a company in chronological order,
//  write a function that calculates the maximum profit you 
// could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, 
// since you could buy the stock at 5 dollars and sell it at 10 dollars.

const stocks = [9, 11, 8, 5, 7, 10];

// start: 9, end: 11, value: 2
// if < start -> start is 8 -> 5
// start: 5, end: 7, value: 2
// start: 5, end: 10, value = 5

// function kadanes(prices) {
//   let ans = 0;
//   let sum = 0;

//   for (let i=1; i < prices.length; i++) {
//     ans = Math.max(0, ans + prices[i]);
//     sum = Math.max(sum, ans);
//   }

//   return sum;
// }

function stockPrices(prices) {
  let j = prices.length - 1; // 10
  let best = 0;
  for (let i = prices.length - 2; i >= 0; i--) {
    let next = prices[i]; // 8
    const diff = prices[j] - next;
    if (prices[j] < next) j = i;
    if (best < diff) best = diff;
  }

  return best;
}

const res = stockPrices(stocks);
console.log({ res });



// const stocks = [9, 11, 8, 5, 7, 10];

/* 
val = 3
  i = 10 (move i if > i)
  j = i - 1; 7
  diff = 10 - 7; 3  (j--)

*/
