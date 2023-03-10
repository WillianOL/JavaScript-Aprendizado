const nome = 'Willian';
const comida = new String('Macarrão');
const ano = new String(2023);

// Métodos e própriedades.
const length = comida.length // Número de caractéres da string. (espaços tmabém contam)
console.log(length);

const frase = 'Meu nome é ';
const carac = frase.charAt(2); // Mostra o caracter de acordo com seu indicie

const concatena = frase.concat(nome, "."); // Concatena as strings


const gameList = 'PS2, GameBoy, Xbox, PS1'
const game = 'Xbox'
// Vai procurar a string dento da selecionada.
gameList.includes(game, 5) // True - vai procurar a partir do index 5
game.includes(gameList) // False

const terminaCom = gameList.endsWith('PS1') // true - pois termina com "PS1"
const comecaCom = game.startsWith('X') // true - pois comerça com "X"


const palavra01 = 'Eu andei de bike'
const palavra02 = 'Comprei ovos'
const palavra03 = 'Olá, Dev!'

console.log(palavra02.slice(0, 5)); // mostra os caracteres do index 0 ao 5. 
console.log(palavra03.slice(2)); // Mostra apartir do index 2.
console.log(palavra01.slice(-4)) // mostra os 4 ultimos caracteres.
console.log(palavra02.slice(0, -9)) // tira os ultimos 9 caracteres.
console.log(palavra01.slice(2, 4)) // mostra os caracteres do 2 até 4.


const frase02 = 'Fui caminhar pela manhã'
console.log(frase02.indexOf('pela')); // Retorna o indicie da string selecionada. (primeira que aparecer)
console.log(frase02.lastIndexOf('a')); // Retorna a ultima string selecionada. No caso, o ultimo "a".


const listaPreco = ['R$9', 'R$99', 'R$199', 'R$1999'];
console.log(listaPreco[0].padEnd(5, ',0')); // Da um espaço final da string, preenchendo o espaço vazio com ',0'

listaPreco.forEach((itens) => {
    console.log(itens.padStart(10, '=')); // Da um espaço no começo da string, preenchendo o espaço vazio com '='
});

const palavra = 'oi';
console.log(palavra.repeat(5)); // Simplimente vai repetir a string de acordo com a quantidade passada.

let preco = 'R$ 1253,06';
preco = preco.replace(',', '.');  // replace troca uma coisa por outra. No caso, a vírgula pelo ponto.
console.log(preco);

let listaItens = 'Boné, Camisa, Camisa, Shorts';
listaItens = listaItens.replace('Camisa', 'Cuécas'); // substituí o primeiro item que ele encontra.
console.log(listaItens);

// O split faz a separação de itens de acordo com o valor passado e retorna uma Array.
console.log(listaItens.split(', ')); // No caso, vai quebrar sempre que uma ", " aparecer.
console.log(listaItens.split(''));

const htmlLista = '<p>Mensagem</p> <p>Olá, mundo!</p>';
const arrayLista = htmlLista.split('p'); // removento as tags p.
const arrayM = arrayLista.join('div'); // No lugar de p, colocar div (método de array).