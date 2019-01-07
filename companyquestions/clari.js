// Clari problem
// Create your own data structure that will return true or false 
// if the specific subset of the word is inside the added words

class wordInside {
  constructor() {
    this.data = [];
  }

  add(str) {
    this.data.push(str);
  }

  search(str) {
    let words = this.data;
    for (let word of words) {

      // let subset = word.slice(0, str[str.length - 1]);
      if (word.indexOf(str) !== -1 && word[0] === str[0]) {
        return true;
      }
    }

    return false;
  }
}

// function wordInside() {
//   this.data = [];

//   this.add = function(str) {
//     this.data.push(str);
//   }

//   this.search = function(str) {
//     let words = this.data;
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       if (word[0] !== str[0]) {
//         return false;
//       }

//       if (word.indexOf(str) === -1) {
//         return false;
//       }

//       return true;
//     }
//   }
// }


const w = new wordInside;
w.add('blooper');
w.add('car');
w.add('hello');

console.log(w.search('bloop')); // true
console.log(w.search('bld')); // false

console.log(w.search('ooper'));  // false
console.log(w.search('hel'));  // true
console.log(w.search('ar')); // false
console.log(w.search('car'));  // true

