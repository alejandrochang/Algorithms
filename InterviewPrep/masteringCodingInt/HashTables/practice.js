// HashTables Methods and properties:
// Hash Functions

// Insert: O(1)
// Lookup: O(1)
// Delete: O(1)
// Search: O(1)

let user = {
  name: 'Alejandro',
  run: () => {
    console.log('im running!');
  },
  sports: ['soccer', 'baseball','basketball'],
  lastName: 'Chang',
};

const {
  name,
  run,
  sports,
  lastName,
} = user;

user.newProperty = 'WAAAAHHHH';

// console.log({ name, lastName }); // Alejandro Chang
// console.log(sports[2]); // basketball
// console.log(run()); /// im  running!
// console.log(user.newProperty); /// WAAAAHHHH


// Objects vs Map
// With an objects you can only set the string as a key
// With a map you can set any data type as the key, Map maintains insertion order
// ex.
const a = new Map();
const b = new Set();

