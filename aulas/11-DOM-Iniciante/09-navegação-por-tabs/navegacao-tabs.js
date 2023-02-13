const animaisLista = document.querySelectorAll('.js-listaAnimais img');
const descricaoAnimais = document.querySelector('.js-descricao-tabs');


function clicouImagem(event){
    const evento = event.target
    
}

animaisLista.forEach((item) => {
    item.addEventListener('click', clicouImagem)
});

