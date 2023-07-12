// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function pegarBitCoins() {
    const bitCoin = fetch("https://blockchain.info/ticker")
    bitCoin.then(response => response.json())
        .then(bitCoins => {
            document.body.innerHTML = (`Valor: R$ ${bitCoins.BRL.buy}`).replace(".", ",")
    })
}

setInterval(() => {
    pegarBitCoins();
}, 1000 * 30)