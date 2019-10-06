Condicionais IF: São estruturas de decisão que controlam o fluxo de uma aplicação.
Operadores: 
==: Operador de igualdade convencional: Verifica se o valor é igual apenas testa pelo valor.
===: Operador de igualdade estrito: Verifica se o valor é igual testando o tipo e o valor.
! = Operador de negação: Operador de negação, ou seja nega o que vem logo após.
!= = Operador de não igualdade (diferente) compara se o valor é diferente do que é usado na comparação.

!= = Operador de não igualdade (diferente) estrito compara se o valor e o tipo é diferente do que é usado na comparação.
Sintaxe:
if(true) {
  // Executa esse bloco, se a condição a cima for verdadeira.
} else {
  // Executa esse bloco, se a condição passada for falsa.
}
let id = 100;
id = '100';
// Igualdade testando somente pelo Valor
if(id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: Correct, pois o valor da variavel id é igual 100 mesmo que seu tipo não seja numero.
! = Operador de negação, nega habitualmente o que vêm depois.
Ex:
!true = false;
1 > 2 = false;
!(1 > 2) = true;
id = 100;
// Testando a não igualdade( a diferença )
if(id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: na condição verifica se a variavel id não é igual a variavel 101, se for verdadeiro retorna correct se não retorna incorrect. Saida: Correct.

// Igualdade testando pelo valor e pelo tipo.
id = '100';
if(id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: incorrect, pois o valor da variavel id é igual 100 porém o operador de igualdade estrito (===) testa também pelo e o tipo da variavel id é String já o tipo da variavel no qual estamos comparando é do tipo inteiro.

// NOT EQUAL TO TESTING TO VALUE
id = 100;
if(id !== 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: Correct, pois o valor da variavel id é igual 101, e nesse caso nem o valor e nem o tipo são iguais.

Ou seja no operador estrito para que a condição possa ser verdadeira o tipo e valor devem ser iguais aos que a condicional referencia.

Testando se um valor é idefinido:
id = undefined;
// Test if undefined
if(typeof id !== 'undefined') {
  console.log(`The id is ${id}`);
} else {
  console.log('NO ID');
}
Saida: NO ID, pois o valor da variavel é undefined e o usando operador typeof temos o retorno do tipo da variavel ou expressão passada.

typeof: retorna o tipo da variavel ou condição passada a sua frente.

Operadores de >, <, >=, <=:
>: Maior: testa se o valor ou expressão é maior que outro.
<: Menor: testa se o valor ou expressão pe menor que o outro.
>=: Maior ou igual: Testa se o valor ou expressão é maior ou igual que o outro.
<=: Menor ou igual: testa se o valor ou expressão é menor ou igua. que o outro.
Ex: 
id = 100;
  if(id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: Incorrect.
if(id >= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: Correct
if(id < 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: Correct
if(id <= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
Saida: Correct

Condicional else if:
if(false) {

} else if (true) {

} else {

}
A condicional else if nos ajuda que ao executarmos um if e a primeira condicional não for verdadeira poderemos testar outra concional por outro valor.
Ex:
  se(10 > 20) {
    10 é maior que 20
  } senão se (10 > 1){
    10 é maior que um
  } senão {
    expressão invalida
  }
Obs: a condicional else if(senão se), só ira funcionar se a condição acima if(se) não for verdaeira.

Operadores Logicos: 
São operadores no qual nos referenciamos por logica são o AND(E) e o OR(ou).
Ex: AND(e) &&
  variavel numero = 10;
  se numero > 1 && numero > 5
    retorna verdadeiro
  No exemplo acima usamos o operador AND(e) nessa condição porém a função só retornará verdadeiro se as duas expressões forem verdadeiras por isso o uso e.
  Exemplo do mundo real: Para o estudante ir a escola ele tem que usar calça e sapato preto. Se ele não atender a nenhum desses requisitos ele não pode ir a escola.

Ex: OR(ou) ||
  variavel numero = 10;
  se numero > 1 || numero > 5
    retorna verdadeiro
  No exemplo acima usamos o operador OR(ou) nessa condição porém a função só retornará verdadeiro se uma das duas expressões forem verdadeiras por isso o uso ou.
  Exemplo do mundo real: Para que eu possa trabalhar como dev eu tenho que saber front-end ou back-end se eu souber ao menos uma dessa duas coisas poderei trabalhar como dev.

Operador Ternario:
Operador ternario é uma forma de reduzir a escrita de uma condição if e esle, porém só recomendado o uso em expressões logicas simples.
Sintax: condição ? true : false
Ex: 
  num = 11;
  num > 10 ? true : false
  Se o numero acima for maior que 10 ele retorna true ou seja o if é representado pelo sinal de "?" já se não for retorna o else que é representado pelo sinal de ":".

  Atribuição de variaveis:
  let num = 20 > 30 ? 'Oi' : 'Olá';
  console.log(num); 
  No exemplo acima utilizamos o operador ternario para colocarmos um valor de uma string dentro da varivel num. Onde dizemos que se o numero 20 > 30 a variavel é atribuida a 'Oi' se não for maior que 20 é atribuida a string 'Olá'.
