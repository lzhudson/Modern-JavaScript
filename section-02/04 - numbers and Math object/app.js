const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; // Return pi Value
val = Math.E; // Return logarithm baseus
val = Math.round(2.8); // Round to Interger closer
val = Math.ceil(2.4); // Round to Interger less than x
val = Math.floor(2.8); // Round to Integer less x
val = Math.sqrt(64); // Return square root
val = Math.abs(-3); // Return positive value
val = Math.pow(8, 5); // Return power of number
val = Math.min(2,33,45,50,100, 1, -2); // Return min value
val = Math.max(2, 33,4,1,55,90, 2000); // Return max value
val = Math.random(); // Return random Number
val = Math.floor(Math.random() * 20 + 1); // Return random number Interger between 1 and 20;
console.log(val);