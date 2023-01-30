// Tudo é objeto
var nome = 'Willian';
console.log(nome.toLowerCase())
// Transformando a vareáel (objeto) em letras minúsculas.

// Para números também
var n1 = 1.6
console.log(n1.toFixed())
console.log(n1.toString())

// Elementos DOM
var button = document.querySelector('.btn') //Acessando a tag 'a' atravéz de seu seletor CSS.
button.addEventListener('click', function(){
    return console.log('Ola');
})