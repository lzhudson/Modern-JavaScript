Criando Elementos: 
document.createElement('elementHTML'): Essa função permite criar elementos do tipo HTML.
Ex:
const div = document.createElement('div');
console.log(div); Saida: <div></div>;

Adicionando Classe:
element.className = 'class-name': Usando a propiedade className, é possivel exibir, adicionar ou reatribuir novas classes.
Ex:
div.className; Saida: Exibe o nome das classes;
div.className += nome-da-classe; Adiciona mais uma classe no atributo classe do elemento.
div.className = nome-da-classe; Reatribui ao atributo classe do elemento a classe passada.
Obs: para adicionar mais de uma classe é necessario dar um espaço.

Adicionando id:
element.id = 'id-name': Usando a propiedade id, é possivel exibir, adicionar ou reatribuir novos ids.
Ex:
div.id; Saida: Exibe todos os ids incluindo no atributo id do elemento.
div.id += nome-do-identificador; Adiciona mais um id no atributo id do elemento.
div.id = nome-do-identificador; Reatribui ao atributo id do elemento a id passada.
Obs: para adicionar mais de um id é necessario dar um espaço.

Adicionando atributo:
element.setAttribute('atributo', 'valor'): Usando a função setAttribute, é necessario passar dois parametros o primeiro é o nome do atributo e o segundo o seu valor.
Ex:
div.setAttribute('class', 'bg-red'): Adiciona ao elemento o div a classe red;
a.setAttribute('href', 'http://www.google.com'): Adiciona ao elemento a o atributo href com o valor do site do google.
Obs: Para adicionar mais de um valor por atributo(caso o atributo possa ter mais de um valor), é necessario dar espaçamento entre os valores.

Adicionando como filho:
element.appendChild(): Adiciona um elemento, texto ou algo que possa ser passado por parametro como filho do elemento.
Ex:
div.appendChild(p); Adiciona a div um elemento de paragrafo.
p.appendChild(a); Adiciona ao elemento paragrafo um elemento a.

Criando texto node:
document.createTextNode('value'); Cria um nó de texto.
Ex:
document.createTextNode('Olá mundo');
var nome = document.createTextNode('hudson');

Criando text node e adicionando como filho:
element.appendChild(document.createTextNode('value')); Adiciona como filho do elemento o texto criado pela função createTextNode.
Ex:
p.appendChild(document.createTextNode('Oi Mundo')); Cria como filho um nó de texto e o adiciona.
var textLink = document.createTextNode('link');
a.appendChild(textLink); Cria como texto e o adiciona como filho ao elemento a.

Exemplo Real: Adicionando a uma lista não ordenada um novo item.


Criando um novo link:
const link = document.createElement('a');
Criando o elemento classe e adicionando valores:
link.className = 'delete-item secondary-content';
Criando atributo e adicionando seu valor e o adicionando ao elemento link:
link.setAttribute('href', '#');
Adicionando como filho o elemento link ao elemento li:
li.appendChild(link);

Criando um novo elemento i:
const i = document.createElement('i');
Criando o elemento classe e adicionando valores:
i.className = 'fa fa-remove';
Adicionando como filho o elemento link ao elemento li:
link.appendChild(i);
// Ou
// link.innerHTML = ' <i class="fa fa-remove"></i>'


Adicionando como filho da lista de itens o item:
document.querySelector('ul').appendChild(li);