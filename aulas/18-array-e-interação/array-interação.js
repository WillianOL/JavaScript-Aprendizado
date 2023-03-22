const arrayCarros = ['Monza', 'Fiat', 'Uno'];

arrayCarros.forEach((item, index, array) => {
    item = item.toUpperCase();
    console.log(item, index);
});

console.log(arrayCarros); // A array não muda após a alteração

const li = document.querySelectorAll('li')

//Quando for so um parâmetro e uma linha de cógico, não ´recisa dos parênteses nem das chaves
li.forEach(i => i.classList.add('TESTE'));

const cores = ['Azul', 'Preto', 'Vermelho']
const coresModificadas = cores.map((item,index) => {
    return item.toUpperCase()
})

console.log(coresModificadas);
console.log(cores);