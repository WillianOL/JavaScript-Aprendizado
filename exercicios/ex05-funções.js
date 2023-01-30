// Crie uma função para verificar se um valor é Truthy
var possuiFaculdade = true;
function verificar(dado){
    return !!dado
}
console.log(verificar(possuiFaculdade)); 

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
    return lado * 4
}
console.log(perimetroQuadrado(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function NomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
console.log(NomeCompleto('Willian', 'Oliveira'));

// Crie uma função que verifica se um número é par
function ePar(numero){
    if(numero % 2 === 0){
        return 'É par'
    }else{
        return 'Não é par'
    }
}
console.log(ePar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(tipoDado){
    var tipo = typeof tipoDado
    return tipo
}
console.log(tipoDeDado())

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', nomeAparece)
function nomeAparece(){
    console.log("Willian Eusebio");
}

// Corrija o erro abaixo
var totalPaises = 193; // Apenas colocar a vareável no documento pai, fazendo ela existir em todo o código.
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));