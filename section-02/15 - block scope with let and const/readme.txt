Escopo: É um escopo delimitante aos quais os valores estão associados.

Escopo Global: É o contexto geral do seu codigo ou seja todos os valores que são declarados nesse escopo podem ser acessados.
Ex:

Inicio codigo:
var numero = 10;
console.log(10);
function exibeNumero(){
  return numero;
}
Fim Codigo

Note que tanto dentro do console quanto dentro da função conseguimos acessar a variavel numero.

Escopo Local ou de Escopo de Bloco: São valores que só podem ser acessados em um contexto especifico no qual foi designado.
Inicio do codigo:
function numero(){
  var numero1 = 10;
  let numero2 = 20;
}
console.log(numero1);
console.log(numero2);
Fim Codigo
Observe que o segundo console dara erro pois variaveis declaradas com a palavra reservada let estão sujeitas a escopo loca, ja variaeis declaradas com var estão sujeitas a todo escopo do programa embora estejam em escopo local.