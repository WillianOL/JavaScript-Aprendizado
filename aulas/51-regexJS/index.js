// O new RegExp faz a mesma coisa, a diferença é que ele separa a flag da expressão, aceita em forma de string e substitui a "\" por "\\. Além de o objeto RegExp ter seus métodos e propriedades."
const regex1 = /\w/gi;
const regexConstructor = new RegExp("\\w", "gi")
const palavra = "JavaScript Linguagem 1010";

console.log(palavra.replace(regexConstructor, "X"))

// Diferença 
const validacaoDeCelular = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}/g;
const regex2 = new RegExp("(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[\\s-]?)?\\d{4,5}[\\s-]?\\d{4}", "g")

// test()
// Verifica se existe ou não uma ocorrência da busca, retornando um valor booleano. No proximo test ele vai verificar a partir do ultimo true. Quando o resultado do teste, ou seja, da busca for false ele reinicia e busca novamente.
const numeroCelular = "+55 (82) 99433-4960"
console.log(regex2.test(numeroCelular)); // true
console.log(regex2.test(numeroCelular)); // true

const regex3 = new RegExp("Java", "gi")
const java = "JavaScript é uma linguagem, Java também. Java é diferente de javascript"
console.log(regex3.test(java)); // true
console.log(regex3.test(java)); // true
console.log(regex3.test(java)); // true
console.log(regex3.test(java)); // true
console.log(regex3.test(java)); // False

// exec
// Retorna uma array com diversas informações. (mesma lógica de continuidade do test)
const regex4 = new RegExp("\\d+", "g");
const texto = "203 wswddei 1203 dkem 123 1234 dede"
console.log(regex4.exec(texto)) // 203
console.log(regex4.exec(texto)) // 1203
console.log(regex4.exec(texto)) // 123
console.log(regex4.exec(texto)) // 1234

const regex5 = new RegExp("\\w+", "g");
const texto2 = "JavaScript, TypeScript, CofeScript, Java";

// let arrayRegex;
// while((arrayRegex = regex5.exec(texto2)) !== null) {
//     console.log(arrayRegex);
// }

// Métodos de strings com regex
// match - retorna uma array com todos os resultados da busca do regex. Caso o retorno não tenha match o resultado é null
const regex6 = /\w{2,}/g
const linguagens = "JavaScript, TypeScript, CoffeeScript e Java"
console.log(linguagens.match(regex6)); // ['JavaScript', 'TypeScript', 'CoffeeScript', 'Java']

// split 
// Serve para distribuirmos a string em um array, quebrando e separando os valores de acordo com o argumento passo.
const linguagens2 = "JavaScript TypeScript CoffeeScript"
console.log(linguagens2.split(", ")); // ['JavaScript', 'TypeScript', 'CoffeeScript']
console.log(linguagens2.split("Script"));

// replace
// Possívelmente o método mais usado
const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;
// Selecionando tudo o que é tag
console.log(tags.replace(/(?<=<\/?)\w+/g, "div")); 
// captura
console.log(tags.replace(/<li/g, "$& class='ativado'"));

// grupo de captura
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;
const regex7 = /(\w+@)[\w.]+/g
const resultado = emails.replace(regex7, "$1gmail.com")

console.log(resultado);

// replace com callback
const emails2 = `
joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
williancontato83@gmail.com
`;
const regexEmail = /(\w+@)([\w.]+)/g
const troca = emails2.replace(regexEmail, (...args) => {
    if(args[2] === "homail.com.br") {
        return args[1] + "hotmail.com.br"
    } else if(args[2] === "ggmail.com.br") {
        return args[1] + "gmail.com"
    } else if(args[2] === "oulook.com.br") {
        return args[1] + "outlook.com.br"
    } else {
        return args[0]
    }
})

console.log(troca);