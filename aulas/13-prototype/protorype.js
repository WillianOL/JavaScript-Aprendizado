// Prototype sempre está ligado a funções.
function Bolo(saborAt, precoAt) {
    this.sabor = saborAt;
    this.preco = precoAt;
}
const carro01 = new Bolo('Morango', 60)

console.log(carro01.prototype); // undefined, pois carro01 é um objeto e não uma função
console.log(Bolo.prototype); // Retorna o objeto, pois é uma função

// Com prototype
function Pessoa(nomeAt, idadeAt){
    this.nome = nomeAt;
    this.idade = idadeAt;
}

Pessoa.prototype.andar = function (){ // Como se estivesse adicionando um novo método a constructor function. Mas elas não são adicionadas diretamente ao objeto.
    return this.nome + ' andou'
}

Pessoa.prototype.anos = function (){
    return `${this.nome} tem ${this.idade} anos`
}

const willian = new Pessoa('Willian', 18) // Esse objeto tem ACESSO as propriedades criadas com o prototype.

const marca = new String('LG');
const nome = 'João'; // Vai herdar os métodos e propriedades do objeto String, pois é uma string. Mesmo sem receber ele diretamente.

// * Boa prática é usar o .prototype em um objeto para ver seus métodos e propriedades. *
console.log(String.prototype)

const listaTeste = document.querySelectorAll('li'); // NodeList
const array = Array.from(listaTeste); // Transformando em array usando os métodos do construtor Array.