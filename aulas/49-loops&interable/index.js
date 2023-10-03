//Objetos interables são objetos que possuem o método symbol.interator. Por exemplo: String, Array, Numbers e etc.
const frutas = ["Morango", "Limão", "Maçã"];
const frase = "Fomos a praia"

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers))

// É possivel fazer um loop por CADA ITEM do objeto INTERÁVEL. Utilizando o for of
// Primeiro é definido a variável(fruta), depois é colocado o objeto interável(frutas)
for(const fruta of frutas) {
    console.log(fruta);
}

for(const caracter of frase) {
    console.log(caracter);
}

const botoes = document.querySelectorAll("button");
for(const botao of botoes) {
    botao.style.color = "blue";
    botao.style.backgroundColor = "gray"
}
console.log(...botoes)

// For in é um loop para objetos que não são interaveis, objetos simples por exemplo:
const pessoa = {
    nome: "Willian",
    idade: 18
}

for(key in pessoa) {
    console.log(key, pessoa[key]);
}

// Já o for in, faz um loop por cada item de um objeto ENUMERAVEL e não interável. Como objetos criados diretamente.
const aulas = {
    materia: "Matemática",
    horas: 4
}
Object.defineProperties(aulas, {
    dias: {
      value: 3,
      enumerable: false, // o for in não vai puxar
    }
})
// Dessa forma, ele só vai puxar apenas as propriedades enumeraveis.
for ( key in aulas ) {
    console.log(key, aulas[key]);
}

// Exemplo:
const btn = document.querySelector("button");
const estilosDoBtn = getComputedStyle(btn);

for( estilo of estilosDoBtn ) {
    console.log(`${estilo}: ${estilosDoBtn[estilo]}`)
}