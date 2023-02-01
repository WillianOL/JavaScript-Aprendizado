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