const tabMenu = document.querySelectorAll('.js-listaAnimais img');
const animaisText = document.querySelectorAll('.js-descricao-tabs section');
animaisText[0].classList.add('ativado') // Quando o site carregar, sempre deixar uma descrição ativada


function mostrarDescricao(i){
    animaisText.forEach((descricao) => { // Remove das demais se tiverem
        descricao.classList.remove('ativado')
    });

    animaisText[i].classList.add('ativado') // adiciona a que foi clicada através do index no forEach.
}

tabMenu.forEach((item, index) => { // adiciona a função atravéz do evento de click a cada imagem, com o index como parâmetro.
    item.addEventListener('click', () => {
        mostrarDescricao(index);
    })
})
