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

const call3 = {
  caller: "mom", 
  anotherCaller: function() {
        console.log(`${this.caller} called, too!`)
      },
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};


let newCall = call3.anotherCaller;
newCall(); // undefined called 2



// IIFE
(function foo(){console.log('hello') })();

let undeclared;
const declared = {};
// typeof 
console.log(
  typeof 24 === 'number',
  typeof '24' === 'string',
  typeof true === 'boolean',
  typeof undeclared === 'undefined',
  typeof declared === 'object',
);