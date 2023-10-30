function mensagem(texto){
    console.log(texto);
}
// Executa uma função depois de um tempo determinado
setTimeout(mensagem, 0, "Esperou")

// Ele entra na fila de espera, ou seja, é um evento asincrono. Por isso, nem sempre é executado no tempo determinado por ser executado por ultimo.
for(let i = 0; i <= 10; i++){
    setTimeout(() => {
        console.log(i);
    }, 500 * i) // forma de fazer um contador com loops
}

const btn = document.querySelector("button")

btn.addEventListener("click", clicouBotao)

function clicouBotao() {
    setTimeout(() => {
        this.classList.add("clicou")
    }, 1000)
}


// O setInterval fica executando novamente como um loop, dependendo do tempo passado
let i = 0
const loop = setInterval(() => {
    console.log(i);
    i++
    if(i > 10){
        // Forma de parar o loop do intervalo, no caso quando chegar a 10
        clearInterval(loop)
    }
}, 100)
