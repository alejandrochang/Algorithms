
/*
For your reference:
const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {LinkedListNode_int32} head
 * @return {BinaryTreeNode_int32}
 */

class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const root = new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5)))));
// console.log('linkedList', JSON.stringify(root, null, 4));

function sorted_list_to_bst(head) {
    const sortedArr = getList(head);

    function buildBST(arr, start, end) {
      if (start > end) return;

      const mid = Math.floor((start + end) / 2);
      const root = new BinaryTreeNode(arr[mid]);

      root.left = buildBST(arr, start, mid-1);
      root.right = buildBST(arr, mid + 1, end);

      return root;
    }

    return buildBST(sortedArr, 0, sortedArr.length - 1);
}

console.log("result", sorted_list_to_bst(root));

function getList(node) {
  if (!node) return [];
  let list = [];
  
  while (node) {
    list.push(node.value);
    node = node.next;
  }

  return list;
}
