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

const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');

// headerTitle.textContent = 'Alejandro Chang';
// headerTitle.innerText = 'Goodbye'

// puts the html inside the H1 tag
headerTitle.innerHTML = '<h3>Substituting title</h3>'
// styling directly 
header.style.borderBottom = 'solid 3px red'

