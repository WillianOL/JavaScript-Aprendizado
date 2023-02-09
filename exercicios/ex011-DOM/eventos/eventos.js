// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a');

function clicouLink(event) {
    event.preventDefault();
    linksInternos.forEach((itens) => {
        itens.classList.remove('ativo')
    })

    event.target.classList.toggle('ativo')
}

linksInternos.forEach((links) => {
    links.addEventListener('click', clicouLink);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function cliqueAleatorio(event){
    const clique = event.target
    console.log(clique);
}
window.addEventListener('click', cliqueAleatorio)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function cliqueAleatorioRemove(event){
    const clique = event.target;
    clique.remove();
}

window.addEventListener('click', cliqueAleatorioRemove)

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const texto = document.querySelectorAll('p');

function aumentarTexto(event){
    if(event.key === 't'){
        texto.forEach((item) => {
            item.style.fontSize = '20px'
        });
    }
}

window.addEventListener('keydown', aumentarTexto);