const btnGetJokes = document.querySelector('.get-jokes');
const outputJokes = document.querySelector('.jokes');
const inputNumberJokes = document.querySelector('#number');
const message = document.querySelector('.message');
btnGetJokes.addEventListener('click', getJokes);


function getJokes(e){
  e.preventDefault();
  if(inputNumberJokes.value < 1){
    showMessage('Error, please check input', 'error');
    setTimeout(function(){
      document.querySelector('.message').style.display = 'none';
    }, 3000);
  } else {
    const qtdJokes = Number(inputNumberJokes.value);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${qtdJokes}`, true);
    xhr.onload = function(){
      if(this.status === 200){
        const response = JSON.parse(this.responseText);
        let output = '';
        if(response.type === 'sucess'){
          response.value.forEach(element => {
            output += `
            <li>ID: ${element.id}</li>
            <li>Joke: ${element.joke}</li>
            `
          });
          outputJokes.innerHTML += output;
        }
        else {
          output += '<li>Something went wrong</li>';
          outputJokes.innerHTML = output;
        }
      }
    }
    xhr.send();
  }
}

function showMessage(messageText, type){
  if(type === 'error'){
    message.textContent = messageText; 
    message.style.backgroundColor = 'red';
    message.style.color = '#FFF';
  }
}
