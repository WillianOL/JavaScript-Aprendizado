const carro = {
    marca: 'not brand',
    preco: 0,
}

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 40000; // Dessa forma, a constante vai substituir os valores do objeto carro. Não dando para reaproveitar ele.
console.log(fiat);

// Constructor function
function Carro() { // Iniciar constructor functions com letras maiúscolas (pascal case)
}

const honda = new Carro();  
honda.marca = 'Honda';
honda.preco = 50000;

const ferrari = new Carro();
ferrari.marca = 'Ferrari'
ferrari.preco = 100000