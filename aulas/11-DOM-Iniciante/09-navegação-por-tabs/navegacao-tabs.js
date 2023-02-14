const tabMenu = document.querySelectorAll('.js-listaAnimais img');
const animaisText = document.querySelectorAll('.js-descricao-tabs section');


function mostrarDescricao(i){
    animaisText.forEach((descricao) => {
        descricao.classList.remove('ativado')
    });

    animaisText[i].classList.add('ativado')
}


tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        mostrarDescricao(index);
    })
})