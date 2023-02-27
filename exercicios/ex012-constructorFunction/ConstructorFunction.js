// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
    console.log(this.nome + ' andou');
    }
}

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function() {
    console.log(this.nome + ' andou');
    }
}

const pessoa1 = new Pessoa('Willian', 18)

  
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa01 = new Pessoa('João', 20);
const pessoa02 = new Pessoa('Maria', 25);
const pessoa03 = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element){
this.elements = document.querySelectorAll(element);
this.AddClass = (classe) => {
    this.elements.forEach((itens) => {
        itens.classList.add(classe)
    })
}
this.removeClass = (classe) => {
    this.elements.forEach((itens) => {
        itens.classList.remove(classe)
    })
}
}

const lista = new Dom('li')