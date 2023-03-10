// Transversing
const listaAnimais = document.querySelector('.listaAnimais')

// Outras formas de selecionar um elemento HTML.
const ex01 = listaAnimais.parentElement; // Pai do elemento.
const ex02 = listaAnimais.parentElement.parentElement; // Pai do pai do elemento.
const ex03 = listaAnimais.previousElementSibling; // Elemento acima do selecionado.
const ex04 = listaAnimais.nextElementSibling; // Elemento abaixo do selecionado.
const ex05 = listaAnimais.children; // Retorna uma htmlColection com os filhos do elemento.
console.log(ex05);

const ex06 = document.querySelectorAll('li')
const ex07 = document.querySelector('li:last-child')
console.log(ex07);

// Manipular elementos
const faq = document.getElementById('faq')
const tituloFaq = faq.querySelector('.titulo')
faq.appendChild(listaAnimais); // Vai mover a lista de animais para o final de faq
faq.insertBefore(listaAnimais, tituloFaq); // Vai mover a listaAnimais para antes do tituloFaq
// faq.removeChild(tituloFaq); // Remove o titulo
faq.replaceChild(listaAnimais, tituloFaq) // substitui o titulo pela lista de animais

//Criar novos elementos
const contato = document.querySelector('#contato');

const novoTitulo = document.createElement('h1'); // Cria o elemento
novoTitulo.innerText = 'Novo titulo' // Insere o texto nele
novoTitulo.classList.add('titulo'); // Adiciona a classe

contato.appendChild(novoTitulo); // Adiciona no documento

//Clonar elementos
const contatoTitulo = contato.querySelector('.titulo');

const cloneTitulo = contatoTitulo.cloneNode(true);
cloneTitulo.classList.add('vermelho')
contatoTitulo.appendChild(cloneTitulo)