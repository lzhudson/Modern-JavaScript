Switch: 
Semelhantes as estruturas de condição if, elas permitem separação por blocos de codigo que são os cases, porém no switch testamos apenas um calor ou seja se aquele valor ou variavel passado por parametro, é igual a algum dos cases do switch.
Syntax:
switch(value) {
  case value:
    bloco de codigo 
  break;
  case value2:
    bloco de codigo 
  break;
  case 'value':
    bloco de codigo 
  break;
  default:
    bloco de codigo.
  break;
}
case(caso): usamos essa palavra reservada junto com valor percentence para que se valor passado por parametro seja igual ao desse case ele executa o bloco de codigo até encontrar a palavra reservada break.
break(para): usamos essa palavra reservada para darmos uma parada no bloco de codigo, mesmo que haja algum codigo logo após o break, ele não sera executado.
default(padrão): faz com que se nenhum dos cases for verdadeiro ele executa o case padrão ou seja um else para if.

const color = 'yellow';

switch(color)// testa o valor da variavel color {
  case 'red': // Se color for igual a 'red', executa o bloco de codigo abaixo.
    console.log('Color is red');
    break;// Para a execução de codigo e sai do switch;
  case 'blue':
    console.log('Color is blue');
    break;
  default:// Se nenhum dos casos for verdadeiro executa eo bloco de codigo abaixo.
    console.log('Color is not read or blue');
  break;
}

let day;
switch(new Date().getDay()) {
  case 0:// Se o retorno for igual a 0 atribui a variavel day o valor abaixo.
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday'
  break;
  case 2:
    day = 'Tuesday'
  break;
  case 3:
    day = 'Wednesday'
  break;
  case 4:
    day = 'Thursday';
  break;
  case 5:
    day = 'Friday';
    break;
  case 6: 'Satudary';
    break;
}