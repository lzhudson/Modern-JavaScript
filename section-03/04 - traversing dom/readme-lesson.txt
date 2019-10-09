Atravessando o dom:
const list = document.querySelector('ul.collection');// Retorna uma nodelist com todas as ul (listas não ordenadas) que possuem a classe "collection";
const listItem = document.querySelector('li.collection-item:first-child');//Retorna a primeira li que possui a classe collection-item.

Propiedades (pais e filhos):
Selecionando filhos nodes
list.childNodes; // Retorna em forma de uma lista todos os filhos do elemento, incluindo textos, comentarios, elementos HTML e etc.
val = listItem.childNodes[0].nodeName; // Retorna o nome do elemento node do primeiro filho da lista de items.
val = listItem.childNodes[1].nodeType; // Retorna o nome do elemento node do primeiro filho da lista de items.

Tipos:

// 1 - Element
// 2 - Attribute 
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

Referencias: 
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName

https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

Selecionando filhos:
list.children; // Retorna todos os filhos selecionando somente os elementos.
val = list.children[1]; // Retorna o segundo filho da lista.
list.children[1].textContent = 'Hello'; // Altera o conteudo do segundo filho da lista.

Filho do filho:
list.children[3].children[0].id = 'test-link'; // Insere o id 'test-link' no filho do terceiro filho da lista de items.
val = list.children[3].children[0];// Seleciona o primeiro filho do filho do terceiro elemento da lista.

Selecionando o primeiro filho:
val = list.firstChild; // Retorna o primeiro filho da lista seja ele um elemento, texto, comentario e etc.
val = list.firstElementChild; // Retorna o primeiro elemento filho.

Selecionando o primeiro filho:
// Last Child
val = list.lastChild; // Retorna o ultimo filho da lista seja ele um elemento, texto, comentario e etc.
val = list.lastElementChild; // Retorna o ultimo elemento filho.

Contando a quantidade de elementos filhos:
list.childElementCount;// Retorna a quantidade de elementos filhos daquele elemento.

Selecionando pai do elemento:
val = listItem.parentNode;// Retorna o pai do elemento.
val = listItem.parentElement; // Retorna o elemento pai do elemento selecionaod.
val = listItem.parentNode.parentNode;// Retorna o pai do pai do elemento.

Selecionando o proximo filho:
val = listItem.nextElementSibling;// Retorna o proximo elemento do elemento.
val = listItem.nextSibling.nextSibling; // Retorna o proximo seja um elemento html, texto, comentario e etc

Selecioando o filho anterior:
val = listItem.previousSibling;// Retorna algo anterior seja um elemento HTML, texto, comentario e etc.
val = listItem.previousElementSibling;// Retorna o elemento HTML anterior.
