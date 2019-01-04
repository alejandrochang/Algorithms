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

  search() {

  }

}


const w = wordInside;
w.add('blooper');
w.add('car');
w.add('hello');

w.search('bloop') // true
w.search('bld') // false
w.search('ooper') // false
w.search('hel') // true
w.search('ar') // false
w.search('car') // true

