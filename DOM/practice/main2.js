// Say we have the access to the heading in
// the first article (<h2 class=”sensations”>) and
// we want to read the heading text from the next article.

let firstArticleHeader = document.querySelector('.sensations');
let articleParent = firstArticleHeader.parentElement;

let nextArticle = articleParent.nextElementSibling;
console.log('h2?', nextArticle.firstElementChild.textContent);
// we want to get the h2s parent
// go to its nextElementSibling,
// go down to its firstElementChild