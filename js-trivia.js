// This Keyword
Array.prototype.isEmpty = function() {
  return this.length === 0;
};

const arr = [1, 2];
console.log('returns false as its not empty', arr.isEmpty());

const call = {
  caller: "mom", 
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
    // this is the call object
  }
};
// call.says(); // Hey mom just called
const call2 = {
  caller: "mom", 
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

// call2.says(); // undefined - es6 arrow function will reference the outside global object which doesn't know about this


