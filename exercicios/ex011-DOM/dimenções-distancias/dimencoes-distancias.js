// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
console.log(`A distância entre o topo e a imagem é de ${img.offsetTop}px`);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('.listaAnimais img')
for(c = 0; c < imgs[imgs.length]; c++){
    const largura = imgs[c].getBoundingClientRect().width;
    const resultado = 
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu