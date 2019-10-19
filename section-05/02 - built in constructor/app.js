// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'baar';
console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if(name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}
if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO')
}
if(name2 == 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number 
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);

// Functions
const getSum1 = function(x, y){
  return x + y;
}
console.log(getSum1(1,1));
const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1,1));

// Object
const jhon1 = {
  name: "Jhon"
}
const jhon2 = new Object({name: "Jhon"});
console.log(jhon1);
console.log(jhon2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\d/;
const re2 = new RegExp('\\d+');
console.log(re1);
console.log(re2);
