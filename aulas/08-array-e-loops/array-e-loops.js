// Array é um grupo de valores geralmente relacionados
var celulares = ['xiaomi', 'samsung', 'iphone'];
console.log(celulares);

var exemplo01 = celulares.pop(); // Remove o ultimo item e retorna ele.
celulares.push('LG'); // Adiciona o elemento no ultimo indicie
console.log(celulares.length); // Número de elementos/itens

//For loop - estrutura de repetição
for (var contagem = 0; contagem <= 10; contagem++) {
    console.log(`For ${contagem}`);
} //Primeiro cria-se uma vareável de contagem, depois a condição para que o loop continue. Depois que ele executar o código, faz o incremento de +1 até que a condição seja falsa e o loop pare.

//While loop
var n = 0;
while (n <= 10) {
    console.log(`While ${n}`)
    n++
}

// do while
let contador = 0
do{
    console.log(`Contador é: ${contador}`);
    contador++
} while(contador <= 10)

//Array e loops
var nomes = ['Willian', 'Netinho', 'André', 'Pedro']
for (var c = 0; c <= nomes.length; c++) {
    console.log(`Temos ${nomes.length} pessoas, ${nomes[c]}`);
}

//Break
var comida = ['Bolo', 'Sorvete', 'Pastel', 'Coxinha']
for (var i = 0; i <= comida.length; i++) {
    console.log(`Gosto de ${comida[i]}`);
    if( comida[i] === 'Sorvete') {
        break;
    }
}

//forEach
//Método que executa uma função para cada item do array.
var mes = ['Janeiro', 'Fevereiro', 'março', 'abril']
mes.forEach(function(item, index, array) {
    console.log(item, index, array)
});