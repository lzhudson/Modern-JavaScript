// set local storage item
// localStorage.setItem('name', 'Jhon');
// localStorage.setItem('age', '30');


// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name);
// console.log(age);

document.querySelector('form').addEventListener('submit', function(e){
  // console.log(123);
  const task = document.getElementById('task').value;
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
  e.preventDefault();
});
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(element => {
  console.log(element); 
});
