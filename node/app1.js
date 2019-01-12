// pass by value, does not point to the same place in memory location

function change(b) {
  b = 2;
  console.log(b); // 2 doesn't change as 1 is a primitive
}

var a = 1;
change(a);
console.log(a) // 1

// pass by reference, points to the same place in memory location

function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // { prop1: [Function], prop2: {} }
