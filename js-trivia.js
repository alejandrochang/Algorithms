// This Keyword
Array.prototype.isEmpty = function() {
  return this.length === 0;
};

const arr = [1, 2];
console.log('returns false as its not empty', arr.isEmpty());

