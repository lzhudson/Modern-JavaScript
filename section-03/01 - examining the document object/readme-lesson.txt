Document Object:A interface Document serve como um ponto de entrada para o conteúdo da Página ( a árvore DOM, incluindo elementos como <body> e <table>) e provê funcionalidades globais ao documento (como obter a URL da página e criar novos elementos no documento).

document: Retorna todo o objeto document com todas as suas propiedades e metodos.

document.all: Retorna todas as tags incluidas no documentos em formato de array.

Obs: Podem ter diferença em retornos de listas sendo classficadas em HTMLCollection ou NodeList, os HTMLCollections não podem ser interados com alguns metodos como por exemplo forEach, para que possa percorrer essa lista de itens é necessario transformar o HTMLCollection em um array com um metodo do objeto Array, from.

Ex:
document.all.
Array.from(document.all); Retorna uma lista iteravel.

document.all.length: Retorna o tamanho da lista de todos os elementos includos no document.

document.head: Retorna a tag head e todos os elementos que estiverem incluidas nela.

document.body: Retorna a tag body todos os elementos que estiverem incluidas nela.

document.domain: Retorna o dominio em que o documento está incluido.

document.URL: Retorna a url do documento.

document.characterSet: Retorna o tipo de charset do caractere,

document.contentType: Retorna o tipo de documento.

document.forms: Retorna todos os formularios que estão incluidos no documento.

document.forms[0]: Retorna apenas um elemento da lista de formularios do documento, nesse caso o primeiro formulario.

document.forms[0].id: Retorna o id do formulario, nesse caso o id do primerio formulario de todo o documento.

document.forms[0].method: Retorna o metodo do formulario, nesse caso o metodo do primeiro formulario do documento.

document.forms[0]: Retorna a action(pagina na qual o formulario é enviado) do formulario, nesse caso o action do primeiro formulario.

document.links: Retorna uma lista de todos os links presentes na pagina.

document.links[0]: Retorna uma item da lista de links, nesse caso o primeiro item da lista.

document.links[0].id: Retorna o id do link, nesse caso o id do primeiro link da lista da pagina.

document.links[0].className: Retorna o nome de todas classes de um item, nesse caso a lista de classe do primeiro item da lista de links.

document.links[0].classList: Retorna todas as classes em forma de lista do primeiro item da lista de links.

document.links[0].classList[0]: Retorna a primeria classe da lista de classes do primeiro item da lista de links da pagina.

document.images: Retorna a lista de imagens da pagina em forma de lista.

document.scripts: Retorna a lista de scripts da pagina.

document.scripts[3]: Retorna o terceiro item da lista de scripts;

document.scripts[3].getAttribute('src'): Retorna o atributo do item da lista de scripts.

Iterando uma lista de itens:
var scripts = document.scripts;
var scritpsArr = Array.from(scripts);
Trasnforma a lista de itens HTML em um array convencional.

scritpsArr.forEach(function(script){
  console.log(script);
})
