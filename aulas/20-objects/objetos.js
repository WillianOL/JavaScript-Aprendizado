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
        return `${this.nome} limpou a mesa`
    },

    colocarMesa() {
        return `${this.nome} colocou a mesa`
    },
};

const funcionario1 = {
    nome: "Claudio",
}

const funcionario2 = {
    nome: "Alberto"
}

Object.assign(funcionario1, mesa)
Object.assign(funcionario2, mesa)

console.log(funcionario1, funcionario2);


// defineProperties - Define novas propriedades ao objeto, a diferença é que podemos modificar as caracteristicas dessa propriedades
const carro = {}

Object.defineProperties(carro, {
    marca: {
        value: "Honda", // define um valor
        writable: false, // define se pode escrever por sima do valor original
        configurable: false, // define se é possivel modificar o valor
    }
})

carro.marca = "Ferrari" // Não vai acontecer nada, pois está como: writable false
console.log(carro);