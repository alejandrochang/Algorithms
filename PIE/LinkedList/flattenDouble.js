// Flatten a double linked list 
const list = require('./doubleLL');

function flattenDouble(list) {
  let node = list.getFirst();
  while (node) {
    if (node.child) {
      // Append the child list to the end of the tail and updat the tails
    }
  }
}

console.log(flattenDouble(list));