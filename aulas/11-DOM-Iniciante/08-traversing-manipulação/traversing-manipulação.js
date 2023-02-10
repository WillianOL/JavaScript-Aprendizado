// Transversing
const listaAnimais = document.querySelector('.listaAnimais')

const ex01 = listaAnimais.parentElement; // Pai do elemento.
const ex02 = listaAnimais.parentElement.parentElement; // Pai do pai do elemento.
const ex03 = listaAnimais.previousElementSibling; // Elemento acima do selecionado.
const ex04 = listaAnimais.nextElementSibling; // Elemento abaixo do selecionado.
const ex05 = listaAnimais.children; // Retorna uma htmlColection com os filhos do elemento.
