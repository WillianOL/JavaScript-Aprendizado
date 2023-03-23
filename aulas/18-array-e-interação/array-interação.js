const arrayCarros = ["Monza", "Fiat", "Uno"];

arrayCarros.forEach((item, index, array) => {
    item = item.toUpperCase();
    console.log(item, index);
});

console.log(arrayCarros); // A array não muda após a alteração

const li = document.querySelectorAll("li");

//Quando for só um parâmetro e uma linha de cógico, não precisa dos parênteses nem das chaves
li.forEach((i) => i.classList.add("TESTE"));

const cores = ["Azul", "Preto", "Vermelho"];
const coresModificadas = cores.map((item, index) => {
    return item.toUpperCase();
});
console.log(coresModificadas);

// Usar o map quando for trabalhar com listas/arrays que vai alterar um valor
const numeros = [10, 7, 33, 100];
let result = 0;
const numerosSomados = numeros.map((n) => {
    result = result + n;
    return result;
});

console.log(numerosSomados); // [10, 17, 50, 150]
