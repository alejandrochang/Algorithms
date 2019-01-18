var buffer = new ArrayBuffer(8); // 64 bits of data
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 1; // number won't show, not enough space
console.log(view); // Int32Array [ 5, 15 ]




// because buffer only holds 64 bits, it can only do two numbers (32 bites * 2)
// this is coming from the Javascript Engine, nothing to do with Node (ES6)