// Verifica se é NaN, retornando um valor booleano
console.log(Number.isNaN(18)); // false
console.log(Number.isNaN(NaN)); // true

// Verifica se o número é uma integral(número inteiro)
console.log(Number.isInteger(17)); // true
console.log(Number.isInteger(17.5)); // false - pois é um valor decimal.

// Retorna um número através de uma string
console.log(Number.parseFloat('135.70')); // 135.7