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

// Com o .create() pode-se fazer outro objeto herdar os métodos e propriedades que você criou em outro objeto anterior
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