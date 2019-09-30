// if(something) {
//   do something
// } else {
//   do something else
// }
// Atribuition
let id = 100;
id = '100';
// EQUAl TO TESTING TO VALUE
if(id == 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO TESTING TO VALUE
if(id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE AND TYPE
if(id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO TESTING TO VALUE
if(id !== 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
console.log('<--------------------->');
id = undefined;
// Test if undefined
if(typeof id !== 'undefined') {
  console.log(`The id is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
id = 100;
if(id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
if(id >= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
if(id < 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
if(id <= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE
const color = 'yellow';
if(color === 'red') {
  console.log('Color is red');
} else if(color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}
console.log('<----------------->');
// Logical Operators
const name = 'Steve';
const age = 25;

// AND = &&
if(age > 0 && age < 12) {
  console.log(`${name} is a child.`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age <= 16 || age >= 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' :'Incorrect');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT')
else 
  console.log('INCORRECT');