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

const endsWith = gameList.endsWith('PS1') // true - pois termina com "PS1"
const startsWith = game.startsWith('X') // true - pois comerça com "X"

const palavra01 = 'Andei por ai'
const palavra02 = 'Comprei ovos'
const palavra03 = 'Olá, Dev!'

console.log(palavra02.slice(0, 5)); // mostra os caracteres do index 0 ao 5. 
console.log(palavra03.slice(2)); // Mostra apartir do index 2.
console.log(palavra01.slice(-4)) // mostra os 4 ultimos caracteres.
console.log(palavra02.slice(0, -9)) // tira os ultimos 9 caracteres.
console.log(palavra01.slice(2, 4)) // mostra os caracteres do 2 até 4.

const frase02 = 'Fui caminhar pela manhã'
console.log(frase02.indexOf('pela')); // Retorna o indicie da string selecionada. (primeira que aparecer)
console.log(frase02.lastIndexOf('a')); // Retorna a ultima string selecionada. No caso, o ultimo "a"