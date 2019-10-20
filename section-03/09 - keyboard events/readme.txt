Eventos no Teclado: Apresentando todos os eventos que podem ser efetuados pelo teclado.

Variaveis que seram usadas:
const form = document.querySelector('form'); 
O código acima seleciona o formulario da página.
const taskInput = document.getElementById('task');
O código acima seleciona um input que possui o id task.
const heading = document.querySelector('h5');
O código acima seleciona um heading(titulo) da página cuja a tag é h5.
const select = document.querySelector('select');
O código acima seleciona um elemento select da página, no caso o primeiro select da página.

function runEvent(e) {
    console.log("Evento Acionado");
    console.log("Tipo de evento:" + e.type);
  }
O codigo acima será usado como callback nas funções de evento do teclado, recebe um parametro padrão "e" que se referencia ao evento, e logo em seguida mostra dois consoles, que é o que exibe a mensagem "Evento Acionado" e o outro a mensagem "Tipo de evento:" e.type: exibe o tipo de evento que foi acionado através do atributo "type" do parametro "e".

Submit Event: O evento de submit se trata do envio de um formulario que é "imbutido" em todos os elementos "form".
Obs: para que o formulario seja enviado é necessario que um button ou input do tipo "submit" para que enviado, porém somente os formularios são enviado e não os botões.
Syntax:
  form.addEventListener('submit', function);
Ex:
  form.addEventListener('submit', runEvent);
Quando o evento é acionado, executa a função runEvent.

Keydown Event: É um evento que é disparado quando uma tecla é pressionada seja lá qual for a tecla.
Syntax:
  taskInput.addEventListener('keydown', function);
Ex:
  taskInput.addEventListener('keydown', runEvent);
Quando uma tecla é pressionada executa a função runEvent.

Keyup Event: É um evento que é disparado quando uma tecla é liberada ou seja logo após ser pressionada.
Syntax:
  taskInput.addEventListener('keyup', function);
Ex:
  taskInput.addEventListener('keydown', runEvent);
Quando uma tecla é liberada (solta) dispara o evento runEvent.

Keypress Event: É um evento que é disparado quando uma tecla é pressionada e produz um valor de caractere é pressionada.
Obs: Teclas que produzem valor são teclas alfabeticas, numericas e pontuação.
Syntax:
  taskInput.addEventListener('keypress', function);
Ex:
  taskInput.addEventListener('keypress', runEvent);
Quando uma tecla é liberada (solta) dispara o evento runEvent.

Focus Event: É um evento que é disparado quando um elemento é focado.
Obs: São mais usados em inputs
Syntax:
  taskInput.addEventListener('focus', function);
Ex:
  taskInput.addEventListener('focus', runEvent);
Quando o input é clicado executa a função runEvent.

Blur Event: É um evento que é disparado quando um elemento é focado e logo após ocorre o click fora desse elemento.
Obs: São mais usados em inputs
Syntax:
  taskInput.addEventListener('blur', function);
Ex:
  taskInput.addEventListener('blur', runEvent);
Quando o input é clicado e logo em seguida ocorre um click fora do elemento o evento é disparado.

Cut Event: É um evento que é disparado quando um elemento é cortado, ou seja quando excluimos e colamos um texto ou seleção.
Obs: São mais usados em inputs
Syntax:
  taskInput.addEventListener('cut', function);
Ex:
  taskInput.addEventListener('cut', runEvent);
Quando o input possui um texto e apertamos o CTRL + X que realiza a ação de cortar e logo em seguida colamos, onde ocorre o evento de corte(cut).

Paste Event: É um evento que copiamos e colamos algo,mais utilizados com textos.
Obs: São mais usados em inputs
Syntax:
  taskInput.addEventListener('paste', function);
Ex:
  taskInput.addEventListener('paste', runEvent);
Quando o input possui um texto e apertamos o CTRL + C e logo em seguida realizamos a cola com CTRL + V dispara a função runEvent.

Input Event: É um evento disparado quando o valor do elemento é alterado
Obs: São mais usados em inputs, selects ou textarea.
Syntax:
  taskInput.addEventListener('input', function);
Ex:
  taskInput.addEventListener('input', runEvent);
Quando digitamos dentro de um input ou textarea, ou alteramos uma opção de um select a função runEvent é executada.

Change Event: É um evento disparado quando o valor do elemento é alterado
Obs: São mais usados em inputs, selects ou textarea.
Principalmente select.
Syntax:
  taskInput.addEventListener('change', function);
Ex:
  taskInput.addEventListener('change', runEvent);
Quando digitamos dentro de um input ou textarea, ou alteramos uma opção de um select a função runEvent é executada.


