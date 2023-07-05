
// 3 states for the checkbox
// 1. checked: all leaf nodes in subtree are selected
// 2. partially-checkd: some of the leaf nodes in sub-tree are selected
// 3. unchecked: none of the leafnodes in the sub-tree are selected

// Change State
// 1. checked: If a che ckbox is checked, clicking on it would un-Select all leafnodes
// 2. partially-checked: clicking on it selects all leaf nodes (sub-tree)
// 3. unchecked: clicking on it would select all leafnodes in subtree

// partially/unchecked click -> results in all checked
// checked click -> results in all unchecked


const tree = [
 'A/B/D',
 'A/B/E',
//  'A/B/F',
//  'A/C',
//  'X/Y',
//  'X/Z',
];

// 3 state: 'c': checked, 'pc': partially, 'u'
const buildTreeStruct = (paths) => paths.map(p => p.split('/')).reduce(
    (node, path) => addFolder(path)(node),
    // setup general tree struct with name, state and children (for easy render)
    {name: 'node', state: 'u', children: []}
  );

const addFolder = (path) => (node) => {
  const [char, ...remainingChildren] = path;
  // not the most efficient bct couldn't figure a better way
  // find the children of subfolders if exissts - otherwise addsubfolder
  function addSubfolder(name, node) {
    // set default child struct to build tree and push children for each folder
    const child = { name, state: 'u', children: []};
    node.children.push(child);
    return child
  }

  const child = node.children.find(child => child.name === char) || addSubfolder(char, node);

  // if remaining children recursively setup struct
  if (remainingChildren.length) addFolder(remainingChildren)(child);
  return node
}

function allChildrenChecked(node) {
  let q = [node];
  while (q.length > 0) {
    const curr = q.shift();
    if (curr.state !== 'c') {
      return false;
    }

    if (node.children) q.push(node.children);
  }

  return true;
}

function noChildrenChecked(node) {};
const updateSubtreeState = (click, node) => {
    // run bfs to udpate the tree by children
    // If children are checked the return [v] - c
    // if all children are not checked [o] - pc
    // if !children are checked (including self) [] u

    let state = 'c';
    if (allChildrenChecked(node)) {
      // if all checked then we uncheck
      state = 'u'
    } else if (noChildrenChecked(node)){
      state = 'c'
    } else {
      // partially checked
      state = 'pc';
    }

    // use bfs to update the state depending of subtree checked, or not
    const q = [node];
    while (q.length > 0) {
      const curr = q.shift();
      // 3 state: 'c': checked, 'pc': partially, 'u'
      curr.state = state;
      
      if (curr.children && curr.children.length) {
        q.push(curr.children);
      }
    }

    return node;
}

function renderTreeSelect(paths, clicks) {
  // build tree structure - exlude default node
  const tree = buildTreeStruct(paths).children;

  // iterate through clicks and update state for subtrees 
  for (let click of clicks) {
    const currState = updateSubtreeState(click, tree);
    console.log({ currState });
  }
  
  console.log('plop', JSON.stringify(tree, null, 4));

  return tree;
}


const result = renderTreeSelect(tree, ['A', 'B', 'D', 'E']);
console.log({ result });

// example: plop [
//     {
//         "name": "A",
//         "state": "c",
//         "children": [
//             {
//                 "name": "B",
//                 "state": "c",
//                 "children": [
//                     {
//                         "name": "D",
//                         "state": "c",
//                         "children": []
//                     },
//                     {
//                         "name": "E",
//                         "state": "c",
//                         "children": []
//                     }
//                 ]
//             }
//         ]
//     }
// ]


// Return rendering of string
// '.' for indentation
// [v]
// [o]
// [] for the checkbox

// If children are checked the return [v]
// if all children are not checked [o]
// if !children are checked (including self) []


// 1. 


class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    this.state = 'u'; //
  }
}