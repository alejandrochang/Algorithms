// Testing



// console.log('there are ' + 3 + ' colors'); // there are 3 colors
// console.log('number of colors: ' + 2 + 1); //  number of colors: 21
// console.log('4' * 2); // 8 - math operation will turn string into number

var colors = ['red', 'blue', 'yellow'];
var c = colors;

// console.log({ colors, c });

colors[2] = 'purple';

// console.log('1:', { c }); // red, blue, purple - pointing to same place in memory

var s = colors.slice(); // new copy of the array - diff place in memory

colors[1] = 'green';

// console.log({ s, c }); // s: red blue purple - c: red, green, purple


// console.log(s == c); // false - c gets modified
// console.log(s === c); // false



// more promise work
class PromiseA {
    // implement these functions
    constructor(executorFn) {
        this.data = '';
        this.promiseStorage = [];
        this.cb = (str) => this.data = str;
        this.hello = executorFn(this.cb);
    }
    then(onResolve) {
        console.log('data', this.data)
        return onResolve(this.data);
    }
    // static all(promises) {}
}

function testSimplePromise() {
    const promise = new PromiseA( resolve => {
            console.log('hello')
            resolve('test')
        }
    )
    
    // promise.then(value => console.log('1: value', value))
    // promise.then(value => console.log('1: value again', value))
}
// testSimplePromise()
// should see:
// hello
// value test
// value again test


function testAsyncPromise() {
    const promise = new PromiseA(
        resolve => { setTimeout(() => {
            console.log("hello");
            resolve('test')
          }, 100)
        }
    )

    promise.then(value => console.log('async value', value)) // async value test
    promise.then(value => console.log('async value again', value)) // async value again test
}

testAsyncPromise()
// should see:
// async value test
// async value again test