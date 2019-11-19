// functionality to add, edit, delete items
// functionality to filter and sort items

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

// add items to list
function addItem(e) {
  // prevent browser submit
  e.preventDefault();

  let inputText = document.getElementById('input-1').value;

  // create button, add style
  let button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));

  // create li add style
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(inputText))

  li.appendChild(button);
  itemList.appendChild(li);

  document.getElementById('input-1').value = '';
}

// remove an item,
// get all the buttons, place handler there
// on click event we want remove item from dom

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      // parentElement is li
      // let li = e.target.parentElement;
      itemList.removeChild(e.target.parentElement);
    }
  }
}

// filter
let filterInput = document.getElementById('filter');
filterInput.addEventListener('keyup', filterList);

function filterList(e) {
  let text = e.target.value.toLowerCase();
  // get list
  let items = itemList.getElementsByTagName('li');

  Array.from(items).forEach((item) => {
    // if found get the text
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// clear List:
// Remove list button id, add event handler on click
// if click, iterate through list and remove all li's

let clearListButton = document.getElementById('removeList');
clearListButton.addEventListener('click', removeAllItems);

function removeAllItems(e) {
  // get itemslist and iterate through them
  // while (theres a first child) removeChild
  if (confirm('You sure you want to delete all?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
}
