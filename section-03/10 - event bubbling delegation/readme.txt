Bubbling(borbulhante) Event: O evento borbulhante está relacioando a cadeia de aninhação de elementos html, quando temos um elemento pai e queremos executar um evento em um dos filhos delegamos o evento addEventListener ao elemento pai e controlamos o elemento clicado através do e.target que é a propiedade que nos traz o alvo ou o elemento clicado ou do evento realizado.
Exemplo:
html: <div class="pai">
        <div class="filho1"></div>
        <div class="filho2></div>
      </div>
javascript: document.querySelector('.pai').addEventListener('click', evento);
function evento(e){
  console.log(e.target);
  e.target.backgroundColor = 'red'
}
No codigo acima criamos uma lista de filhos dentro de um elemento pai, no javascript selecionamos o elemento pai e delegamos a ele o evento de click, ao clicar mostramos no console o target(alvo) que foi clicado e em seguida alteramos sua cor de fundo para vermelho.

Event Delegation: 
document.body.addEventListener('click', deleteItem); Delegamos ao elemento body a função deleteItem que será realizado após o click.
function deleteItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
    e.target.parentElement.parentElement.remove()
    console.log('Delete item');
  }
}
No codigo acima verificamos se o elemento pai do elemento clicado, possui na sua lista de classes a classe "delete-item" e logo em seguida mostramos o alvo e depois removemos o pai do pai do elemento clicado.