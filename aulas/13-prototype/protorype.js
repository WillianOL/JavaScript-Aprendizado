// Prototype sempre está ligado a funções.
function Bolo(saborAt, precoAt) {
    this.sabor = saborAt;
    this.preco = precoAt;
}
const carro01 = new Bolo('Morango', 60)

console.log(carro01.prototype); // undefined, pois carro01 é um objeto e não uma função
console.log(Bolo.prototype); // Retorna o objeto

function Pessoa(nomeAt, idadeAt){
    this.nome = nomeAt;
    this.idade = idadeAt;
}

Pessoa.prototype.andar = function (){ // Como se estivesse adicionando uma nova propriedade a constructor function.
    return this.nome + ' andou'
}

const willian = new Pessoa('Willian', 18)