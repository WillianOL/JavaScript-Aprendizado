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

const willian = new Pessoa('Willian', 18) // Esse objeto tem acesso as propriedades criadas com o prototype.