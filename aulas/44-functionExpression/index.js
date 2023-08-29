// Function declaretion
function somar2(n1, n2) {
    return n1 + n2
}
// Function Expression
// Criada a partir de uma variável
// Serve para evitar conflitos com funções já criadas, como no objeto Window, por exemplo.
const somar = (n1, n2) => {
    return n1 + n2
}

console.log(somar(5, 3));

// Não fazer dessa forma pois dificulta a leitura/entendimento do código
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 8));

