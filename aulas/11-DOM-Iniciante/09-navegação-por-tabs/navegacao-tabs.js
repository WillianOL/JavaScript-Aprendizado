const menuClick = document.querySelectorAll('.js-listaAnimais img');
const descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');
descricaoAnimais[0].classList.add('ativado'); // Adiciona o conteúdo para não ficar sem nada inicialmente

function initDescricao(){
    if(menuClick.length && descricaoAnimais.length){ // Só vai executar se os dois elementos existirem na tela.

        function mostrarInfo(index) { // função recebendo o index do forEach para adicionar a classe a section de acordo com a img.
            descricaoAnimais.forEach((itens) => { // Remove a classe 'ativado' das demais se tiverem
                itens.classList.remove('ativado');
            });
            descricaoAnimais[index].classList.add('ativado'); // Adiciona a classe a section de acordo com o index da imagem clicada.
        }
        
        menuClick.forEach((imgs, index) => { // Criando a função de click para todas as imagens.
            imgs.addEventListener('click', () => {
                mostrarInfo(index);
            });
        });
    }
}
initDescricao();

const titulos = document.querySelectorAll('.fagAnimais h2');
console.log(titulos);

