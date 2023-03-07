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