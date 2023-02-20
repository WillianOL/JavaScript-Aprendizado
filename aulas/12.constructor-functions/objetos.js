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
    this.marca = 'not brand'
    this.preco = 0
    console.log(this);
}

const honda = new Carro(); // Utilizando o "new" pode-se atribuir novos valores ao objeto e reutiliza-los
honda.marca = 'Honda';
honda.preco = 50000;

const ferrari = new Carro(); // Atribuindo novos valores as suas propriedades sem alterar as anteriores.
ferrari.marca = 'Ferrari'
ferrari.preco = 100000

// Com parâmetros
function Pessoa(nomeAt, idadeAt) {
    this.nome = nomeAt;
    this.idade = idadeAt;
}

