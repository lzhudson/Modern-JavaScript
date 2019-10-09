Selecionando multiplos elementos no documento:
document.getElementsByClassName('nome-da-classe'): Retorna um HTML collection com todos os elementos que poosuem a classe passada por parametro.
Ex:
const items = document.getElementsByClassName('item');

Encadeamento de Metodos de seleção:
document.querySelector('query-de-selecao').getElementsByClassName('nome-da-classe'): Retorna um HTML collection selecionando todos os elementos que possuem a classe passada por parametro que estão incluidos no elemento de seleção pai.

document.getElementsByTagName(): Retorna um HTML collection com todos os elementos daquela tag passada por parametro.

Convertendo HTML Collection em um Array: 
const items = document.getElementsByClassName('li');
lisArray = Array.from(items);

Iterando uma lista de elementos:
Opções: Trasnforme a HTML Collection em um array convencional com o Array.from(lista) ou percorrer a lista com um for convencional.
Ex:
const items = document.getElementsByClassName('li');
lisArray = Array.from(items);
lisArray.forEach(function(item,index){
  item.textContent = `${index}: Hello`;
});

Ou

for(let i = 0; i < lisArray.length; i++){
  lisArray[i].style.background = '#f4f4f4';
}

document.querySelectorAll('seletor'): Seleciona todos os elementos conforme o seletor passado por parametro.
Ex:
const liOdd = document.querySelectorAll('li:nth-child(odd)');// Retorna uma nodelist de todas as li porém somente as li em posições pares.
const liEven = document.querySelectorAll('li:nth-child(even)');// Retorna uma nodelist de todas as li porém somente as li em posições impares.