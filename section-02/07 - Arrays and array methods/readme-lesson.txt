Arrays: São objetos de altos niveis, semelhantes a listas.
Podem ser criado com valores de tipos iguais como um array somente de numeros ou um array misto com strings, objetos, outros arrays, boolean e etc.
Arrays começam com o indice 0, ou seja o primeiro valor sempre é acessado a partir do indice 0.
Ex:
  Criando um array literal:
  const numeros = [1,2,3,4,5];
  Criando um array usando o objeto Array:
  const numbers2 = new Array(1,2,3,4,5);
  Misto: const misto = [22, 'hello', [1,2,4], {nome:'Hudson'}, undefined];

Pegar o tamanho de um array:
length = Tamanho, retorna o tamanho do array.
let val = numeros.length; 

Checando se é realmente um array:
Array.isArray(array): usamos o objeto nativo array, para chamar a função isArray() que verifica se o parametro passado é um array.

Pegando um valor do array:
let valor = numbers[0]; Retorna o primeiro valor do array;
let valor2 = numbers[3]; Retorna o quarto valor do array.

Inserindo um valor no arrays:
array[position] = valor;
Insere o valor em uma determinada posição do array, se a posição estiver ocupada por um valor ela é modificada pelo valor passado ou se a posição passada for muito "longa", as posições atenriores a ela ficarão ocupadas com um valor vazio.

Procurando um valor:
let valor = numbers.indexOf(value); Retorna o indice em que o valor passado como parametro ocupa se não houver o valor ele retorna -1.
Ex:
[1,2,3,4,5].indexOf(2)// Saida: 1
[1,2,3,4,5].indexOf(10)// Saida: -1

Adicionando item ao final do array:
numbers.push(value): Adiciona o valor no final do array e como callback retorna o tamanho do array.
Ex:
['Luiz', 'Hudson', 'Evangelista'].push('Holanda'); Saida: ['Luiz', 'Hudson', 'Evangelista', 'Holanda'];
Callback: 4

Adicionando item no inicio do array:
numbers.unsfhit(value): Adiciona o valor no inicio do array e como callback retorna o tamanho do array.
Ex: 
[1,2,3,4,5].unsfhit(6); Saida: [6,1,2,3,4,5];

Removendo item do final do array: 
numbers.pop(): Remove o ultimo item do array e como callback retorna o item removido.
Ex:
[1,2,3,4,5]; Saida: [1,2,3,4];

Removendo item do inicio do array:
numbers.shift(): Remove o item do inicio do array e como callback retorna o item removido.
[1,2,3,4,5]; Saida: [2,3,4,5];

Retornando um pedaço de Array em formato de array:
array.slice(init, end): Retorna um novo array a partir do indice de inicio até o indicie final, se não for passado um indice de fim, ele retorna o array resto do array a partir daquela posição:
Ex: 
  var numbers = [1,2,3,4,5];
  numbers.slice(1, 3): Saida: [2,3];
  numbers.slice(1,): Saida: [2,3,4,5];

Retornando o array de forma reversa(de trás para frente):
array.reverse();
Ex:
  var numbers = [1,2,3,4,5];
  numeros.reverse(); Saida: [5,4,3,2,1];

Concatenando arrays: 
array.concat(array): Retorna um array, concatenado com o array passado por parametro.
Ex:
  var numeros = [1,2,3,4,5];
  var numbers2 = [6,7,8,9,10];
  numeros.concat(numbers2); Saida: [1,2,3,4,5,6,7,8,9,10];

Odernando(sorteando) o array:
array.sort(): Retorna o array na ordem considerando o formato unicode.
Unicode: Unicode é um padrão que permite aos computadores representar e manipular, de forma consistente, texto de qualquer sistema de escrita existente. Publicado no livro The Unicode Standard[1],[2] o padrão consiste de pouco mais de 107 mil caracteres[3], um conjunto de diagramas de códigos para referência visual, uma metodologia para codificação e um conjunto de codificações padrões de caracteres, uma enumeração de propriedades de caracteres como caixa alta e caixa baixa, um conjunto de arquivos de computador com dados de referência, além de regras para normalização, decomposição, ordenação alfabética e renderização.
Ex: 
  [200,300,100,300,5]; Saida: [100,200,300,300,5];
Usando função de comparação
[200,300,100,300,5].sort(function(a,b)){
  return a - b;
} Saida: [5,100,200,300,300];
Reverso:
[200,300,100,300,5].sort(function(a,b)){
  return b - a;
} Saida: [300, 300, 200, 100, 5];

Procurando valor:
array.find(function()): Retorna o primeiro valor que satisfazer a função teste fornecida.
function menor50(num) {
  return num > 50;
}
Ex:
[1,2,100,40,60].find(menor50); Saida: 100;