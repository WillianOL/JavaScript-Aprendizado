const listaAnimais = document.querySelector('.listaAnimais');

const listaAltura = listaAnimais.clientHeight; // height + padding
console.log(listaAltura);
const listaAlturaTotal = listaAnimais.scrollHeight; // Heigth total do elemento, mesmo dentro de um scroll.
console.log(listaAlturaTotal);

const faq = document.getElementById('faq');
console.log(faq.offsetTop); // Distancia entre o topo do elemento e o topo da página.

const clientRect = faq.getBoundingClientRect(); // width, height, distância do elemento e outros.
if(clientRect.top <= 0){
    console.log('Chegou ao elemento');
}

console.log(
    window.innerWidth, // Largura total da janela
    window.innerHeight, // Altura total da janela
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset, // Distancia total do scroll vertical
)

if(window.innerWidth < 400){
    console.log('Tela é menor que 400px');
}

const telaMenor = window.matchMedia('(max-width: 700px)');
if(telaMenor.matches){
    console.log('TELA MENOR QUE 700px')
}