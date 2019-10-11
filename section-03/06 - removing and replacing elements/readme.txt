Substituição de Elementos:
Criando um novo elemento:
const newHeading = document.createElement('h2');

Adicionando um id:
newHeading.id = 'lista-de-tarefas';

Adicionando um novo texto nó:
newHeading.appendChild(document.createTextNode('Lista de Tarefas'));

Pegando o antigo titulo:
const oldHeading = document.getElementById('task-title');

Pegando o elemento Pai:
const cardAction = document.querySelector('.card-action');

Substituindo:
parentElement.replaceChild(oldElement, newElement): A função acima substitui o primeiro elemento adicionando por parametro pelo segundo elemento passado por parametro.
Ex:
cardAction.replaceChild(newHeading, oldHeading);

Obs: É necessario para substituição que o elemento que chame o metodo seja o pai do elemento no qual você quer substituir.

Removendo Elementos:
Selecionando Elementos:
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

Removendo o elemento:
element.remove(); Remove o elemento.
Ex:
lis[0].remove(); Remove o primeiro elemento li.

Removendo o elemento filho:
parentElement.removeChild(child): Remove o elemento filho passado por parametro.
Ex:
list.removeChild(lis[1]); 
Obs: para que seja removido é necessario que o elemento passado por parametro seja filho do elemento que chama a função.

Exemplos:
let val;
val = link.className; Retorna o nome de todas as classes em forma de string.
val = link.classList; Retorna a lista de classes porém em formato de array;
val = link.classList[0]; Retorna o nome da primeira classe da lista de classes.

val = link.getAttribute('href'); Retorna o atributo get se existir no elemento no qual chamou a função.
val = link.setAttribute('href', 'http://www.google.com'); Adiciona o atributo href com o valor do site da google.
val = link.hasAttribute('title');// Retorna true ou false se o atributo existir no link.
val = link.hasAttribute('href'); // Retorna true ou false se o atributo existir no link.
val = link.removeAttribute('href'); Remove o atributo href se o mesmo existir no elemento no qual chamou a função.