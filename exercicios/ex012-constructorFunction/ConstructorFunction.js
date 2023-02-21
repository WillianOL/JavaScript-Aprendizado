// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function (){
      console.log(this.nome + ' andou');
    }
  }

  const pessoa = new Pessoa('Willian', 18);

  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const pessoa01 = new Pessoa('João', 20)
  const pessoa02 = new Pessoa('Maria', 25)
  const pessoa03 = new Pessoa('Bruno', 15)
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
function Dom(seletor, classe) {
    const listaElements = document.querySelectorAll(seletor);
    this.elements = listaElements;
    this.addClass = function(){
            listaElements.forEach((itens) => {
            itens.classList.add(classe)
        })
    }
    this.removeClass = function() {
        listaElements.forEach(itens => {
            itens.classList.remove(classe)
        }) 
    }
}

const seletor = new Dom('li', 'ativado')