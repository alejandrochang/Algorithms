# Data Structures:
* Arrays
* Stacks
* Queues
* LinkedLists
* Trees
* Tries
* Graphs
* Hash Tables

# Algorithms
* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion

# Overral Foundation
* Readability of Code
* Space Complexity & Time Complexity

Data structures are a way to organize data. Each Data Structure has its pros and cons, they can be categorized for specific purposes.
Every data structure has trade offs, space complexity, time complexity.
Steps: How to build a data structure, how to use it.

Where is memory stored?
Memory is stored in RAM (Random Access Memory). This is how programs run. On top of that we have Storage, where we store video files, music files, documents (mp4, mp3, jpgs, etc...). Data on Storage is persistent/perminent. When the computer turns off the data on storage persists, while the data in RAM dissapears. The CPU does all of the calculations accessing the RAM and the Storage. RAM: Massive storage data that holds addresses. Each address holds bits to specific pieces of memory

CPU CACHE: CPU has a tiny memory which stores data of recently accessed memory
1 address row in RAM = 8 bits -> 255 bits of info
2 rows = 16 bits of information -> 65,536 bits of info
4 rows = 32 bits of information -> 2,147,483,647 bits of info
8 rows = 64 bits of information -> 9,223,372,036,854,775,807 bits of information

Each Item(Object) takes 4 shelves in our memory
```js
const strings = ['a', 'b', 'c', 'd', 'e'];
//(for 32-bit system) -> 4 items * 4 shelves = 16 bytes of storage - 4 for each object

strings[2] // indexing -> stored in RAM where it remembers where to find it at

// reference type
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

// context vs. scope
const object4 = {
  function a(){
    console.log(this); // this is function a
  }
}

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi my name is ${this.name} and Im a ${this.type} player`);
  }
}

const player1 = new Player('Alejandro', 'street fighter');
// instantiation
```

Reference Type:
Objects inherently have a reference type that points to their respective prototypes.

## Operations on Data Structures
* Insertion
* Deletion
* Traversal
* Searching
* Sorting
* Access


Static Vs Dynamic Variables
Static variables (should) remain the same e.g. temperature of a water bath, k constant of a particular spring. Dynamic variables change as the experiment progresses e.g. air temperature and pressure, amount of natural light.

# Arrays - When should you use it?
Pros:
- Arrays have fast lookups O(1)
- Fast push() and pop() methods
- Good for sorting, as arrays are ordered by index

Cons:
- Slow inserts
- Slow deletes
- Fied Size * (if static arrays)


Hash Function: A hash takes an input and generates some random pattern. Hashes are one way. Its practically impossible to know what the input is unless you created it.
Idempotent: The ability to not 
# Hash Tables - WWhen should you use it?
- Insert, Deletion, Search, Removal - O(1)
- Collisions can bring hashes to O(n) - depending on the hash function it might take O(n)
- 