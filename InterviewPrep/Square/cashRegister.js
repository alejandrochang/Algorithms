// Design a cash register, that has functionality
// adding, substracting, dividing, multiplying
// viewing the current price


const denominator = [
  { name: 'ONE_HUNDRED', value: 100.0 },
  { name: 'FIFTY', value: 50.0 },
  { name: 'TWENTY', value: 20.0 },
  { name: 'TEN', value: 10.0 },
  { name: 'FIVE', value: 5.0 },
  { name: 'ONE', value: 1.0 },
  { name: 'QUARTER', value: .25 },
  { name: 'DIME', value: .10 },
  { name: 'NICKEL', value: .05 },
  { name: 'PENNY', value: .01 },
];

// cash register denominators -> whats lefts in the cash register
const checkCashRegister = (price, cash, cir) => {
  // if price is less than cash return
  if (price > cash) console.log('insufficient funds');

  let options = { result: null };
  let change = cash - price; // cost of item

  // get total amount in register, // curr[0] = 'PENNY', curr[1] = int
  let register = cir.reduce((acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });

// { register:
//    { total: 107.11,
//      PENNY: 1.01,
//      FIVE: 15,
//      DIME: 1.1,
//      TEN: 30,
//      TWENTY: 60 } }
  // console.log({ register });

  


}


console.log(checkCashRegister(40.0, 45.7, [['PENNY', 1.01],['FIVE', 15.00],['DIME', 1.10],['TEN', 30.00],['TWENTY', 60.00 ]])); // Change: $5.70


// I need:
// the total amount in register in change
// the total amount of change owed
// if change


























// denominators in descending order
// let denom = [
//   { name: 'ONE HUNDRED', val: 100.00},
//   { name: 'TWENTY', val: 20.00},
//   { name: 'TEN', val: 10.00},
//   { name: 'FIVE', val: 5.00},
//   { name: 'ONE', val: 1.00},
//   { name: 'QUARTER', val: 0.25},
//   { name: 'DIME', val: 0.10},
//   { name: 'NICKEL', val: 0.05},
//   { name: 'PENNY', val: 0.01}
// ];

// const checkCashRegister = (price, cash, cir) => {
//   let output = { change: [] };
//   let change = cash - price;

//   // get information from register
  // let register = cir.reduce((acc, curr) => {
  //   acc.total += curr[1];
  //   acc[curr[0]] = curr[1]; // assign names with values
  //   return acc;
  // }, { total: 0 });

//   // handle exact change
//   if (register.total === change) {
//     output.change = cid; // no need to update
//     return output;
//   }
//   console.log({ register, change });
//   // insufficient funds
//   if (register.total < change) {
//     console.log('Insufficient funds from register');
//     return output;
//   }

//   // change available
//   var change_arr = denom.reduce(function(acc, curr) {
//     var value = 0;
//     // While there is still money of this type in the drawer
//     // And while the denomination is larger than the change remaining
//     while (register[curr.name] > 0 && change >= curr.val) {
//       change -= curr.val;
//       register[curr.name] -= curr.val;
//       value += curr.val;

//       // Round change to the nearest hundreth deals with precision errors
//       change = Math.round(change * 100) / 100;
//     }
//     // Add this denomination to the output only if any was used.
//     if (value > 0) {
//         acc.push([ curr.name, value ]);
//     }
//     return acc; // Return the current change_arr
//   }, []); // Initial value of empty array for reduce

//   // If there are no elements in change_arr or we have leftover change, return
//   // the string "Insufficient Funds"
//   if (change_arr.length < 1 || change > 0) {
//     output.status = 'INSUFFICIENT_FUNDS';
//     return output;
//   }

//   // Here is your change, ma'am.
//   output.status = 'OPEN';
//   output.change = change_arr;
//   return output;
// }

// console.log(checkCashRegister(19.50, 42.75, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE_HUNDRED', 100.00]]));
// create register with information: change in register, 
// handle exact change
// handle insufficient funds
// handle correct change







// Solving this problem would involve
// having denominators for all change that is available,
// cost and price of what you're trying to buy
// Cash given to register