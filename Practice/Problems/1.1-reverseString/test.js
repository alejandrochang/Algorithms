// Steps for Unit Testing on Algorithms
// 1. test for the function call/name 
// 2. test cases

const reverse = require('./index'); // this is the function

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('hello world')).toEqual('dlrow olleh');
});