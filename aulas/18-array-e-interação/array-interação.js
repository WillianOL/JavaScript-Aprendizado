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
const nomesAula = (aulas) => aulas.nome; // Somente uma linha de código usando "=>", por isso não foi usado "()" nem "{}";
const arrayNomeAulas = aulas.map(nomesAula); // retorna a array
console.log(arrayNomeAulas);

const listaNumeros = [20, 5, 10, 30];
// No reduce temos um novo argumento que é o acumulador, onde ele é o valor anterior.
const acumular = listaNumeros.reduce((a, item) => {
    console.log(a, item);
    return a + item;
}, 0);

console.log(`Valor total foi de ${acumular}`);

const listaNumeros2 = [10, 33, 4, 55, 22, 44, 0];
// Usando o reduce para retornar o maior valor da array
const menorNumero = listaNumeros2.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
});
console.log(menorNumero);

const listaFrutas = ["Maçã", "Uva", "Limão", "Melão"];

const listaFrutasMaiuscolas = listaFrutas.map((item) => {
    return item.toUpperCase()
})

console.log(listaFrutasMaiuscolas);