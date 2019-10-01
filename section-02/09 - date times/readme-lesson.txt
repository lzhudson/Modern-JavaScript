Objeto Date:
Objeto date nos permite acessar informações do tipo data e hora. Nele podemso ter acesso ao dia do mês, o mês, o ano, a hora atual, o minuto atual, segundo atual entre diversos outros metodos.
Chamando:   
const hoje = new Date();
Usamos a palavra reservada new para instaciarmos(espelharmos) o objeto date em uma variavel para que possamos acessa-la e modifica-la.

Modificando valores:
let birthday = new Date('10-22-2000 11:25:00'); Saida: 2000-10-22T11:25:00.000Z
birthday = new Date('September 10 2000');Saida: 2000-09-10T03:00:00.000Z
birthday = new Date('9/10/2000');Saida: 2000-09-10T03:00:00.000Z

Pegando valores:
val = today.getMonth(); Saida: Retorna o mês atual.
Obs: O primeiro mês (janeiro) tem indice 0.
val = today.getDate(); Saida: Retorna o dia atual.
val = today.getDay(); Saida: Retorna o dia da semana.
Obs: Domingo(primeiro dia do mês) é baseado em 0.
val = today.getFullYear();Saida: Retorna o ano atual.
val = today.getHours();Saida: Retorna a hora atual.
val = today.getMinutes();Saida: Retorna o minuto atual.
val = today.getSeconds();Saida: Retorna o segundo atual.
val = today.getMilliseconds(); Saida: Retorna os milisegundos atuais.
val = today.getTime(); Saida: Retorna o a data e as horas em formato de milisegundos.

Modificando valores:
birthday.setMonth(2);Saida: modificando o mês para dois, que me retorna o mês março.
birthday.setDate(12); Saida: modificando a data para o dia 12.
birthday.setFullYear(1985); Saida: modificando o ano para o 1985.
birthday.setHours(3); Saida: Modificando a hora para o dia 13.
birthday.setMinutes(30); Modificando os minutos para 30.
birthday.setSeconds(25); Modificando os segundos para 25.
