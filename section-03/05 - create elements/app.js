// Create Element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.setAttribute('href', '#');
li.appendChild(link);

// Create new i
const i = document.createElement('i');
i.className = 'fa fa-remove';
link.appendChild(i);
// Or
// link.innerHTML = ' <i class="fa fa-remove"></i>'


// Append li as child to ul
document.querySelector('ul').appendChild(li);


console.log(li);