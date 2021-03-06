const unique = require('./unique');

function getArr() {
  return [1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 4, 4, 2, 2, 3];
}

function uniqueArr() {
  return [1, 2, 3, 4, 5];
}

test('Unique function exist', () => {
  expect(unique).toBeDefined();
});

test('Unique returns unique arr 1', () => {
  expect(unique(getArr())).toEqual(unique(uniqueArr()));
});

test('Unique returns unique arr 2', () => {
  expect(unique([5, 5, 5, 5, 5, 5])).toEqual([5]);
});