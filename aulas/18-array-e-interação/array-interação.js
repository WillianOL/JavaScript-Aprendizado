const arrayCarros = ["Monza", "Fiat", "Uno"];

arrayCarros.forEach((item, index, array) => {
    item = item.toUpperCase();
    console.log(item, index);
});

console.log(arrayCarros); // A array não muda após a alteração

const li = document.querySelectorAll("li");

//Quando for só um parâmetro e uma linha de cógico, não precisa dos parênteses nem das chaves
li.forEach((i) => i.classList.add("TESTE"));

const cores = ["Azul", "Preto", "Vermelho"];
const coresModificadas = cores.map((item, index) => {
    return item.toUpperCase();
});
console.log(coresModificadas);

// Usar o map quando for trabalhar com listas/arrays que vai retornar uma nova array com valores novos
const numeros = [10, 7, 33, 100];
let result = 0;
const numerosSomados = numeros.map((n) => {
    result = result + n;
    return result;
});

console.log(numerosSomados); // [10, 17, 50, 150]

// Outro exemplo
const numerosX4 = numeros.map((item) => {
    return item * 4;
});

console.log(numerosX4);

// Retornando um valor do objeto e armazenando em uma nova array.
const aulas = [
    {
        nome: "aula01",
        min: 20,
    },
    {
        nome: "aula02",
        min: 15,
    },
    {
        nome: "aula03",
        min: 17,
    },
    {
        nome: "aula04",
        min: 25,
    },
];
const minutosAula = aulas.map((item) => item.min);
console.log(minutosAula);

// Mesma coisa do de cima
const nomesAula = (aulas) => aulas.nome; // Somente uma linha de código usando "=>", por isso não foi usado "()" nem "{}" ou o return;
const arrayNomeAulas = aulas.map(nomesAula); // retorna a array
console.log(arrayNomeAulas);

const listaNumeros = [20, 5, 10, 30];

// No reduce temos um novo argumento que é o acumulador, onde ele é o valor da interação anterior.
const acumular = listaNumeros.reduce((a, item) => {
    console.log(a, item);
    return a + item;
}, 0);

console.log(`Valor total foi de ${acumular}`);
// Se não passarmos nada como segundo valor do reduce, ele irá pular para a segunda interação, fazendo assim o valor do acumulador ser o primeiro item da array.

const listaNumeros2 = [10, 33, 4, 55, 22, 44, 0];
// Usando o reduce para retornar o maior valor da array
const menorNumero = listaNumeros2.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
});
console.log(menorNumero);

const trabalhos = [
    {
        nome: "Uber",
        hora: 6,
    },
    {
        nome: "Programador",
        hora: 8,
    },
    {
        nome: "Designer",
        hora: 4,
    },
    {
        nome: "Chefe de obras",
        hora: 12,
    },
];

// Vai retornar um objeto com apenas os nomes dos trabalhos
const listaNomeTrabalhos = trabalhos.reduce((acumulador, trab, index) => {
    acumulador[index] = trab.nome; // o acumulador inicial vai receber o index do primeiro item, depois vai receber o nome do primeiro trabalho.
    return acumulador;
}, {});

console.log(listaNomeTrabalhos);

const listaFrutas = ["Maçã", "Uva", "Limão", "Melão"];
// Mesma coisa do reduce normal, só que a interação acontece da esquerda pra direita
const interacao = listaFrutas.reduceRight((acl, item) => acl + " " + item);
console.log(interacao); // Melão Limão Uva Maçã.

// Verifica se um item existe dentro da array e retorna um valor booleano
const temLimao = listaFrutas.some((item) => {
    return item === "Limão";
});
console.log(temLimao); // true

// Verifica se todos os valores são truthy, se um dos valores não for, retorna false
const listaCarros = ["Polo", "Chevete", "Monsa", ""];
const todosVerdade = listaCarros.every((carro) => {
    return carro;
});
console.log(todosVerdade); // false - por causa da string vazia

const numbers = [12, 10, 7, 22, 20, 39];
const mairQue5 = numbers.every((n) => n > 5);
console.log(mairQue5); // true -  todos os números são maiores que 5

// Retorna o index do valor correspondente ao return
const listaTrabalhos = ["Programador", "Designer", "SEO"];
const retornaIndex = listaTrabalhos.findIndex((itens) => {
    return itens === "Designer";
}); // 1 - index de "Designer"
console.log(retornaIndex);

// retorna o PRIMEIRO item correspondente ao return
const listaNumeros3 = [5, 25, 88, 37, 40];
const maiorQue10 = listaNumeros3.find((numbers) => {
    return numbers > 10;
}); // 25 - primeiro valor maior que 10
console.log(maiorQue10);

// Filtra e retorna os itens -  retorna apenas aqueles itens que forem truthy
const carros = ["Gol", null, "Fusca", undefined, "Tesla", 0];
const retornaVerdadeiro = carros.filter((itens) => {
    return itens
});
console.log(retornaVerdadeiro);

// Vai retornar apenas aqueles números maiores que 10
const listaNumeros4 = [10, 20, 4, 77, 35, 0, 9];
const maiorQue = listaNumeros4.filter((n) => {
    return n > 10
})
console.log(maiorQue); // 20, 77, 35

// Filter com objeto
const estudos = [
    {
        materia: 'HTML',
        hora: 4
    },
    {
        materia: 'CSS',
        hora: 6
    },
    {
        materia: 'Design',
        hora: 6
    },
    {
        materia: 'JavaScript',
        hora: 8
    },
]
// Vai retornar apenas os objetos que tiverem a hora igual a 6
const retornaMateria = estudos.filter((aula) => {
    return aula.hora === 6 
})

console.log(retornaMateria);