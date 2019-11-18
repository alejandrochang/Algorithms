// get form and list items, input
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let searchInput = document.getElementById('filter');

// submit event for form
form.addEventListener('submit', addItem);

// Delete event for items
itemList.addEventListener('click', deleteItem);

// filter event
searchInput.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault(); // prevent browser default on submit

  let inputValue = document.getElementById('input1').value;

  // create list element, add styling and add text
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(inputValue));

  // add delete functionality and ui
  let button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));

  li.appendChild(button);

  // append to the itemList dom tree
  itemList.appendChild(li);
}

function deleteItem(e) {
  // select the specific delete button
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      // want to remove the li
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter Items
function filterItems(e) {
  // convert text to lower case
  var text = e.target.value.toLowerCase();
  // get list, return html document
  let items = itemList.getElementsByTagName('li');
  // convert to array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none'
    }
  });
}