const menuTab = document.querySelectorAll('.js-listaAnimais li');
const descricaoAnimais = document.querySelector('.js-descricao-tabs section');
const sectionAnimais = document.querySelector('.animais');

function ativarDescricao(index){
    descricaoAnimais[index].classList.add('ativado')
}
