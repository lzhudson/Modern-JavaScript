Funções: São blocos de codigos encapsulados e reutilizaveis.
Declarações de funções:
function nameFunction() {
  
}
function nameFunction(arguments){
  return arguments;
}
Argumentos: são valores que são passados para a função que podem ser usados dentro de seu escopo.
Argumentos podem ter valores padrões como por exemplo:
function nameFunction(val = 1){
  return val;
}
Se nenhum valor passado por parametro, o valor retornado irá ser o numero 1.
Return: Toda função preferencialmente deve retorna algo.

Execução de função:
console.log(greet); // Retorna a função em si, como seus argumentos e o que seu codigo faz.
console.log(greet());// Com o uso dos "()" executamos a função em si.

Funções em formato de expressões:
Basicamente funcionam como a declaração de funções convencionais, porém podem ser anonimas ou seja sem nomes.

var a = function() {
  return 1 + 1;// Saida: 2
}

IIFES(IMMIDIATLEY INVOKAABLE FUNCTION EXPRESSIONS ou funções auto executaveis): São funções que são executadas logo após serem definidas.
Syntax:
(function(){
  // bloco de codigo
})();
Obs: é necessario o uso dos "()" logo apos a função pois assim ela executa automaticamente.
(function(){
  console.log('IFFE Ran..'); Saida: IFFE Ran..
})();

(function(name){
  console.log('Hello ' + name); Saida: Hello Hudson
})('Hudson');

Funções em objetos: Objetos também podem receber funções que no caso são chamados de metodos.
Syntax: const objeto = {
  funcao: function(){
    // bloco de codigo
  }
}
Chamada:
objeto.funcao(); 
Ex:
  const todo = {
  add: function(){
    console.log('Add todo...');
  }, 
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}
todo.delete = function() {
  console.log('Delete todo...');
}
todo.add();// Saida: Add todo ...
todo.edit(22); // Saida: Edit todo 22
todo.delete(); // Saida: Delete todo...
