Mouse Events: São eventos que acontecem no mouse ou touchpad de seu computador.

Click: O evento de click, monitora se a tecla esquerda do mouse foi clicada, se sim executa tão ação.
Ex:
let btnHome = document.querySelector('.botao-home');
O codigo acima seleciona um elemento da pagina que contem a classe "botao-home" e o armazena na variavel btnHome.
btnHome.addEventListener('click', function(){
  btnHome.style.backgroundColor = 'green';
});
O metodo acima adiciona um evento de escuta no botão que ao ser clicado ele dispara uma função que ocasiona a mudança do fundo da cor do botão.

Doubleclick: O evento de click, monitora se a tecla esquerda do mouse foi clicada duas vezes, se sim executa tão ação.
Ex:
let btnHome = document.querySelector('.botao-home');
O codigo acima seleciona um elemento da pagina que contem a classe "botao-home" e o armazena na variavel btnHome.
btnHome.addEventListener('dblclick', function(){
  btnHome.style.backgroundColor = 'green';
});
O metodo acima adiciona um evento de escuta no botão que ao ser clicado duas vezes ele dispara uma função que ocasiona a mudança do fundo da cor do botão.

Mousedown:O evento de mousedown, monitora o click do usuario enquanto está dentro do elemento ou seja se o usuario clicou e está dentro do elemento segurando o click.
Obs: Se difere do click, pois o click monitora uma ação completa que é enquanto o botão apontador é pressionado e solto dentro do elemento. No mousedown é possivel segurar o click e locomover dentro do elemento, como por exemplo onde clicamos e arrastamos uma pasta para algum lugar do computador.
Ex:
let btnHome = document.querySelector('.botao-home');
O codigo acima seleciona um elemento da pagina que contem a classe "botao-home" e o armazena na variavel btnHome.
btnHome.addEventListener('mousedown', function(){
  btnHome.style.backgroundColor = 'green';
});
O metodo acima adiciona um evento de escuta no botão que ao ser clicado e segurado ele dispara uma função que ocasiona a mudança do fundo da cor do botão.

Mouseup: O evento de mouseup, monitora o click do usuario enquanto está dentro do elemento ou seja se o usuario clicou no apontador e logo em seguida é solto dentro elemento.
Obs: É o contraposto do mousedown, onde ao inves de clicarmos e segurarmos esse evento monitora o click.
Ex:
let btnHome = document.querySelector('.botao-home');
O codigo acima seleciona um elemento da pagina que contem a classe "botao-home" e o armazena na variavel btnHome.
btnHome.addEventListener('mouseup', function(){
  btnHome.style.backgroundColor = 'green';
});
O metodo acima adiciona um evento de escuta no botão que ao ser clicado e solto dentro do elemento ele dispara uma função que ocasiona a mudança do fundo da cor do botão.

Mouseenter: Esse tipo de evento monitora a entrada ou seja se o mouse ou touchpad está dentro(em cima) do elemento no qual está adicionado o evento.
Ex:
let btnHome = document.querySelector('.botao-home');
O codigo acima seleciona um elemento da pagina que contem a classe "botao-home" e o armazena na variavel btnHome.
btnHome.addEventListener('mouseenter', function(){
  btnHome.style.backgroundColor = 'green';
});
O metodo acima adiciona um evento de escuta no botão que ao momento em que o apontador passe por cima ou está dentro do elemento muda a cor de fundo do elemento.
Obs: Esse evento é semelhante ao seletor hover do css, porém só tem um estado que é quando passamos o apontador por cima.

Mouseleave: Esse tipo de evento monitora se o apontador saiu de cima daquele elemento ou seja o apontador está em cima ou dentro do elemento e assim que sai ele dispara a função callback.
Ex:
let btnHome = document.querySelector('.botao-home');
O codigo acima seleciona um elemento da pagina que contem a classe "botao-home" e o armazena na variavel btnHome.
btnHome.addEventListener('mouseleave', function(){
  btnHome.style.backgroundColor = 'green';
});
O metodo acima adiciona um evento de escuta no botão que ao momento em que o apontador passe por cima ou está dentro do elemento muda a cor de fundo do elemento.
Obs: Esse evento é semelhante ao seletor hover do css, porém só tem um estado que monitora a saida do apontador de cima do elemento.

Mousemove: O evento a seguir é disparado quando o apontador está se movendo dentro do elemento que possui o metodo é disparado a função callback.
Ex:
document.querySelector('.card).addEventListener('mousemove', runEvent);
Adiciona ao elemento que possui a classe "card" o metodo de escutamento de eventos, executando uma função callback.
// Event Handler
function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
O codigo acima faz com que o comportamento do padrão do evento seja anulado, mostra no console o tipo de evento que foi acionando, adiciona ao conteudo de texto do elemento heading a posição atual do apontador tanto no eixo x quanto no eixoo y, logo em seguida usa esses mesmos dados aplicados a propiedade background do corpo do documento passando como valor um formato de cor rgb onde os dois primeiros lotes de cor são determinados pela posição do mouse no eixo x e no eixo y respectivamente.