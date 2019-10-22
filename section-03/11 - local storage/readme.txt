Local Storage: A propriedade localStorage permite acessar um objeto Storage local. A localStorage é similar ao sessionStorage. A única diferença é que enquanto os dados armazenados no localStorage não expiram, os dados no sessionStorage tem os seus dados limpos ao expirar a sessão da página — ou seja,quando a página (aba ou janela) é fechada.

Setando(Guardando) item no localStorage
Syntax: localStorage.setItem('variable', 'value');
Ex:
  localStorage.setItem('nome', 'hudson');
  localStorage.setItem('idade', 18);

Setando(Guardando) item na sessionStorage
Syntax: sessionStorage('variable', 'value');
Ex:
  sessionStorage.setItem('name', 'Beth');

Removendo item do localStorage
Syntax: localStorage.removeItem('variableName');
Ex: 
  localStorage.removeItem('name');

Pegando(getter) item no localStorage
Syntax: const variableName = localStorage.getItem('variableName');
Ex: Pegando a variavel nome e armazenando o valor da variavel.
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

Limpando todo o localStorage:
Syntax: localStorage.clear();
