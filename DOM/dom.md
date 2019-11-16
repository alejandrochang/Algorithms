# DOM Document Object Model
- Tree of nodes/elements created by the browser
- JS can be used to read/write/manipulate the DOM
- Object Oriented Representation

Document
Root element - <html>
Nodes


Important methods:
  - getElementById 
  - textContent
  - innerText
  - innerHTML
  - getElementsByClassName

1) getElementById -> gets element by id on tag

```html
  <h1 id="header">Header</h1>
```

2) `textContent` and `innerText` are basically interchangable. innerText pays attention to styling while textContent does not (cares just about the text)

```js
  const header = document.getElementById('header');
  
  // changes header text to Alejandro
  header.textContent('Alejandro'); // leaves html in console
  header.innertText('Alejandro');
```

3) `innerHTML` inserts HTML into the document, but doesn't get rid of it

```js
  header.innerHTML = <h3>Hello World</h3>
```
This is what it ends up loking likle:
<h1 id="header-title"><h3>Hello World</h3></h1>


4) `getElementsByClassName` and `getElementsByTagName`

```html
<ul id="items" class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
  <li>Item 5</li>
</ul>
```

```js
  //  By className
  let items = document.getElementsByClassName('list-group-item');
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'red';
  }
```

```js
  // By Tagname
  let items = document.getElementsByTagName('li')
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'red';
  }

```

5) `querySelector` and `querySelectorAll`

querySelector and querySelector all allows you to get any class,
id, tag, anything to be able to use that html doc

```js
// gettting a button
var submit = document.querySelector('input[type="submit');
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

// last element
let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'coral';
```