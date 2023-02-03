const animaisSection = document.getElementById('animais'); // Selecionando a section por ID
//caso o elemento não exista, vai retornar 'null'

const gridSection = document.getElementsByClassName('grid-section'); // Selecionando a gridSection por Class

//Usando o querySelector, ele sempre vai pegar o primeiro elemento de acordo com seu seletor CSS.
const priemiraUL = document.querySelector('ul'); // Selecionando a PRIMEIRA lista do documento
const primeiraLI = priemiraUL.querySelector('li');
const animaisBtn = primeiraLI.querySelector('a');
