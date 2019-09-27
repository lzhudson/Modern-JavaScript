Tipos de conversão
No javascript podemos usar objetos nativos da linguagem como o 'Number()' e o 'String()',
para converter variaveis para esses tipos.

Usando Number
let valor = '5'; Variavel com o valor 5 porém no formato de String
Number(valor); Usando o objeto Number, podemos converter o formato da variavel para Numero.
Ex: 
  Number('5'); Saida: 5;
parseInt(120.40); A função parseInt(value), retorna um valor inteiro ou seja tudo antes da chamada do ponto no caso acima 120.
parseFloat(120.35); A função parseFloat(value), retorna um valor decimal, caso ele seja inteiro retorna o valor por inteiro sem adicionar zeros.
value.toFixed(2); Retorna o valor com 0 após o numero (mesmo se o numero for inteiro). Ex:
  20.toFixed(2); Saida: 20.00
  20.50.toFixed(1); Saida: 20.5;
  20.340.toFixed(3); Saida: 20.340;

Usando String
let valor = 5; Variavel com valor 5 porém no formato de Number;
String(valor); Usando o objeto String, podemos converter o formato da variavel para Numero.
Ex: 
  String(5); Saida: '5';
Obs: Em expressões matematicas primeiro ocorre a operação que está contida para depois converter o formato da variavel para String.
Ex:
  String(5+5); Passo 1: Soma os valores; Passo 2: Converte; Saida: 10;
value.toString(); A função ao toString(), coloca o valor da variavel passada antes para o formato String.
Ex:
  5.toString(); Saida: '5';

Concatenação de Strings
Se o tipo de uma variavel for String e a mesma for somada com uma outra do tipo String ou Number, a variavel ira juntar a duas ou seja concatenalas.
Ex:
  '5' + 5 = 55; Note que uma das variaveis está no formato String mesmo que seu valor seja do tipo numero o javascript acaba juntando as duas.
  '5' + 'a' = '5a';
Obs: Para corrigir seria necessario converter o valo do tipo String para numero.