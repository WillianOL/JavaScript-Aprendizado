const carro = {
    marca: 'not brand',
    preco: 0,
}

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 40000; // Dessa forma, a constante vai substituir os valores do objeto carro. Não dando para reaproveitar ele.

