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

function initInfo() {
    const faqBtns = document.querySelectorAll('.js-showAnimais h2');
    const showP = 'showP' // Definindo a classe CSS em uma constante para uma futura modificação

    faqBtns[0].nextElementSibling.classList.add(showP); // Deixa o primeiro item visível na tela.

    function mostrarInfoFaq(){ // função para clicar e adicionar a classe ao item abaixo do clicado.
    this.nextElementSibling.classList.toggle(showP)
    }

    faqBtns.forEach((item) => { // Crianco a função com evento de click a todos os h2
    item.addEventListener('click', mostrarInfoFaq);
    })
}
initInfo();

const menuLinks = document.querySelectorAll('.menu-js a[href^="#"]'); // Selecionando todos os links internos.

function scrollParaSection(event) {
    event.preventDefault(); // Desabilitando o comportamento padrão do link interno.
    const link = event.target.getAttribute('href'); // Pegando o atributo href dos links.
    const section = document.querySelector(link);
    console.log(section);

    section.scrollIntoView({ // Vai dar o scroll até 
        behavior: 'smooth',
    });
}

menuLinks.forEach((links) => { // Adicionando a função de click em casa a.
    links.addEventListener('click', scrollParaSection);
});