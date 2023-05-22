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
