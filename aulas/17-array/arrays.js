// Arrays podem armazenar qualquer tipo de dado, strings, números, funções, objetos, arrays e etc.
const arrayDados = [
    "Olá",
    new String("PARABÊNS"),
    [10, { cor: "Preto", comida: "Bolo" }],
    function (mensagem) {
        console.log(mensagem);
    },
];

console.log(arrayDados[0]); // Olá
console.log(arrayDados[1]); // String {PARABÊNS}
console.log(arrayDados[2][0]); // 10 - Acessando o primeiro elemento do array dentro dele.
console.log(arrayDados[2][1].cor); // 'Preto' - acessando o objeto dentro do array.
console.log(arrayDados[2][1].comida); // 'Bolo'.
console.log(arrayDados[3]("Acesso negado")); // Acessando e executanto a função.

// Os valores das arrays não são estáticos
const cores = new Array("Azul", "Preto", "Roxo", "Vermelho"); // Criando um array usando o construtor Array.
cores[0]; // azul
cores[1] = "Rosa";
cores[9] = "Lilás";
cores.length; // 10

// Métodos de Array.
const lista = document.querySelectorAll("li");
console.log(Array.from(lista)); // Transforma de NodeList para array

// Objetos que se parecem com array.
const arrayCreate = {
    0: "Item1",
    1: "Item2",
    2: "Item3",
    3: "Item4",
    length: 4, // Precisa ter a propriedade length.
};
console.log(Array.from(arrayCreate)); // Transforma aquilo que é parecido com um array em um array.

const verificaArray = Array.isArray(lista); // false - Verifica se é um array
console.log(verificaArray);

// Forma de criar um array
const array01 = Array.of(15); // [15]
const array02 = new Array(15); // [vazio * 15] - 15 espaços em branco
const array03 = Array(15); // [vazio * 15] - mesma coisa do "new Array".

const listaItens = [
    "Carro",
    "Moto",
    "Caminhão",
    ["Peneu", { preco: 20000, marca: "Ford" }],
];
console.log(listaItens.length); // 4 - numero de elementos
console.log(listaItens[2].length); // 8 - número de letras pois o 3 elemento é uma string.
console.log(listaItens[3].length); // 2 - número de elementos do array
console.log(listaItens[3][1].preco); // 20000 - acessando o parâmetro do objeto

// Métodos modificadores de arrays
const listaCompras = ["arroz", "feijão", "carne", "queijo"];
const listaPrecos = [20, 33, 2, 9, -1, 44];
console.log(listaCompras.sort()); // Em strings, organiza em orderm alfabética.
console.log(listaPrecos.sort()); // Em numbers "tenta" organizar, mas organiza de caracter por caracter.

const listaCarros = ["Monza", "Ferrari", "Gol"];
// Os dois métodos alteram o valor da array
listaCarros.unshift("Uno"); // Adiciona ao inicio
listaCarros.push("Gol quadrado", "Chevete"); // Adiciona ao final
console.log(listaCarros);

const removeFinal = listaCarros.pop(); // "Chevete" - Remove o ultimo valor da array e retorna ele.
console.log(listaCarros);
console.log(removeFinal);

const removeInicio = listaCarros.shift(); // "Uno" - Remove o primeiro e retorna ele.
console.log(listaCarros);
console.log(removeInicio);

console.log(listaCarros.reverse()); // Inverte a ordem da array

const listaCores01 = ["Azul", "vermelho", "verde"];
console.log(listaCores01);
console.log(listaCores01.splice(1, 1, "Preto")); // Adiciona itens apartir do index passado, remove um número de itens passado dps do index(retorna ele).
console.log(listaCores01);

listaFrutas = ["item01", "item02", "item03"].fill("Jabuticaba", 1); // Preenche de acordo com o valor passado, começando do index passado.
console.log(listaFrutas); // ['item01', 'Jabuticaba', 'Jabuticaba']

// Métodos de acesso - não modificam a array.
const arrayInicial = ["Pedro", "Amanda", "Julio"];
const arrayFinal = ["Jessica", "Letícia"];
const arrayConcat = arrayInicial.concat(arrayFinal); // Concatena os duas arrays, formando uma nova. (NÃO ALTERA AS ARRAYS ANTERIORES).
console.log(arrayConcat);

let linguagens = ["python", "php", "JS", "Java", "JS"];
console.log(linguagens.includes("php")); // true - verifica sem tem na array
console.log(linguagens.includes("Html")); // false
console.log(linguagens.indexOf("JS")); // 2 - retorna o index do valor passado (primeiro)
console.log(linguagens.lastIndexOf("JS")); // 4 - retorna o index do valor passado (ultimo)

// junta todos os valores da array e retorna uma string
const join = linguagens.join(", "); // Separa os itens com o valor pasasdo ", " - se não passar valor, sera somente ","
console.log(join);

// Macete para trocar algo com o join
let titulo = "<h2>Titulo principal</h2>";
titulo = titulo.split("h2"); // remove o h2 e retorna uma array
titulo = titulo.join("h1"); // depois da virgula adicionar o h2

console.log(titulo);

// CLonagem de arrays
const cloneLinguagem = linguagens.slice(); // Vai clonar a array linguagens inteira
cloneLinguagem.push("JSON");
// São duas diferentes
console.log(linguagens);
console.log(cloneLinguagem);
