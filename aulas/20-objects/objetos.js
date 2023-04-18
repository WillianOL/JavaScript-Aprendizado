// Todo objeto é criado apartir do construtor Objetc, herdando seus métodos e propriedades.
const pessoa = {
    nome: "Willian",
    idade: 18,
};

const pessoa2 = new Object({
    nome: "Willian",
    idade: 18,
});

console.log(pessoa.nome);
console.log(pessoa2.idade);

// Com o .create() pode-se criar um objeto apartir de outro já criado herdando seus métodos e propriedades
const objeto = {
    nome: "Claudio",
    pegarPalavra(value) {
        this.palavra = value;
        return this;
    },
    juntar() {
        return `${this.nome}, a sua palavra "${this.palavra}" é legal`;
    },
};

const willian = Object.create(objeto);
willian.nome = "Willian";
console.log(willian.pegarPalavra("Pessego").juntar()); // Willian, a sua palavra "Pessego" é legal

//Com o Object.assign é possivel fazer um objeto herdar os métodos e pripriedades de outro objeto, evitando repetições
const mesa = {
    limparMesa() {
        return `${this.nome} limpou a mesa`;
    },

    colocarMesa() {
        return `${this.nome} colocou a mesa`;
    },
};

const funcionario1 = {
    nome: "Claudio",
};

const funcionario2 = {
    nome: "Alberto",
};

Object.assign(funcionario1, mesa);
Object.assign(funcionario2, mesa);

console.log(funcionario1, funcionario2);

// defineProperties - Define novas propriedades ao objeto, a diferença é que podemos modificar as caracteristicas dessas propriedades
const carro = {};

Object.defineProperties(carro, {
    marca: {
        value: "Honda", // define um valor
        writable: false, // define se pode escrever por sima do valor original
        configurable: false, // define se é possivel modificar/configurar o valor
    },
}); // Por padrão todas esses configurações estão como false

carro.marca = "Ferrari"; // Não vai acontecer nada, pois está como: writable false
console.log(carro);

// Get e Set
const idade = {};

Object.defineProperties(idade, {
    // Dentro da propriedade do objeto, pode-se definir o get e set dela
    anos: {
        get() {
            // Pega o valor
            return this._anos;
        },
        set(valor) {
            // No set, podemos definir o que acontece com esse valor.
            this._anos = valor * 10;
        },
    },
});

idade.anos = 10; // idade.anos = 100(multiplicou o valor de get no set por 10)

// Lista os métodos e propriedades de um objeto, com suas características
console.log(Object.getOwnPropertyDescriptors(Object));

const pessoa3 = {
    nome: "Willian",
    idade: 18,
};
