const chunk = require('./chunk');

test("chunk function exists", () => {
  expect(chunk).toBeDefined()
});

test("chunk function to slice even length arrays", () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
});

test("chunk function to slice odd length arrays", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test("chunk function to slice even length arrays", () => {
  expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
});




/// Other Solution
// function chunk(array, size) {
//   let result = [];

//   for (let el of array) {
//     let last = result[result.length - 1];
//     if (!last || last.length === size) {
//       result.push([el]);
//     } else {
//       last.push(el);
//     }
//   }

//   return result;
// }