// This problem was asked by Facebook.

// Given a array of numbers representing the stock prices of a company 
// in chronological order, write a function that calculates the maximum profit 
// you could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

function stockPrice(arr) {
  let minimumIdx = 0;
  let maximumIdx = 1;
  let currentMin = 0;
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[currentMin]) {
    currentMin = i;
    }

    if (arr[maximumIdx] - arr[minimumIdx] < arr[i] - arr[currentMin]) {
      maximumIdx = i;
      minimumIdx = currentMin;
    }
  }

  maxProfit = arr[maximumIdx] - arr[minimumIdx];
  return maxProfit;
}

console.log(stockPrice([9, 11, 8, 5, 7, 10])); // 5



// if next num is > 

// maxIdx 

// function stockPrice(arr) {
//   var minIdx = 0;
//   var maxIdx = 1;
//   var currMin = 0; //
//   var maxProfit = 0;

//   if (arr.length < 2) {
//     throw new Error("Need atleast two time periods to be profitable!");
//   }
  
//   for (var i = 1; i < arr.length; i++) {

//       if(arr[i] < arr[currMin]) { 
//         currMin = i;
//       }
//       console.log('wtf', arr[i] - arr[currMin])
//       if (arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
//         maxIdx = i;
//         minIdx = currMin;

//       }
//   }

//   maxProfit  = arr[maxIdx] - arr[minIdx];
//   return maxProfit;
// }