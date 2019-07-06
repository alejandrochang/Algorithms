#Data Structures:
* Arrays
* Stacks
* Queues
* LinkedLists
* Trees
* Tries
* Graphs
* Hash Tables

#Algorithms
* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion

#Overral Foundation
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
```

##Operations on Data Structures
* Insertion
* Deletion
* Traversal
* Searching
* Sorting
* Access