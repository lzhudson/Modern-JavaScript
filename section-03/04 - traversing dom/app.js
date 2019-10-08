let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Propertys (parent and childs)
// Get child nodes
val = list.childNodes;
val = listItem.childNodes[0].nodeName;
val = listItem.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute 
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentNode.parentNode;

// Get next sibling 
val = listItem.nextElementSibling;
val = listItem.nextSibling.nextSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);