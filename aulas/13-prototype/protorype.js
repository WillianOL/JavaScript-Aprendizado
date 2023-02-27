function Bolo(saborAt, precoAt) {
    this.sabor = saborAt;
    this.preco = precoAt;
}
const carro01 = new Bolo('Morango', 60)

console.log(carro01.prototype);
console.log(Bolo.prototype);