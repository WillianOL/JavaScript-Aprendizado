// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.footer');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('#faq');
const primeiroTitulo = faq.querySelector('h2');

console.log(primeiroTitulo);

// Selecione o DD referente ao primeiro DT
const primeiroP = faq.querySelector('p')
console.log(primeiroP);

// Substitua o conteúdo html de .faq pelo de .animais
const faq2 = document.getElementById('faq')
const animais = document.querySelector('.descricaoAnimais');
const contentFaq = document.querySelector('.fagAnimais');

faq2.replaceChild(animais, contentFaq);
