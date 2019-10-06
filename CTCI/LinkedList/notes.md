# Linked List

Adding and Deleting a Node from a Singly Linked List.

```js

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }


  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    add(data) {
      const node = new Node(data);
    }
  }
```

