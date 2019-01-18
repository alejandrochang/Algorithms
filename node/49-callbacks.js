

function greet(callback) {
  console.log('The original function');
  var data = {
    name: 'Alejandro'
  }
  callback(data)
}

greet(function(data) {
  console.log('The first callback');
  console.log(data);
});

// The original function
// The first callback
// { name: 'Alejandro' }

greet(function(data) {
  console.log('The second callback');
  console.log(data.name);
});

// The original function
// The second callback
// Alejandro