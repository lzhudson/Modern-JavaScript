addEventlistener: registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela, ou um XMLHttpRequest. Espera que o elementor receba uma interação do usuario com algum evento seja do mouse, teclado e etc.
Syntax:
element.addEventlistener('tipo-de-evento', callback);
O codigo acima chama uma função de addEventlistener, e ao tipo de evento que acontecer no elemento dispara uma função de callback que é passada como segundo parametro.
Ex:
document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
function onClick(e) {
  console.log('Clicked');
}
O codigo acima espera uma função de click no botão que possui a classe ".clear-tasks", onde se o botão for clicado dispara um função de callback que exibe um console.log();

Objeto Event: Representa a interface de eventos do dom possuindo metodos e propiedades sobre o evento disparado.
Ex:
document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
function onClick(e) {
  let val;
  val = e;
}
O codigo acima dispara um evento caso o botão "clear-tasks" seja clicado, a função que o botão dispara após o click, recebe um parametro chamado (e)que é retornado opcionalmente como callback da função addEventlistener onde há informações sobre o evento, como seus metodos e propiedades.

e.target: A propiedade target do objeto e, retorna o elemento em si ou o alvo no qual aconteceu o evento.
document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
function onClick(e) {
  let val;
  val = e.target;
}
O codigo acima dispara um evento caso o botão "clear-tasks" seja clicado, a função que o botão dispara após o click, recebe um parametro chamado (e)que é retornado opcionalmente como callback da função addEventlistener onde o mesmo aloca a propiedade target ou seja o alvo no qual aconteceu o evento e retorna elemento em si.

val = e.target.id: Retorna o id do elemento no qual aconteceu o evento.
val = e.target.className: Retorna a lista de classes do elemento no qual aconteceu o evento no formato de String.
al = e.target.classList: Retorna a lista de classes do elemento no qual aconteceu oo evento no formato de Array.
e.target.innerText = 'Hello': Altera o texto incluso no elemento no qual aconteceu o evento.
val = e.type: Retorna o tipo de evento que aconteceu no elemento que sofreu a ação de evento.
val = e.timeStamp: Retorna o tempo decorrido do evento.
val = e.offsetY: Retorna a posição do eixo vertical do elemento referente aonde o elemento foi disparado.
val = e.offsetX: Retorna a posição do eixo horizontal do elemento referente aonde o elemento foi disparado.