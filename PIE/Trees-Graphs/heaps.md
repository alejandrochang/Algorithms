# Heaps

Another common tree is a heap. Heaps are trees (usually binary trees). The root node always has the highest number in the tree, which means that you can find the maximum value in constant time.

Max - O(1)
Insertion/Deletion - O(log(n))
Lookup - O(n)

Note: If estracting a value needs to be FAST - use a heap.

1. Max-heap
In max-heap each child of a node has a value less than or equal to the node's own value.

2. Min-heap
In a min-heap each child is greater than or equal to its parent. 

A heap is a tree-like datastructure where each node must be ordered in respect to its children. A parents node must always be greater (or less) than a childrens values. There are 2 types of heaps: max heap and min heap. A max heap is where parent nodes values are greater than those of its children. A min heap is where parent nodes are smaller than those of its children. 


<!-- Binary Heap -->
A binary heap are a specific implementation of a heap where each parent can't have more than two children. A complete binary heap has every level filled, except for the bottom level. This level gets populated left to right.