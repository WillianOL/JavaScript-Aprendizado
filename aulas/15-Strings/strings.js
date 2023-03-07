const nome = 'Willian';
const comida = new String('Macarrão');
const ano = new String(2023);

// Métodos e própriedades.
const length = comida.length // Número de caractéres da string. (espaços tmabém contam)
console.log(length);

const frase = 'Meu nome é ';

const carac = frase.charAt(2); // Mostra o caracter de acordo com seu indicie

const concatena = frase.concat(nome, "."); // Concatena as strings

const listaGames = 'PS2, GameBoy, Xbox, PS1'
const game = 'PS2'
// Vai procurar a string dento da selecionada.
listaGames.includes(game) // True
game.includes(listaGames) // False