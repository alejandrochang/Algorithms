// Document Methods: Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title); // Item Lister
// console.log(document.forms[0])
// console.log(document.links);
// console.log(document.images);

// head and body tags of the doc
// console.log(document.head)
// console.log(document.body)

// all elements of the document
// console.log(document.all); // array of everything in the dom
// console.log(document.all[10]) // accessing a specific document

// dont want to manipulate directly
// document.all[10].textContent = 'Hello World'

// Selectors to query the DOM:
// getElementById

// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');

// // headerTitle.textContent = 'Alejandro Chang';
// // headerTitle.innerText = 'Goodbye'

// // puts the html inside the H1 tag
// headerTitle.innerHTML = '<h3>Substituting title</h3>'
// // styling directly 
// header.style.borderBottom = 'solid 3px red'


// Get Elements by classname
// var items = document.getElementsByClassName('list-group-item');
// console.log({ items });
// console.log(items[1]);

// items[1].textContent = 'Nahh there'
// items[1].style.fontWeight = 'bold'

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'grey'
// }

// items[1].style.backgroundColor = 'blue'

// Get Elements by Tag Name
// var li = document.getElementsByTagName('li');
// console.log({ li });
// console.log(li[1]);

// li[1].textContent = 'Nahh there'
// li[1].style.fontWeight = 'bold'

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'gray'
// }

// li[1].style.backgroundColor = 'blue'

// QUERYSELECTOR

// grab any css selector
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red'

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit');
// // console.log({ submit })
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral';

// let li = document.querySelector('li');
// li.style.color = 'red';

// let li2 = document.querySelector('li:nth-child(2)'); // second
// li2.style.backgroundColor = 'grey';

// // QUERYSELECTORALL

// let titles = document.querySelectorAll('.title');
// console.log({ titles });

// titles.forEach((title) => {
//   title.innerText = 'What is it';
//   title.style.color = 'BLUE';
// })

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// odd.forEach((title) => {
//   title.style.backgroundColor = 'grey';
//   title.style.fontWeight = 'bold'
// });

// even.forEach((title) => {
//   title.style.backgroundColor = 'purple';
//   title.style.fontWeight = 100
// });

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'black';
//   even[i].style.backgroundColor = 'yellow';
//   odd[i].style.color = 'yellow'
//   odd[i].innerText = 'Yellow';
//   even[i].innerText = 'Black';
// }


// PART 2
// TRAVERSING THE DOM

const items = document.querySelector('#items'); // # for ids

// parentNode
items.parentNode.style.backgroundColor = '#f4f4f4';

// the parentNode grabs the parent of the items, which in this case
// is the <div> encapsulating all items