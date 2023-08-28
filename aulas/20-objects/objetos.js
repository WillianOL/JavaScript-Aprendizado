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

// Com o .create() pode-se criar um objeto a partir de outro já criado herdando seus métodos e propriedades
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
    nome: "Jorge",
};

const funcionario2 = {
    nome: "Julia",
};

Object.assign(funcionario1, mesa);
Object.assign(funcionario2, mesa);

console.log(funcionario1, funcionario2);

// defineProperties - Define novas propriedades ao objeto, a diferença é que podemos modificar as características dessas propriedades
const carro = {};

Object.defineProperties(carro, {
    marca: {
        value: "Honda", // define um valor
        writable: false, // define se pode escrever por sima do valor original
        configurable: false, // define se é possivel modificar/configurar o valorx
        
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
// Obj.key - Retorna uma array com as chaves/propriedades do objeto
console.log(Object.keys(pessoa3));

// Obj.value - Retorna uma array com os valores das chaves/pripriedades do objeto
console.log(Object.values(pessoa3));

// Obj.entries - retorna um array com as chaves e seus valores
console.log(Object.entries(pessoa3));

// Object.is() - verifica se dois objetos são iguais, retornando true ou false
const carro1 = ["Ford", "Monsa"];
const carro2 = ["Ford", "Monsa"];
console.log(Object.is(carro1, carro2)); // false - dois objetos diferentes

const novoCarro = carro1;
console.log(Object.is(carro1, novoCarro)); // true

// Todo tipo de dado em JavaScript vai herdar os métodos e propriedades do construtor de Objeto
// {}.constructor - vai dar o tipo de construtor do objeto
const pessoas = ["Carlos", "Willian", "João"];
pessoas.constructor; // Construtor Array

// hasOwnProperty - Verifica se possui a propriedade  e retorna um valor booleano(essa propriedade deve ser diretamente criada do objeto e não do protótipo).
const metodos = {
    correr() {
        return "Você correu";
    },
};

console.log(metodos.hasOwnProperty("map")); // false - propriedade do prototype do construtor Array
console.log(metodos.hasOwnProperty("correr")); // true - propriedade criada diretamente no objeto

// propertyIsEnumerable - Verifica a propriedade é numeravel
console.log(metodos.propertyIsEnumerable("correr"));

// isPrototypeOf - Verifica se é o prototipo do valor passado
const planetas = ["Terra", "Marte", "Venus", "Jupter"];

console.log(Array.prototype.isPrototypeOf(planetas)); // true - pois prototipo da array planetas é array

// toString - Transforma um dado em sting ou retorna o tipo do objeto
const palavra2 = "Hello, world!";
const somar = (n1, n2) => {
    return n1 + n2;
};

console.log(palavra2.toString()); // Hello, world!
console.log(somar.toString()); // retorna a função escrita

// Verifica que tipo de objeto é, trocando o referencial de this com o call

console.log(Object.prototype.toString.call(palavra2));