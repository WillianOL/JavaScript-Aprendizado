// Tudo é objeto
var nome = 'Willian';
nome.toLowerCase() // herda do objeto o método do objeto String.

// Para números também
var n1 = 1.6
console.log(n1.toFixed())
console.log(n1.toString())

// Elementos DOM
var button = document.querySelector('.btn') //Acessando a tag 'a' atravéz de seu seletor CSS.
button.addEventListener('click', function(){
    return console.log('Clicou');
})

button.classList.add('ativo'); //Adicionando a class 'ativo'