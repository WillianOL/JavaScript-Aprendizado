// DOM
const href = location.href;
console.log(href); // usando o objeto "location" e usando sua propriedade "href" para acessar o link do site

const titulo = document.querySelector('h2');
//Funções manipulando o elemento.
titulo.addEventListener("click", clickh1)
function clickh1() {
    console.log('Clicou em h1');
    titulo.style.color = 'green'
}

titulo.innerHTML = 'ESSE É O TITULO PRINCIPAL'; // adiciona o texto no elemento
console.log(titulo.classList); // Mostra as classes do elemento
console.log(titulo.id); // Mostra o id do elemento
console.log(titulo.offsetHeight); // Mostra a altura do elemento