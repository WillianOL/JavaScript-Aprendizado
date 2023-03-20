// Arrays podem armazenar qualquer tipo de dado, strings, números, funções, objetos, arrays e etc.
const arrayDados = ['Olá', new String('PARABÊNS'), [10, {cor: 'Preto', comida: 'Bolo'}], function(mensagem){ console.log(mensagem)}];

console.log(arrayDados[0]); // Olá
console.log(arrayDados[1]); // String {PARABÊNS}
console.log(arrayDados[2][0]); // 10 - Acessando o primeiro elemento do array dentro dele.
console.log(arrayDados[2][1].cor); // 'Preto' - acessando o objeto dentro do array.
console.log(arrayDados[2][1].comida); // 'Bolo'.
console.log(arrayDados[3]('Acesso negado')); // Acessano e executanto a função.
