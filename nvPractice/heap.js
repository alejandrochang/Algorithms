// Heap (max, min)


// Min Heap Binary Tree
// Arr[(i -1) / 2] returns its parent node.
// Arr[(2 * i) + 1] returns its left child node.
// Arr[(2 * i) + 2] returns its right child node.

/*
1. Heapify: a process of creating a heap from an array.
2. Insertion: process to insert an element in existing heap time complexity O(log N).
3. Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
4. Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).


Ex Arr: [13,15,31,41,51,100,115]
          13
      16      31
    41  51  100  115
*/




class MinHeap {
  constructor() {
    this.heap = [];
  }

  insertion() {
    // heapify up: 
  }
  deletion() {}
  peek() {}
}