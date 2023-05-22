// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.querySelector("body");

setInterval(() => {
    if(body.classList.contains('ativado')){
        body.classList.remove('ativado')
    }else{
        body.classList.add('ativado')
    }
}, 2000)



// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const btnIniciar = document.querySelector('.iniciar')
const btnPausar = document.querySelector('.pausar')
const spanTempo = document.querySelector('.tempo')

let i = 0
let timer;

function iniciarTempo(){
    timer = setInterval(() => {
        spanTempo.innerHTML = i++
    }, 100)

    btnIniciar.setAttribute("disabled", "")
}

function pausarTempo() {
    clearInterval(timer)
}

function resetarTempo() {
    i = 0
    spanTempo.innerHTML = i
    btnIniciar.removeAttribute("disabled")
}

btnIniciar.addEventListener("click", iniciarTempo)
btnPausar.addEventListener('click', pausarTempo)
btnPausar.addEventListener("dblclick", resetarTempo)