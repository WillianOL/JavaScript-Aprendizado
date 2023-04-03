// Toda função é criada apartir do construtor function, herdando seus métodos e propriedades.
function somarNumeros(n1, n2) { /// --> Parâmetos
    return n1 + n2;
}
// Sempre prestar atenção nos valores retornados da função
// Retornando um número
console.log(somarNumeros(50, 10)); // --> argumentos 

function juntarLetras(letra1, letra2, alfabeto) {
    return letra1 + letra2;
}
console.log(juntarLetras.length); // retorna o total de argumentos da função.
console.log(juntarLetras.name); // retorna o nome da função


// Toda função tem como referencial o objeto Constructor Function, fazendo o this dela herdar os métodos e propriedades do construtor.
// Com o .call() podemos mudar esse referencial, para um objeto por exemplo: 
const pessoa = {
    nome: "Willian",
    idade: 18,
}

function nomePessoa(anoNascimento){
    console.log(this.nome + " " + this.idade + ' ' + anoNascimento); // usando o this para acessar os parâmetros do objeto pessoa
}

nomePessoa.call(pessoa, 2004) // Agora o referencial da função vai ser o objeto pessoa.

// O call se aplica a qualquer tipo de função, pois ele é um método de função
const listaFrutas = ["Melão", "Manga", "Maçã", "Uva"];
const listaPessoas = ["Willian", "Rebeca", "José", "Joana"]
// Vai mostrar o nome das pessoas pois agora o referencial do forEach é a array de pessoas.
listaFrutas.forEach.call(listaPessoas, (item) => {
    console.log(item);
})

// EXEMPLO REAL
function PegarItens(seletor) {
    this.elemento = document.querySelector(seletor);
}

PegarItens.prototype.colocarClasse = function(classe) {
    console.log(this);
    this.elemento.classList.add(classe);
} // Novo método no prototype da função PegarItens.

// const ul = new PegarItens('ul'); // Argumento para a função PegarItens
// ul.colocarClasse('ativadaUl'); // Acessando o método do prototype da função, para colocar a classe na constante ul

const newSelector = {
    elemento: document.querySelector('li'),
}
// Com o ".call()" foi mudado o referencial da função para o objeto newSelector, que contém o li do documento html. (o objeto tem que ser semelhante ao anterior).
// Colocando a classe ativadaLi
PegarItens.prototype.colocarClasse.call(newSelector, 'ativadaLi')


const carros = ['BMW', 'Mostang', 'Chevete'];
// Modificar o construtor principal não é uma boa prática. Feito com intuito experimental.
Array.prototype.mostrarCarros = function(){
    return console.log(this);
}