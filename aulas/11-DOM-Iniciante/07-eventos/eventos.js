const img = document.querySelector('img')
// Interagindo com elementos através de eventos.
img.addEventListener('click', () => {
    console.log('clicou na imagem');
}); // Neste caso, há uma função com um evento de click. Quando o click acontecer na imagem vai disparar a função.

// Callback
//Nomear seu callback(nome da função) da maneira que quiser
const img2 = document.querySelector('.img2') 
function clicarImagem(){
    console.log('Clicou na imagem 02');
}

img2.addEventListener('click', clicarImagem);

//Parâmetros
const pagina = document.querySelector('body')
function clicarBody(event){
    const clientX = event.clientX; // Com esse parâmetro, vai puxar exatamente onde ocorreu o clique em relação ao eixo X.
    console.log(clientX);
}

pagina.addEventListener('click', clicarBody);

const listaAnimais = document.querySelector('.listaAnimais')
function cliqueLista(lista) {
    console.log(lista.target);
}

listaAnimais.addEventListener('click', cliqueLista);

const linkExterno = document.querySelector('a[href^="https"]')

function linkExternof(event){
    event.preventDefault(); // Vai previnir o padrão do evento. Fazendo assim a ação não ocorrer.
    console.log(event);
}

linkExterno.addEventListener('click', linkExternof)