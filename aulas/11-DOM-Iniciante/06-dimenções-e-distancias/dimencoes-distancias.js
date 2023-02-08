const listaAnimais = document.querySelector('.listaAnimais');

const listaAltura = listaAnimais.clientHeight; // height + padding
console.log(listaAltura);
const listaAlturaTotal = listaAnimais.scrollHeight; // Heigth total do elemento, mesmo dentro de um scroll.
console.log(listaAlturaTotal);

const faq = document.getElementById('faq');
console.log(faq.offsetTop); // Distancia entre o topo do elemento e o topo da página.

const clientRect = faq.getBoundingClientRect();
console.log(clientRect);

