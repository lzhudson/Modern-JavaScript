const getTextBtn = document.querySelector('#button1');

const getJsonBtn = document.querySelector('#button2');

const getAPIData = document.querySelector('#button3');

let output = document.querySelector('#output');

getTextBtn.addEventListener('click', function(){
  const textFetch = fetch('./test1.txt');
  
  textFetch
  .then(response => response.text())
  .then(response => output.innerHTML = response)
  .catch(err => console.log(err))
})

getJsonBtn.addEventListener('click', function(){
  
  const fetchJson = fetch('./posts.json');
  
  fetchJson
  .then(response => response.json())
  .then(response => {
    response.forEach(post => {
      output.innerHTML += 
      `<li>${post.title}
      <p>${post.body}        
      </li>`
    });
  })
})

getAPIData.addEventListener('click', function(){
  const fetchAPI = fetch('https://api.github.com/users');
  
  fetchAPI.then(users => users.json())
  .then(response => {
    output.innerHTML = '';
    response.forEach(user =>  output.innerHTML += `<li>${user.login}</li>`)
  })
})