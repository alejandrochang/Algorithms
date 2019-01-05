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
      if (word[0] !== str[0]) {
        return false;
      }

      if (word.indexOf(word) === -1) {
        return false;
      }
    }

    return true;
  }
}


const w = new wordInside;
w.add('blooper');
w.add('car');
w.add('hello');

console.log(w.search('bloop')); // true
console.log(w.search('bld')); // false

// w.search('ooper') // false
// w.search('hel') // true
// w.search('ar') // false
// w.search('car') // true

