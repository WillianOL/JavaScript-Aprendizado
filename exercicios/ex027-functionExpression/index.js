// Remova o erro
const priceNumber = (n) => {
    return +n.replace('R$', '').replace(',', '.');
}
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
   var nome = "WIllian OL"
   console.log(nome);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
// Mesma coisa
active(() => {
    console.log("Teste do callback");
})
