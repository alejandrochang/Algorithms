// regular cache
const cache = (value) => {
  // if key is not there add key
  const cache = {};
  return = (...args) => {
    let key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      delete cache[key]
      cache[key] = value;
    }

    cache[key] = value;
  }
}

// Develop an LRU Cache where you have a get, set and first methods
// Refresh key if item exists
class LRU {
  constructor(max = 10) {
    this.max = max;
    this.cache = new Map(); // {}
  }

  get(key) {
    const item = this.cache.get(key);
    // if item -> refresh it -> deleting the key and adding it again
    // update the order of the map -> Update the order of the LInkedList
    if (item) {
      this.cache.delete(key);
      this.set(key, item);
    }

    return item;
  }

  set(key, value) {
    // overrides if same key
    // if hit max -> remove LRU -> add new key
    if (this.cache.size === this.max) {
      const firstObj = this.first();
      this.cache.delete(firstObj);
    }
    this.cache.set(key, value);
  }

  first() {
    // we're getting keys of all maps [1,2,3,4] -> next index ordered val -> 0 idx -> value obj = {}
    return this.cache.keys().next().value;
  }
};


let cache = new LRU(5)
const arr = [1, 2, 3, 4, 5]
arr.forEach(v => cache.set(v, `value: ${v}`))

console.log('1', cache.get(12)) // undefined
console.log('2', cache.get(3)) // "value: 3"
cache.set(6, 6); // 1 is gone removed -> replaced by 6
// console.log('4', cache.get(6)); // 6
console.log('5', cache.get(3)) // "value: 3"

console.log({ cache })


// LRU item -> evict that item
// track of items to ask least recently used
// O(1) access to add and remove items -> hashMap => Object -> 
// LinkedList -> 7 -> 9 -> 10 -> 5


// LinkedList + HashMap 2 data structures
// hash[key] = { value: value. timestamp: new Date() };



// new Map(); -> memorize methods, indexing
// get: get the key
// set: set the key
// size: length of the map
// 


// map(store the key value pairs) - max capacity
































// class LRU {
//   constructor(max = 10) {
//     this.max = max;
//     this.cache = new Map();
//   }

//   get(key) {
//     // console.log('keys', this.cache.keys().next().value)
//     let item = this.cache.get(key);
//     if (item) {
//       // refresh key if item exists
//       this.cache.delete(key);
//       this.cache.set(key, item);
//     }

//     return item;
//   }

//   set(key, val) {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     } else if (this.cache.size === this.max) {
//       this.cache.delete(this.first());
//     }

//     this.cache.set(key, val);
//   }

//   first() {
//     return this.cache.keys().next().value;
//   }
// };

// Map performs better involving frequent additions and removals of key-value pairs than obj
// Map Methods: set, delete, has, size


// let cache = new LRU(5)
// const arr = [1, 2, 3, 4, 5]
// arr.forEach(v => cache.set(v, `value: ${v}`))

// console.log('1', cache.get(12)) // undefined
// console.log('2', cache.get(3)) // "value: 3"
// cache.set(6, 6);
// console.log('4', cache.get(6)); // 6
// console.log('5', cache.get(3)) // "value: 3"

// console.log({ cache })
// console.log('keys', cache.keys())