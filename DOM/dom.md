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

2) textContent and innerText are basically interchangable. innerText pays attention to styling while textContent does not (cares just about the text)

```js
  const header = document.getElementById('header');
  
  // changes header text to Alejandro
  header.textContent('Alejandro'); // leaves html in console
  header.innertText('Alejandro');
```

3) innerHTML inserts HTML into the document, but doesn't get rid of it

```js
  header.innerHTML = <h3>Hello World</h3>
```
This is what it ends up loking likle:
<h1 id="header-title"><h3>Hello World</h3></h1>
