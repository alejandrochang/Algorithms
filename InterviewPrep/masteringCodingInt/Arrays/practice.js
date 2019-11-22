// Array methods: 
// Filter, Map, ForEach, Find, Some, Every, Reduce, includes

const items = [
  { name: 'Glasses', price: 100 },
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
  console.log(item.price);
})
