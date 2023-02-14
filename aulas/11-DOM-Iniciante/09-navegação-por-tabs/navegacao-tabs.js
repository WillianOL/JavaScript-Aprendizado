const menuClick = document.querySelectorAll('.js-listaAnimais img');
const descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');
descricaoAnimais[0].classList.add('ativado');

function mostrarInfo(index) {
    descricaoAnimais.forEach((itens) => {
        itens.classList.remove('ativado');
    });
    descricaoAnimais[index].classList.add('ativado');
}

menuClick.forEach((imgs, index) => {
    imgs.addEventListener('click', () => {
        mostrarInfo(index);
    });
});