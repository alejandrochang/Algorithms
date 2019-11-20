// Given an array of stock arr, find the minimum
// buy price and the maximum sell
// price that produces the greatest profit.

const maxProfit = (arr) => {
  let minBuyPrice = arr[0] < arr[1] ? arr[0] : arr[1];
  let maxSellPrice = arr[0] < arr[1] ? arr[1] : arr[2];
  let maxProfit = maxSellPrice - minBuyPrice;
  let tempBuyPrice = minBuyPrice;

  for (let i = 2; i < arr.length; i++) {
    let sellPrice = arr[i];
    if (minBuyPrice > sellPrice) {
      tempBuyPrice = sellPrice;
    } else {
      let profit = sellPrice - minBuyPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
        maxSellPrice = sellPrice;
        minBuyPrice = tempBuyPrice;
      }
    }
  }

  return [minBuyPrice, maxSellPrice];
}

// const maxProfit = (arr) => {
//     let minBuyPrice = arr[0] < arr[1] ? arr[0] : arr[1];
//     let maxSellPrice = arr[0] < arr[1] ? arr[1] : arr[2];
//     let maxProfit = maxSellPrice - minBuyPrice;
//     let tempBuyPrice = minBuyPrice;

//     console.log({ minBuyPrice, maxSellPrice, maxProfit, tempBuyPrice});

//     for (let index = 2; index < arr.length; index++) {
//         const sellPrice = arr[index];

//         if (minBuyPrice > sellPrice) tempBuyPrice = arr[index];
//         else {
//           const profit = sellPrice - minBuyPrice;
//           if (profit > maxProfit) {
//             maxProfit = profit;
//             maxSellPrice = sellPrice;
//             minBuyPrice = tempBuyPrice;
//           }
//         }
//     }

//     return [minBuyPrice, maxSellPrice];
// }


console.log(maxProfit([1, 2, 3, 4, 5])); // , [1, 5]);
console.log(maxProfit([2, 1, 5, 3, 4])); // , [1, 5]);
console.log(maxProfit([2, 10, 1, 3])); // , [2, 10]);
console.log(maxProfit([2, 1, 2, 11])); // , [1, 11]);