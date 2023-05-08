export default function initModal() {
    
}

const containerModal = document.querySelector('[data-modal="conteiner"]')
const btnAbrir = document.querySelector('[data-modal="abrir"]')
const btnFechar = document.querySelector('[data-modal="fechar"]')


function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add('ativo')
}

function fecharModal() {
    containerModal.classList.remove('ativo')
}

function fecharClickForaModal(event) {
    if(event.target === this){
        fecharModal(event);
    }
}

btnAbrir.addEventListener("click", abrirModal);
btnFechar.addEventListener("click", fecharModal);
containerModal.addEventListener("click", fecharClickForaModal)