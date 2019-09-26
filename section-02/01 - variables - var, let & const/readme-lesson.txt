Keywords = var, let & const

Criando uma variavel
keyword name-variable = value;
var name = 'Jhon Doe';

Sobreescrevendo variavel
name = 'Steve Smith';

Iniciando uma variavel
var greeting;
Obs: o valor da variavel acima é definido como 'undefined' ou seja não há um valor definido ou datatype.

Boas Práticas para declarar nome de variaveis
Utilizada ao longo do curso:
Se a variavel possuir mais de um nome como por exemplo: Nome Inicial
Na arquitetura Camel Case: nomeInicial
Note que a segunda palavra fica com a primeira letra maiscula e isso vale para duas ou mais palavras.

VAR
var nome = 'Hudson Holanda';
nome = 'Luiz Evangelista';

LET 
let primeiroNome = 'Hudson';
let ultimoNome = 'Holanda';
primeiroNome = 'Luiz';
ultimoNome = 'Evangelista';

CONST
A keyword (palavra chave) acima cria um valor constante onde ele não pode ser reatribuido ou alterada depois e sempre ao inicializarmos uma constante devemos colocar seu valor.

const pi = 3.14;
pi = 5; // Error constantes não podem ter seu valor primitivo reatribuido.

Obs: No caso de objetos e array ele pode sofrer uma mutação (alter ação, adição, exclusão)de valor.

const pessoa = {
  nome: 'Hudson',
  idade: 18
}
pessoa.idade = 20;
pessoa.nome = 'João';

const numeros = [1,2,3,4,5];
numeros.push(6); // Este metodo adiciona um valor no final do array.  

