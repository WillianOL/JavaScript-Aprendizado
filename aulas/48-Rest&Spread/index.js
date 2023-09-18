// Definir valores padões para argumentos caso não seja passado nada(forma antiga)
function perimetro(lado, totalLados) {
    totalLados = totalLados || 4;
    return lado * totalLados
}
console.log(perimetro(10));

// Forma de fazer no ES6
function somarNumeros(n1, n2 = 5) {
    return n1 + n2
}
console.log(somarNumeros(10));

// O "arguments" retorna todos os argumentos da função. Com isso podemos transformalo em uma array, por exemplo:
function somar3(n1, n2, n3 = 20) {
    const argArray = Array.from(arguments)
    return argArray
}
console.log(somar3(10, -5, 8));

// Usando REST para armazenar os argumentos, dessa forma podemos passar quantos argumentos quisermos.
// Pode passar apenas um parâmetro rest, e ele tem que ser o ultimo.
function mostrarEmTela(...listaDeArgumentos) {
    // Ele é uma array
    return listaDeArgumentos
}
console.log(mostrarEmTela(4, 5, "Olá", {nome: "Willian", idade: 18}, true));

// Com ele podemos evitar repetições e criação de vários argumentos.
// Se passarmos um parâmetro antes do rest, ele irá pegar o resto dos argumentos passados depois
function passarDeAno(nome, ...series){
    series.forEach((serie) => {
        console.log(`${nome} passou para a ${serie}º série!`);
    })
}
// No caso, o rest irá pegar os outros depois de "Willian"
console.log(passarDeAno("Willian", 5, 6, 7, 8, 9));

// Spread
// Ele também usa os "...". Porém ele serve para distribuirmos algum item interável
const aprovados = ["WIllian", "José", "Mariana", "Jessica"]
const reprovados = ["Pedro", "Daniele", "Melissa", "André"]

// Sem o spread ele iria colocar a array, e não seus itens distribuidos.
const listaDeAlunos = [...aprovados, "Cleber", ...reprovados]
console.log(listaDeAlunos);

// Pode-se usar ele como argumento também.
const listaNumeros = [10, 20, 37, 4, 6, 200, 390, -0, 9]
const numeroMaximo = Math.max(...listaNumeros)
console.log(numeroMaximo);

// Transformando uma nodeList em uma array sem usar o Array.from()
const btns = document.querySelectorAll("button")
const botoes = [...btns]