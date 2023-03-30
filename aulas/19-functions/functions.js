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
    console.log(this.nome + " " + this.idade + ' ' + anoNascimento);
}

nomePessoa.call(pessoa, 2004) // Recebendo o referencial this.

// O call se aplica a qualquer tipo de função, pois ele é um método de função
const listaFrutas = ["Melão", "Manga", "Maçã", "Uva"];
const listaPessoas = ["Willian", "Rebeca", "José", "Joana"]
// Vai mostrar o nome das pessoas pois agora o referencial do forEach é a array de pessoas.
listaFrutas.forEach.call(listaPessoas, (item) => {
    console.log(item);
})


function PegarItens(seletor) {
    this.element = document.querySelector(seletor);
}

const ul = new PegarItens('ul')
console.log(li);