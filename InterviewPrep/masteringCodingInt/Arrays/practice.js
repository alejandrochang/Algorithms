// Array methods: 
// Filter, Map, ForEach, Find, Some, Every, Reduce, includes

const items = [
  { name: 'Glasses', price: 100 },
  { name: 'Watch', price: 450 },
  { name: 'Watch', price: 450 },
  { name: 'Watch', price: 450 },
  { name: 'Watch', price: 450 },
  { name: 'Drink', price: 2 },
  { name: 'Water', price: 1 },
  { name: 'Car', price: 25000 },
  { name: 'Class', price: 750 },
];

// we want to filter every price that is greater than or equal to 100
const filteredItems = items.filter((item) => {
  return item.price >= 100;
});

// console.log({ filteredItems });

// we want to take a 30% sale on items
const updateItemPrice = items.map((item) => {
  return {
    name: item.name,
    price: item.price - (item.price * .30),
  }
})

// console.log({ updateItemPrice });

items.forEach((item) => {
  // do a function here -> essentially a for loop
  // console.log(item.price);
})

// matching a specific case 
const foundItem = items.find((item) => item.name === 'Watch');
// console.log({ foundItem });

// some: returns boolean if some apply
const cheapItems = items.some((item) => item.price <= 1);
// console.log(cheapItems) // true

// every: returns boolean if all apply
const greaterThanZeroPrice = items.every((item) => item.price > 0);
// console.log(greaterThanZeroPrice); // true

// reduce, acc + sum
const allPrices = items.reduce((sum, item) => {
  return sum += item.price;
}, 0);

// console.log({ allPrices });

const numbers = [1, 2, 3, 4, 4, 4, 4];
// console.log(numbers.includes(3)); // true
// console.log(numbers.includes(10)); // false

const uniqueItems = [...new Set(numbers)];
// const unique = [...new Set(JSON.stringify())]

// const uniqueItems = unique(items);


// console.log({ uniqueItems });

// let updatedItems = JSON.stringify(items).map((item) => JSON.parse(item));
// let up = [...new Set(updatedItems)];
// console.log(up)