# Linked List Notes (Pros / Cons) - When to use

### 3 kinds of Linked List?
1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List

### First/Last element of a Linked List
First element is called the head while the tail is the last element

### Doubly Linked List
Each element has a link to the previous element in the list as well as to the next element in the linked list. The pointers point both forwards and backwards. This allows to traverse in either direction. The entire list can be traversed from whatever element you start in. 

### Circular Linked List
The primary traversal problem with these kinds of list is to avoid the cycle avoidance. If you don't track where you start you will get stuck in a loop. 

### Common LL operations
Tracking the head, traversing the list, inserting and deleting elements.

### Implement a Stack using LinkedList vs. Dynamic Array
Prefer a LinkedList. Access is the only benefit of dynamic arrays which is O(1). LinkedList has the benefit of 
O(1) - insertion and deletion. This is specially important if we want to replicate a Stack as closely as possible
as it also has constant push() and pop() methods. 

