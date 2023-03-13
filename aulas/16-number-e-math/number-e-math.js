// Verifica se é NaN, retornando um valor booleano
console.log(Number.isNaN(18)); // false
console.log(Number.isNaN(NaN)); // true

// Verifica se o número é uma integral(número inteiro)
console.log(Number.isInteger(17)); // true
console.log(Number.isInteger(17.5)); // false - pois é um valor decimal.

// Retorna um número através de uma string
console.log(Number.parseFloat('135.70')); // 135.7
console.log(Number.parseFloat('R$135.70')); // NaN - pois ele não consegue transformar nenhum caracter na frente do número.
console.log(Number.parseInt('197.32')); // transforma em integral, removendo os números decimais.

// Arredonda o valor dependendo do valor das casas decimais.
const roupa = 59.90
console.log(roupa.toFixed()); // 60

const casa = 150000.378
console.log(casa.toFixed(2)); // número de casas após a vírgula arredondado.