Sobre Laços de repetição ou loops:
Sâo formas de executar um codigo ou varios conforme um determinado numero de vezes.

Estruturas:
For(para):
Syntax: for(init variable; condition;increment){
  // bloco de codigo que executa
}
for(let i = 0; i < 10; i++) {
  console.log(i);
}
No bloco acima temos a inicialização da variavel i, logo após temos a condição e o incremento. 
A execução acontece da seguinte forma, se a condição passada for verdadeira ele executa o codigo contido dentro do bloco e logo após incrementa.
Obs: não é necessario a inicialização da variavel, condição ou incremento, para que a estrutura funcione basta conter os dois ";", porém isso gera um loop infinito.

Palavras reservada Continue e Break;
Continue: A palavra reservada faz com que pule uma determinada execução.
Ex:
for(let i = 0; i < 10; i++) {
  if(i === 2) {
    console.log('2 is my favorite number');
    continue;
  }
}
No codigo acima se o a variavel i for igual a 2, exibe a mensagem dentro do console e executa o continue pulando para proxima instrução.

Break: A palavra reservada faz com que o codigo pare e saia do bloco de execução.
Ex:
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log('Number: ' + i);
}
No codigo acima ao chegar no numero 5, entra dentro de uma estrutura condicional, e se for verdadeira a comparação, executa o console e logo após o break, fazendo com que a execução seja parada e pulando para fora da estrutura.

While(enquanto): Outro exemplo de estrutura de repetição porém executa enquanto, o valor condicional passado for diferente de falso.
Ex:
let i = 0;
while(i < 10) {
  console.log('Number ' + i);
  i++;
}
O codigo acima executa enquanto a variavel i for menor que 10.
Note que a inicialização da variavel é feita fora da estrutura e o incremento é feito dentro do bloco de codigo no qual é executado.

Do while(faça, enquanto): Nessa estrutura, temos a execução de pelo menos uma vez do codigo, mesmo que a condição nao seja atendida.
Ex:
let z = 100;
do {
  console.log('Number ' + z);
  z++;
}
while(z < 10);
No codigo acima podemos ver que a condição passada dentro da estrutura é falsa, mas mesmo asssim o codigo é executado pelo menos uma vez.

Loops com array: Podemos usar uma estrutura de repetição para percorrer um array.
Ex:
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
Metodo convencional de acesso de um item do array: cars[pos];
Com estrutura de repetição:
for(let i = 0; i < cars.length; i++) {
  console.log(cars[i]); Saida: Ford, Chevy, Honda, Toyota.
}
Foreach: Executa uma dada função em cada elemento de um array.
Syntax:
array.forEach(function(item, index,array)){
  console.log(item);
}
Ex:
cars.forEach(function(car, index, array){
  console.log(car, index, array);
  Saida: 
  Ford 0 [ 'Ford', 'Chevy', 'Honda', 'Toyota' ]
  Chevy 1 [ 'Ford', 'Chevy', 'Honda', 'Toyota' ]
  Honda 2 [ 'Ford', 'Chevy', 'Honda', 'Toyota' ]
  Toyota 3 [ 'Ford', 'Chevy', 'Honda', 'Toyota' ]
});

Map: invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
Callback:Ela é tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.
Syntax: 
array.map(function(item, index, array)){
  return item;
}
Ex:
const users = [
  {id: 1, name: 'Jhon'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];
const ids = users.map(function(user){
  return user.id;
});
Saida: 1,2,3,4

for in: interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.
Syntax: 
for(let variable in object) {
  console.log(variable);
  console.log(object[variable]);
}
Ex:
const user = {
  firstName: 'Jhon',
  lastName: 'Doe',
  age: 40
}
for(let x in user){
  console.log(x);
  console.log(`${x}: ${user[x]}`);
}
Saida: firstName, lastName, age;
firstName: Jhon
lastName: Doe
age: 40