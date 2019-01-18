var buffer = new Buffer('Hello', 'utf8'); 

console.log(buffer); // <Buffer 48 65 6c 6c 6f>

console.log(buffer.toString()); //Hello

console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }

console.log(buffer[2]); // 108

buffer.write('wor');
console.log(buffer.toString()); // worlo
// buffers are a finite piece of data, it doesn't expand or stretch

// Buffer is a global variable, its an object
// If you don't explicitly specifiy the encoding, 'utf8' is the default, utf8 is binary data
