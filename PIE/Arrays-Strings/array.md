# Arrays 

### Dynamic vs. Static Typed Arrays?
Static Array: An array whose size cannot be changed. 

Dynamic Array: An array whose size can be changed/modified. 
The good: On average, it’s quick to insert elements to the end of the dynamic array. And item lookup by index is O(1).
The bad: They don’t allow for the quick rearrangement of their elements. And they have inconsistent runtimes for adding elements to the array, so they’re not good for real-time systems.

