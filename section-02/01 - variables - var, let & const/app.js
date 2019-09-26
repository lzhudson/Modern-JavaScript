// var, let, const

var name = 'Jhon Doe';
console.log(name);
name = 'Steve Smith';

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, %
// Can not start with number 

// Multi word vars
var firstName = 'Jhon'; // Camel Case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname; // comun case 

// LET
let nameSecond = 'Maria Smith';
console.log(name);
name = 'Hudson Hornet';
console.log(name);

// CONST
const nameThree = 'Hudson'
console.log(nameThree);
// Can not reassing
// nameThree = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'Jhon',
  age: 30
}
person.name = 'Sara';
person.age = 32;
person.city = 'Fortaleza';
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);