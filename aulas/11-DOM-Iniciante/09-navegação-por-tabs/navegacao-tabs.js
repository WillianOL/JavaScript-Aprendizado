const menuTab = document.querySelectorAll('.js-listaAnimais li');
const descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');

function ativarDescricao(index){
    menuTab.forEach((itens) => {
        itens.classList.remove('ativo');
    });

    descricaoAnimais[index].classList.add('ativado');
}

