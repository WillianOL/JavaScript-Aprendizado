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
    event.preventDefault(); // Vai previnir o comportamento padrão do evento. Fazendo não acontecer ele. No caso do link externo, não irá funcionar.
    console.log(event);
}

linkExterno.addEventListener('click', linkExternof)

// This
const img3 = document.querySelector('img');

function thisImagem(){
    console.log(this); // Vai retornar a imagem.
    console.log(this.getAttribute('src'));
}

img3.addEventListener('click', thisImagem)

// Outros eventos
const siteBackground = document.querySelector('body')
const h1 = document.querySelector('h1')

function eventoAleatorio(evento) {
    console.log(evento.type);
    console.log(evento);

    if(evento.key === 'a'){ // Quando for pressionado a tecla 'a' do teclado, vai trocar o background pra vermelho
        siteBackground.style.backgroundColor = 'red'
    } else if(evento.key === 'b'){ // Quando for pressionado 'b', vai trocar o background pra branco.
        siteBackground.style.backgroundColor = 'white'
    }
}

h1.addEventListener('mouseenter', eventoAleatorio) // Mouse entrar no elemento
h1.addEventListener('mouseleave', eventoAleatorio) // Mouse sair do elemento
window.addEventListener('keydown', eventoAleatorio); // Evento de tecla.
window.addEventListener('scroll', eventoAleatorio) // Evento de scroll