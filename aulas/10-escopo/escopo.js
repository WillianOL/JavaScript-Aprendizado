// Escopo de função
function mostrarMensagem() {
    var mensagem = 'Esta é a mensagem';
    console.log(mensagem);
}

mostrarMensagem(); // Mostra a mensagem da vareável no console
//console.log(mensagem); - Mensagem is not defined, pois a vareável só existe dentro da função.

//Dessa forma funciona pois a vareável está criada no documento pai.
var idade = 18;
function mostrarIdade() {
    console.log(idade);
}

mostrarIdade(); // mostrar 18 no console
console.log(idade); // mostrar 18 no console

// Escopo de bloco
if(true) {
    var fruta = 'Limão'
    console.log(fruta);
} 
console.log(fruta);

// "var" Vaza do bloco, ou seja, a vareável existe dentro de fora do bloco. Isso é ruim por causa que pode haver conflitos entre vareáveis. Por isso, usa-se o "let" ou "const".
if(true) {
    let fruta2 = 'Limão';
    console.log(fruta2);
} 
// console.log(fruta2); erro, fruta2 is not difined

// A partir de agora, só "let" ou "const"
for( let c = 0; c <= 10; c++ ) {
    console.log(c);
}
// console.log(c); ERRO, c is not defined

// const - Usar para valores que não vão ser alterados
const nome = 'Willian';
// nome = 'Olá'; - ERRO, não pode atribuir outro valor.
// const sobrenome; - ERRO, declarar sem valor.
const pessoa = {
    nome: 'Willian',
    idade: 18,
    cidade: 'Alagoas',
}
console.log(pessoa.idade);
pessoa.idade = 19; // Assim a alteração de valores funciona.
console.log(pessoa.idade); // Valor alterado

// let - Usar para valores que vão ser alterados
let pais = 'Brasil';
pais = 'Alemanha'; // O valor pode ser modificado
console.log(pais);

let ano;
ano = 2023;
ano++
console.log(ano);