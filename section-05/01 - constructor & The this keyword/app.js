// Object Literal
/* const brad = {
  name: 'Brad',
  age: 30,
}
console.log(brad); */

// Person constructor
function Person(name,dob){
  this.name = name;
  // this.age = age;
  // this: reference the object 
  // console.log(this);
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
// Reference the window object.
console.log(this);
// this.alert(1);
// const brad = new Person('Brad', 36);
// const jhon = new Person('Jhon', 30);

// console.log(brad);
// console.log(jhon);
const brad = new Person('Brad','9-10-1981');
console.log(brad);