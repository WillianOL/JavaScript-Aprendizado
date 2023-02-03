const animaisSection = document.getElementById('animais'); // Selecionando a section por ID
console.log(animaisSection); 
//caso o elemento não exista, vai retornar 'null'

const gridSection = document.getElementsByClassName('grid-section'); // Selecionando a gridSection por Class
console.log(gridSection);

//Usando o querySelector, ele sempre vai pegar o PRIMEIRO elemento de acordo com seu seletor CSS.
const priemiraUL = document.querySelector('ul'); // Selecionando a PRIMEIRA lista do documento
const primeiraLI = priemiraUL.querySelector('li'); // Também é possivel chamar elementos por vareáveis.
const animaisBtn = primeiraLI.querySelector('a');
console.log(animaisBtn);

const todasGridSection = document.querySelectorAll('.grid-section img'); // Seleciona TODOS os elementos que estiverem ligados ao seletor CSS.
console.log(todasGridSection);

const listaHTML = document.getElementsByClassName('grid-section') // Lista atualizada ao vivo, ou seja, se um novo elemento for adicionado com a classe 'grid-section' ele vai reconhecer.
const listaNode = document.querySelectorAll('.grid-section') //  Não é atualizada automaticamente, sendo o mesmo nomero de elemento que ele reconheceu primeiramente. 
priemiraUL.classList.add('grid-section') //  Elemento adicionado com a classe 'grid-section'.
// console.log(listaHTML);
// console.log(listaNode);

listaNode.forEach(function(item, index){
    console.log(item, index);
});