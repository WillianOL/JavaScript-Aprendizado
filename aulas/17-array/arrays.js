// Arrays podem armazenar qualquer tipo de dado, strings, números, funções, objetos, arrays e etc.
const arrayDados = ['Olá', new String('PARABÊNS'), [10, {cor: 'Preto', comida: 'Bolo'}], function(mensagem){ console.log(mensagem)}];

console.log(arrayDados[0]); // Olá
console.log(arrayDados[1]); // String {PARABÊNS}
console.log(arrayDados[2][0]); // 10 - Acessando o primeiro elemento do array dentro dele.
console.log(arrayDados[2][1].cor); // 'Preto' - acessando o objeto dentro do array.
console.log(arrayDados[2][1].comida); // 'Bolo'.
console.log(arrayDados[3]('Acesso negado')); // Acessano e executanto a função.

const cores = new Array('Azul', 'Preto', 'Roxo', 'Vermelho'); // Criando um array usando o construtor Array.
console.log(cores);
console.log(cores.length);

// Métodos de Array.
const lista = document.querySelectorAll('li');
console.log(Array.from(lista));

// Objetos que se parecem com array.
const arrayCreate = {
    0: 'Item1',
    1: 'Item2',
    2: 'Item3',
    3: 'Item4',
    length: 4,
}

console.log(Array.from(arrayCreate));