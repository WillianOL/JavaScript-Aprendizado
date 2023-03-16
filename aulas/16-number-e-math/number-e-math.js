// Verifica se é NaN, retornando um valor booleano
console.log(Number.isNaN(18)); // false
console.log(Number.isNaN(NaN)); // true

// Verifica se o número é uma integral(número inteiro)
console.log(Number.isInteger(17)); // true
console.log(Number.isInteger(17.5)); // false - pois é um valor decimal.

// Retorna um número através de uma string
console.log(parseFloat('135.70')); // 135.7
console.log(parseFloat('R$135.70')); // NaN - pois ele não consegue transformar nenhum caracter na frente do número.
console.log(parseInt('197.32')); // transforma em integral, removendo os números decimais.

// Arredonda o valor dependendo do valor das casas decimais.
const roupa = 59.90;
console.log(roupa.toFixed()); // 60

const casa = 150000.378;
console.log(casa.toFixed(2)); // 150000.38 - número de casas após a vírgula arredondado.

// Transformando em moéda
const moedaBr = 20.5;
const moedaUs = 27.2;
console.log(moedaBr.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(moedaUs.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

//Transforma número em string
const celular = 1599.99
console.log(celular.toString()); 

//Math - objeto nativo que possui métodos e prepriedades das expressões matemáticas.
console.log(Math.PI); // propriedade.

console.log(Math.abs(-20.7)); // 20.7 - retorna o absoluto, ou seja, retorna sempre positivo.
console.log(Math.ceil(3.4)); // 4 - arredonda forçando pra cima.
console.log(Math.floor(5.9)); // 5 - arredonda forçando pra baixo.
console.log(Math.round(7.7)); // 8 - arredonda como em uma função matemática normal.

// retorna o valor maximo, ou seja, o maior.
console.log(Math.max(3, 20, 7, 35, -90)); // 35

// retorna o valor minimo, ou seja, o menor.
console.log(Math.min(90, -100, 2, 75)); // -100

