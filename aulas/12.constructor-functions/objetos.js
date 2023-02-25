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
ferrari.marca = 'Ferrari';
ferrari.preco = 100000;

// Com parâmetros
function Pessoa(nomeAt, idadeAt) {
    this.nome = nomeAt;
    this.idade = idadeAt;
}

const pessoa01 = new Pessoa('Pedro', 18);
const pessoa02 = new Pessoa('Sophya', 19);

function PrecoProduto(marcaAt, precoInicial) {
    const taxa = 1.3
    const precoFinal = precoInicial * taxa
    const desconto = precoInicial * 0.5
    // O que realmente vai para o objeto são os qu estão com o this.
    this.marca = marcaAt;
    this.preco = precoFinal - desconto
}

const calca = new PrecoProduto('Gucci', 200);

//Exemplo de web real
function Dom(element){ // Função construtora
    this.seletor = function (){ // retornar o elemento passado no objeto. 
        return document.querySelector(element);
    }
    this.ativar = function (){ // Adiciona a classe ativar ao elemento passado no objeto
        this.seletor().classList.add('ativar')     
    }
}

const div = new Dom('div'); // O argumento passado no objeto vai se relacionar com a função construtora acima.
const p = new Dom('p');