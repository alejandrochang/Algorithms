// Say we have the access to the heading in
// the first article (<h2 class=”sensations”>) and
// we want to read the heading text from the next article.

let firstHeader = document.querySelector('.sensations');
let firstArticle = firstHeader.parentElement;

let secondArticle = firstArticle.nextElementSibling;
secondArticle.children[1].firstElementChild.innerHTML += "<h3>Hello there</h3>"
// let secondHeader = secondArticle.firstElementChild;
// let section = secondHeader.nextElementSibling;
// let pTag = section.firstElementChild;

// pTag.textContent = 'Contact Chang...'

// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling

