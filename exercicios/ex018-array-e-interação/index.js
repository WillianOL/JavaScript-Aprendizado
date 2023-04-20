// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetos = arrayCursos.map((item) => {
    const titulo = item.querySelector("h1").innerText;
    const descricao = item.querySelector("p").innerText;
    const aula = item.querySelector(".aulas").innerText;
    const hora = item.querySelector(".horas").innerText;
    // No ES6, quando o nome vareável é igual ao nome do parâmetro do objeto, não precisa escrever os dois
    return {
        titulo,
        descricao,
        aula,
        hora,
    };
});

console.log(objetos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter((numeros) => numeros > 100);
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const temBaixo = instrumentos.some((i) => i === "Baixo");
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
    {
        item: "Banana",
        preco: "R$ 4,99",
    },
    {
        item: "Ovo",
        preco: "R$ 2,99",
    },
    {
        item: "Carne",
        preco: "R$ 25,49",
    },
    {
        item: "Refrigerante",
        preco: "R$ 5,35",
    },
    {
        item: "Quejo",
        preco: "R$ 10,60",
    },
];

const precoCompras = compras.reduce((acumulador, item) => {
    item = +item.preco.slice("2").replace(",", ".");
    return acumulador + item;
}, 0);
console.log(precoCompras);
