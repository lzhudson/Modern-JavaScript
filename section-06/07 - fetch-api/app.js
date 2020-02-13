const getTextBtn = document.querySelector('#button1');

const getJsonBtn = document.querySelector('#button2');

const getAPIData = document.querySelector('#button3');

let output = document.querySelector('#output');

getTextBtn.addEventListener('click', function(){
  const textFetch = fetch('./test1.txt');

  textFetch.then(function(response){
    return response.text();
  }).then(function(response){
    output.innerHTML = response;
  })
  .catch(function(err){
    console.log(err);
  })
})

getJsonBtn.addEventListener('click', function(){
  
  const fetchJson = fetch('./posts.json');

  fetchJson.then(function(response){
    return response.json();
  }).then(function(response){
    response.forEach(function(post){
      output.innerHTML += 
      `<li>${post.title}
       <p>${post.body}        
      </li>`
    });
  })
})

getAPIData.addEventListener('click', function(){
  const fetchAPI = fetch('https://api.github.com/users');

  fetchAPI.then(function(users){
    return users.json();
  }).then(function(response){
    output.innerHTML = '';
    response.forEach(function(user){
      output.innerHTML += `<li>${user.login}</li>`
    })
  })
})