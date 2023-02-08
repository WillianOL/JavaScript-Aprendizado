// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
console.log(`A distância entre o topo e a imagem é de ${img.offsetTop}px`);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    let soma = 0;
    const imgs = document.querySelectorAll('img')

    imgs.forEach((img) => {
    soma += img.offsetWidth;
    });
    console.log(`A soma de todas as imagens são ${soma}`)
}
window.onload = () =>{
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach ((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'Tamanho está OK');
    } else {
        console.log(link, 'Tamanho não está OK');
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const telaLimite = window.matchMedia('(max-width: 720px)')

if (telaLimite.matches) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}