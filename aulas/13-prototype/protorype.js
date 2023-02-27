// Prototype sempre está relacionado a funções
function Bolo(saborAt, precoAt) {
    this.sabor = saborAt;
    this.preco = precoAt;
}
const carro01 = new Bolo('Morango', 60)

console.log(carro01.prototype); // undefined, pois carro01 é um objeto e não uma função
console.log(Bolo.prototype); // Retorna o objeto