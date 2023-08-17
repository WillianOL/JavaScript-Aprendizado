// Toda função é criada apartir do construtor function, herdando seus métodos e propriedades.
function somarNumeros(n1, n2) { // --> Parâmetos
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

Array.prototype.pop.call(carros) // Vai remover "Chevete"
carros.pop() // Mesma coisa da função de cima
console.log(carros);

const arrayLike = document.querySelectorAll('li') // Objetos que se parecem com array
// Feito dessa forma pois o NodeList não possui o método filter
const filtragem = Array.prototype.filter.call(arrayLike, (itens) => {
    return itens.classList.contains('ativado')
})

console.log(filtragem);

// .apply()
//Funciona da mesma forma que o call(), a única diferença vai ser que ele pode receber uma lista de argumentos(array), enquanto o call recebe cada argumento separado.
const listaNumeros = [10, 120, 5, -10, 22, 0];
Math.min.apply(null, listaNumeros) // --> array
Math.min.call(null, 10, 120, 5, -10, 22, 0) // --> argumentos separados.

const lista02 = document.querySelectorAll('li');

function possuiAtivado(itemLista) {
    return itemLista.classList.contains('ativado')
}

const exemploApply = Array.prototype.filter.apply(lista02, [possuiAtivado]); // array
const exemploCall = Array.prototype.filter.call(lista02, possuiAtivado); // argumento separado

// Diferente do call e do apply, o bind vai retornar uma função, mas não vai executar ela.
const exemploBind = Array.prototype.filter.bind(lista02, (item) => {
    return item
});

console.log(exemploBind()); // É preciso executar a função para sair o resultado do bind

// Macete para encurtar a função
const escolheLista = document.querySelectorAll.bind(document) // Assim pode-se escolher qual elemento vai ser passado

const perfilPessoa = {
    nome: 'Willian',
    idade: 18,
    quemSouEu: function(cidade){
        return `Me chamo ${this.nome}, tenho ${this.idade} anos e nasci em ${cidade}`
    }
}

console.log(perfilPessoa.quemSouEu('Maceió'));

const perfilPedro = {
    nome: "Pedro",
    idade: 20,
}
// Trocando o referencial de this para o novo objeto(perfilPedro), e executanto a função do objeto perfilPessoa.
const exemploBind2 = perfilPessoa.quemSouEu.bind(perfilPedro, 'Pernambuco') 
console.log(exemploBind2());