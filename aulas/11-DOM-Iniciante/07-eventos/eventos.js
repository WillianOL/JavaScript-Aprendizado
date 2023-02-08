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

//Parâmetro
const pagina = document.querySelector('body')
function clicarBody(event){
    const clientX = event.clientX;
    console.log(clientX);
}

pagina.addEventListener('click', clicarBody);
