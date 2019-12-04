// Code a vending maching that needs to track
// inventory and return correct change in denominations
// of 5, 10, and 25 cents

const denom = [
  { 'QUARTER': .25 },
  { 'DIME': .10 },
  { 'NICKEL': .05 },
]

const vendingMachine = (cost, payment, cdi) => {
  if (payment < cost) console.log('INSUFFICIENT FUNDS');
  let change = payment - cost; // .75

  // get vending change
  let vendingChange = cdi.reduce((acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });

  if (change > vendingChange) console.log('INSUFFICIENT CHANGE');
  // subtract from the total, see what kind of change we can receive going highest to lowest
  vendingChange.total -= change; // 2.25 - .75 = 1.50
  // for (let coin of denom) {
  //   if (denom[])
  // }


}

// snicker: 1.25, 2.00, 
console.log(vendingMachine(1.25, 2.00, [['NICKEL', .25 ], ['DIME', 1.00 ], ['QUARTER', 1.00]]))




// [pseudo]
// Vending Machine
// Should be able to payment
// if payment < cost process, else dont
// track change it currently has
// dispose of the change,
// track inventory