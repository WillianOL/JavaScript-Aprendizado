const menuTab = document.querySelectorAll('.js-listaAnimais li');
const descricaoAnimais = document.querySelector('.js-descricao-tabs section');
const sectionAnimais = document.querySelector('.animais');


function clicouImagem(event){
    console.log(event.target);
}

menuTab.forEach((item) => {
    item.addEventListener('click', clicouImagem)
});

