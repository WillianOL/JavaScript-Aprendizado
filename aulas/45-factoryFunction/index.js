"use strict";
// São funções que retornam objetos que nem as Classes e C. Functions.
function criarSection(texto) {
    // As funções ou variáveis criadas dentro da factory function são privadas até serem retornadas
    const numeroAleatorio = "193098429";
    function element() {
        const section = document.createElement("section");
        section.innerHTML = texto;
        return section;
    }

    // Por padrão tem que retornar um objeto
    return Object.freeze({ // Ice Factory - com Object.freeze podemos impedir que os métodos e propriedades sejam modificadas
        texto,
        element,
        numeroAleatorio,
    });
}
// Sua vantagem é não precisar utilizar a palavra chave "new"
const secaoCompra = criarSection("Pagina de compra");
const secaoVender = criarSection("Pagina de vendas");
console.log(secaoVender);
console.log(secaoCompra.element());

// Forma de não usar o new diretamente em C. Functions
function Pessoa(nome) {
    if(!(this instanceof Pessoa))
        return new Pessoa(nome)

    this.nome = nome;
}

const pessoa1 = Pessoa("José")
console.log(pessoa1);
