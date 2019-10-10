// Replacing Elements
// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list items
lis[0].remove();

// Remove child element
list.removeChild(lis[2]);

// Classes & Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://www.google.com');
val = link.hasAttribute('title');
val = link.hasAttribute('href');
val = link.removeAttribute('href');
console.log(val);
console.log(firstLi);
console.log(firstLi.children[0]);

