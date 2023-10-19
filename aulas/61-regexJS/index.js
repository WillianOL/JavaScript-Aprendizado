// O new RegExp faz a mesma coisa, a diferença é que ele separa a flag da expressão, aceita em forma de string e substitui a "\" por "\\. Além de o objeto RegExp ter seus métodos e propriedades."
const regex1 = /\w/gi;
const regexConstructor = new RegExp("\\w", "gi")
const palavra = "JavaScript Linguagem 1010";

console.log(palavra.replace(regexConstructor, "X"))

// Diferença 
const validacaoDeCelular = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}/g;
const regex2 = new RegExp("(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[\\s-]?)?\\d{4,5}[\\s-]?\\d{4}", "g")

// test()
// Verifica se existe ou não uma ocorrência da busca, retornando um valor booleano
const numeroCelular = "+55 (82) 99433-4960"
console.log(regex2.test(numeroCelular)); // true