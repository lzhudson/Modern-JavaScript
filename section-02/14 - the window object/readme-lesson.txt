Window Object: O objeto window representa uma janela que contém um elemento DOM; a propriedade document aponta para o documento DOM document carregado naquela janela. Uma janela para um dado documento pode ser obtido usando a propriedade document.defaultView.

Metodos:
Alert(): Exibe uma janela de alerta.
Ex:
alert('Olá mundo'); Saida: Uma janela com a mensagem 'Olá mundo'.

Prompt(): Exibe uma janela com caixa de texto.
Ex:
prompt('Digite alguma coisa');
Saida: Uma janela com um campo de texto, com a mensagem acima.

Confirm(): Exibe uma janela com duas opções de confirmação 'Confirmar', 'Cancelar'.
Ex:
if(confirm('Você viu essa janela ?')){
  console.log('Sim');
} else {
  console.log('Não');
}
Note que o botão confirmar se assimila ao valor true(verdadeiro) e a o botão cancelar ao false(falso).

Propiedades: 
Acesando: Object.propriedade.

Outer Height e Width
window.outerHeight: Retorna o valor da altura externa da janela.
window.outerWith: Retorna o valor da largura externa da janela.

Inner Height e Width
window.innerWidth: Retorna o valor da largura da janela em si. Somente do conteudo.
window.innerHeight: Retorna o valor da altura da janela em si. Somente do conteudo.

Scroll Points
window.scrollY: Retorna o valor atual em pixels que o documento ja rolou verticalmente.
window.scrollX: Retorna o valor atual em pixels que o documento ja rolou horizontalmente.

Redirecionamento:
window.location.href; Redireciona o usuario para alguma outra url.
Ex: 
  window.location.href = 'www.google.com';

Recarregar:
window.location.load(): Recarrega a pagina atual.

Objecto Historico: Acessa as Propiedades e Metodos do historio.
window.history.go(value): Pode fazer o usuario avancar ou voltar algumas paginas.
Obs: valor positivo joga o usuario para proxima pagina se houver e o valor negativo faz com que o usuario volte algumas paginas se houver.(Tem que estar no historico).

window.history.length: Retorna o valor de quantos sites ja foram acessados naquela aba.

Objeto Navegador.
window.navigator: Retorna o objeto navigator.
window.navigator.appName: Retorna o nome do navegador.
window.navigator.appVersion: Retorna a versão do navegador.
window.navigator.userAgent:
window.navigator.plataform: Retorna a plataforma do navegador.
window.navigator.vendor: 
window.navigator.language: Retorna a linguagem na qual o navegador está rodando.