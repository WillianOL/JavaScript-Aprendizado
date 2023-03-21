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
console.log(Array.from(lista)); // Transforma de NodeList para array

// Objetos que se parecem com array.
const arrayCreate = {
    0: 'Item1',
    1: 'Item2',
    2: 'Item3',
    3: 'Item4',
    length: 4, // Precisa ter a propriedade length.
}
console.log(Array.from(arrayCreate));

const verificaArray = Array.isArray(lista); // false - Verifica se é um array
console.log(verificaArray);

// Forma de criar um array
const array01 = Array.of(15) // [15]
const array02 = new Array(15) // [vazio * 15] - 15 espaços em branco
const array03 = Array(15) // [vazio * 15] - mesma coisa ndo "new Array".

const listaItens = ['Carro', 'Moto', 'Caminhão',['Peneu' ,{preco: 20000, marca: 'Ford'}]]
console.log(listaItens.length) // 4 - numero de elementos
console.log(listaItens[2].length); // 8 - número de letras pois o 3 elemento é uma string.
console.log(listaItens[3]); // 2 - número de elementos do array
console.log(listaItens[3][1].preco); // 20000

// Métodos modificadores de arrays
const listaCompras = ['arroz', 'feijão', 'carne', 'queijo']
const listaPrecos = [20, 33, 2, 9, -1, 44]
console.log(listaCompras.sort()); // Em strings, organiza em orderm alfabética.
console.log(listaPrecos.sort()); // "tenta" organizar, mas organiza de caracter por caracter.

const listaCarros = ['Monza', 'Ferrari', 'Gol'];
// Os dois métodos alteram o valor da array
listaCarros.unshift('Uno') // Adiciona ao inicio
listaCarros.push('Gol quadrado', 'Chevete') // Adiciona ao final
console.log(listaCarros);

const removeFinal = listaCarros.pop(); // 'Chevete' - Remove o ultimo valor da array e retorna ele
console.log(listaCarros);
console.log(removeFinal);

const removeInicio = listaCarros.shift();
console.log(listaCarros);
console.log(removeInicio);