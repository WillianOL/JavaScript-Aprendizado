// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitCoin = fetch("https://blockchain.info/ticker")

bitCoin.then(response => response.json())
.then(bitCoins => {
    console.log(bitCoins.BRL);
})