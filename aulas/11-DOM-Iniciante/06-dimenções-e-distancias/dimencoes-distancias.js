const listaAnimais = document.querySelector('.listaAnimais');

const listaAltura = listaAnimais.clientHeight; // height + padding
console.log(listaAltura);
const listaAlturaTotal = listaAnimais.scrollHeight; // Heigth total do elemento, mesmo dentro de um scroll.
console.log(listaAlturaTotal);

