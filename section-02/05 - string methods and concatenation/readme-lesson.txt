String: São uma sequência de caracteres, que podem ser textos com caracteres especeais ou combinados com varios tipos de valores.
Podem ser usadas tanto com aspas duplas ou simples.
Ex:
  let nome = 'Hudson';
  let sobrenome = "Holanda";

Escape de caracteres ou escape notation: Sempre que desejamos escapar um caractere significa usar caracteres especiais dentro de strings usamos a '\' (barra invertida) antes do caractere que queremos escapar.
Ex:
  let texto = 'Uma fonte d'agua surgiu em minha cidade natal.';
  Note que acima o javascript irá ver a segunda aspas (d'agua) como se estivessimos usando para fechar aquela sequência de caracteres. Para resolver basta escapar o caractere usando a '\'.
  let texto = 'Uma font d\'agua surgiu em minha cidade natal.';

Concatenação de Strings: Essa expressão 'concatenar',é derivada da palavra juntar ou seja desejamos unir uma ou mais cadeia de caracteres.
Ex:
  let nome = 'Hudson';
  let sobrenome = 'Holanda;
  let nomeCompleto = nome + sobrenome; Saida: HudsonHolanda.
Obs: note que o nome está completamente junto, para solucionar basta colocar um caractere de espaço entre as duas variaveis. 

Propiedade length(tamanho): Retorna o tamanho da string ou o numero de caracteres.
Ex:
  let nome = 'Hudson';
  nome.length; Saida: 6

Metodos de Strings:
String.concat(string, strings ou []): Concatena uma ou mais strings, se desejar concatenar mais de uma usar o operador virgula para separar cada string.
Ex: 
  let inicialTime = 'Fla';
  let finalTime = 'mengo';
  inicialTime.concat(finalTime);

Mudando o case da string(minuscula para maiuscula ou vice e versa):
Ex:
  let saudacao = 'bom dia';
  saudacao.toUpperCase(): Retorna a string toda em caracteres maiusculos ou em caixa alta.
  saudacao.toLowerCase(): Retorna a string toda em caracteres minusculos ou em caixa baixa.
  Ex: 
    saudacao.toUpperCase(); Saida: 'BOM DIA';
    saudacao.toUpperCase(); Saida: 'bom dia';

Pegar o primeiro caractere de uma string:
Usar a notação de array em strings funciona. 
let hello = 'Hello';
hello[0]; Saida: H;

String.indexOf('value'): Retorna o primeiro indice que encontrar referente ao valor passado.
'Hudson'.indexOf(u); Saida: 1;

String.lastIndexOf('value'): Retorna o primeiro indice que encontrar referente ao valor passado porém inicia da direita para esquerda.
'Hudson'.indexOf('o'); Saida: 4;

String.charAt('value')ou(value); Retorna a posição em que o caractere passado pelo parametro está localizado ou seja retorna o indice referente ao caractere.
'Hudson'.charAt(2); Saida: 'D';

Pegando o ultimo caractere:
'Hudson'.charAt('Hudson'.length - 1); Saida: 'n';

String.substring(value, op: value); Retorna um subconjunto de uma string de um indice e outro, ou até o final da string.
Obs: o segundo parametro é opcional, caso não seja passado o subconjunto sera do primeiro valor até o final da string.
Ex: 
  'Hudson'.substring(0, 4); Saida: Hudso;


String.slice(init, op: end); Retorna uma parte de um array de um subarray criado de um indice e outro, ou até o final da array.
Obs: o segundo parametro é opcional, caso não seja passado o array sera do primeiro valor até o final da array.
Obs²: se o valor for negativo isso quer dizer que começa do fim do array.
Ex:
  'Hudson'.slice(0, 4); Saida: Hudso;
  'Hudson'.slice(-2); Saida: ond;

String.split('separator'): Retorna um array quebrando-o no separador informado.
Ex:
  'Luiz Hudson Evangelista Holanda'.split(' '); Saida: ['Luiz', 'Hudson', 'Evangelista', 'Holanda'];

String.replace('oldString', 'newString'): Substitui a primeira string passada por parametro pela segunda string.
Ex:
  'Hudson Holanda'.replace('Hudson','Jack'); Saida: 'Jack Holanda';

String.includes('value'): Retorna verdadeiro se conter um determiado elemento dentro da string e falso se não contiver.
Ex:
  'Hello There'.includes('Hello'); Saida: true;