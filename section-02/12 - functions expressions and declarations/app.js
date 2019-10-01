// FUNCTION DECLARATIONS
function greet(firstName = 'Jhon', lastName = 'Doe') {
  // JS ES5
  // if(typeof firstName === 'undefined'){
  //   firstName = 'Jhon';
  // }
  // if(typeof lastName === 'undefined'){
  //   lastName = 'Doe';
  // }
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Jhon','Doe'));
console.log(greet());

// Function Expressions
const square = function(x = 3) {
  return x*x;
};
console.log(square(8));
console.log(square());

// IMMIDIATLEY INVOKAABLE FUNCTION EXPRESSIONS - IFFEs
(function(){
  console.log('IFFE Ran..')
})();

(function(name){
  console.log('Hello ' + name)
})('Hudson');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo...');
  }, 
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}
todo.delete = function() {
  console.log('Delete todo...');
}
todo.add();
todo.edit(22);
todo.delete();