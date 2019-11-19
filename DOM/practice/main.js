// Functionalities: add, delete, clear all  
// filter

// Add and element to list:
// trigger an event on submit
// get the text thats inputed
// create a list element and add the text to the element

let form = document.getElementById('addForm');
let listItems = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e) {
  // prevent brwoser defualt behavior
  e.preventDefault();

  let inputText = document.getElementById('input-1').value;

  // add button plus X
  let button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));

  // add li, buttton to li and text input
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(inputText));
  li.appendChild(button);

  listItems.appendChild(li);
  document.getElementById('input-1').value = '';
}

// remove
listItems.addEventListener('click', removeItem);

function removeItem(e) {
  // listItem: e.target
  if (e.target.classList.contains('delete')) {
    if (confirm('You sure you want to delete item?')) {
      let li = e.target.parentElement;
      listItems.removeChild(li);
    }
  }
}

// filter
let filterInput = document.getElementById('filter');
filterInput.addEventListener('keyup', filterItems);

function filterItems(e) {
  let textInput = e.target.value.toLowerCase();

  let listArr = Array.from(listItems.children);
  listArr.forEach((li) => {
    let liText = li.textContent.toLowerCase();
    if (liText.indexOf(textInput) !== -1) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
}

// clear all
let clearButton = document.getElementById('removeList');
clearButton.addEventListener('click', removeAllItems);

function removeAllItems(e) {
  if (confirm('Delete all list items?')) {
    while (listItems.firstElementChild) {
      listItems.removeChild(listItems.firstElementChild);
    }
  }
}

// change the title name to Alejandros todo List
let title = document.getElementById('header-title');
title.textContent = 'Alejandros List';
// console.log(title.innerHTML);
// console.log(title.textContent);

let allLi = listItems.getElementsByTagName('li');
let anotherListArr = Array.from(allLi)

for (let i = 0; i < anotherListArr.length; i++) {
  if (i % 2 === 0) {
    anotherListArr[i].textContent = 'Clean Laundry'
  } else {
    anotherListArr[i].textContent = 'Wrap up chores'
  }
}
























// sort list
// let sortButton = document.getElementById('sortList');
// sortButton.addEventListener('click', sortList);

// function sortList(e) {
//   let items = itemList.childNodes;
//   let itemsArr = [];

//   // get rid of  whitespace
//   for (let i in items) {
//     if (items[i].nodeType === 1) {
//       itemsArr.push(items[i]);
//     }
//   }

//   // // sort the arr
//   itemsArr.sort((a, b) => {
//     return a.textContent > b.textContent;
//   });

//   // // append the list ordered
//   for (let j = 0; j < itemsArr.length; j++) {
//     itemList.appendChild(itemsArr[j]);
//   }
// }
