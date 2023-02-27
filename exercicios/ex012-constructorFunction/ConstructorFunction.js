// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(){
    this.nome = 'Nome pessoa'
    this.idade = 0
    this.andar = function() {
      console.log(this.nome + ' andou');
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const pessoa01 = {nome: 'João', idade: 20,}
  const pessoa02 = {nome: 'Maria', idade: 25,}
  const pessoa03 = {nome: 'Bruno', idade: 15,}
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

  function Dom(element){
    return document.querySelector(element);
  }

  const lista = new Dom('ul')