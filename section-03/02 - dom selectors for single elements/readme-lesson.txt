Seletores do DOM:
Selecionando apenas um elemento
document.getElementByID('id'): Retorna um elemento da pagina que contenha o id passado por parametro.
OBS: Se houver mais de um elemento que possua o mesmo id, será retornado o primeiro elemento.
Ex:
  document.getElementByID('titulo-principal'): Retorna o elemento que está associado aquele id.

Obtendo outras propiedades a partir de uma seleção de elemento.
document.getElementByID('titulo-principal').className: Retorna o nome de todas as classes pertecentes ao elemento que está relacioando a esse id.

Armazenando em uma variavel:
var tituloPrincipal = document.getElementByID('titulo-principal');

Mudando o estilo:
tituloPrincipal.style.background = '#333'; // Altera a cor de fundo do elemento relacionado ao id titulo-principal. 
tituloPrincipal.style.color = '#fff'; // Altera a cor da fonte do elemento relacionado ao id titulo-principal. 
tituloPrincipal.style.padding = '5px'; // Altera a o espaçamento interno do elemento relacionado ao id titulo-principal. 

Mudando o conteudo:
taskTitle.textContent = 'Task List'; // Retorna o conteudo textual do elemento. No caso acima seta um novo conteudo textual no elemento.
Obs: a propiedade textContent retorna todo o texto do elemento porém não retorna outros elementos ou estilos.
taskTitle.innerText = 'My Tasks';// Retorna o texto totalmente renderizado do elemento. No caso acima seta um novo texto no elemento.
taskTitle.innerHTML = '<span style="color:red;">Task List</span>'; // Retorna todo o conteudo html presente no elemento. No caso acima seta um conteudo html dentro da tag html já exitente.

document.querySelector(): Retorna um unico elemento podendo ser selecioando em forma de id "#titulo-principal", ".caixas", "p", "ul li" ou de qualquer forma que se possasa selecionar um elemento em forma de css.

Ex:
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

Mudando o estilo:
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';