const firstName = 'William';
const lastName = 'Jhonson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development, progamming';
let val;
val = firstName + lastName;

// Concatenation
val = firstName + ' ' +  lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I cant\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l'); // First index of character
val = firstName.lastIndexOf('l'); // Last index of character

//charAt()
val = firstName.charAt('2'); // Search characcter of index

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');

console.log(val); 