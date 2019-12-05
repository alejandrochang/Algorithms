// Code a vending maching that needs to track
// inventory and return correct change in denominations
// of 5, 10, and 25 cents

let denominations = [
  { name: 'QUARTER', val: .25 },
  { name: 'DIME', val: .10 },
  { name: 'NICKEL', val: .05 },
];

// vc -> vendingChange
const vendingMachine1 = (cost, payment, vc) => {
  let response = { status: '', change: [] };
  let change = payment - cost;
  if (payment < cost) {
    response.status = 'Insufficient Funds';
    return response;
  };

  // get the total of the vending machine
  let vendingMachine = vc.reduce((acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });

  // if vendingMachine total < change: not enough change
  if (vendingMachine.total < change) {
    response.status = 'Not enough change';
    return response;
  }

  // subtract change to 0, calculate leftover change
  let changeArr = denominations.reduce((acc, curr) => {
    // value we are generating, multiple quarters etc for any given val
    let value = 0;

    // while vending machine has that specific change and the change is greater than value
    while (vendingMachine[curr.name] && change >= curr.val) {
      change -= curr.val;
      vendingMachine[curr] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }

    if (value > 0) {
      acc.push([ curr.name, value ]); // ['QUARTER', .75 ]
    }

    return acc;
  }, []);

  if (changeArr.length < 1 || change > 0) {
    response.status = 'Not Succesful';
    return response;
  }

  response.status = 'SUCESS';
  response.change = changeArr;
  return response;
}


console.log(vendingMachine1(1.25, 2.00, [['NICKEL', .25], ['DIME', 1.00], ['QUARTER', 1.00]]))
// console.log(vendingMachine1(1.25, 3.10, [['NICKEL', .25 ], ['DIME', 1.00 ], ['QUARTER', 1.00]]))
// { status: 'OPEN', change: [ [ 'QUARTER', 0.75 ] ] }



// iterating over denominations, getting vendingMachine total and cda
// checking to see if the greatest denoms are available and change is available
// if payment < cost insuficient funds
// if vendingMachine total < change insuficient change
// change will be an array of denominations available (thats is what is being passed in);













// vendingMachines status, change available
// payment, cost of purchase, (Done)
// calculate the total change inside,
// give change back of remaining amounts

// insufficient changet, insufficient payment




// const denom = [
//   { name: 'QUARTER', val: .25 },
//   { name: 'DIME', val: .10 },
//   { name: 'NICKEL', val: .05 },
// ]

// const vendingMachine = (cost, payment, cid) => {
//   let change = payment - cost; // .75
//   let response = { status: '' };

//   // if not enough money
//   if (payment < cost) {
//     response.status = 'INSUFFICIENT PAYMENT';
//     return response;
//   }

//   // get vending change
//   let vendingChange = cid.reduce((acc, curr) => {
//     acc.total += curr[1];
//     acc[curr[0]] = curr[1];
//     return acc;
//   }, { total: 0 });

//   // insufficient funds
//   if (vendingChange.total < change) {
//     response.status = 'INSUFFICIENT CHANGE';
//     return repsonse;
//   }

//   let changeArray = denom.reduce((acc, curr) => {
//     let value = 0;

//     // while there is still money and whie denomination
//     // is larger than the change remaining
//     while (vendingChange[curr.name] && change >= curr.val) {
//       change -= curr.val;
//       vendingChange[curr.name] -= curr.val;
//       value += curr.val;

//       change = Math.round(change * 100) / 100;
//     }

//     if (value > 0) {
//       acc.push([ curr.name, value ]);
//     }

//     return acc;
//   }, []);

//   // change has to equal zero and there has to be change
//   if (changeArray.length < 1 || change > 0) {
//     response.status = 'INSUFFICIENT FUNDS';
//     return response;
//   }

//   response.status = 'OPEN';
//   response.change = changeArray;
//   return response;
// }

// snicker: 1.25, 2.00, 





// [pseudo]
// Vending Machine
// Should be able to payment
// if payment < cost process, else dont
// track change it currently has
// dispose of the change,
// track inventory