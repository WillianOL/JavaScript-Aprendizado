//boolean são valores de falso e verdadeiro (true e false). Servindo muito para as estruturas condicionais
var possuiCasa = false;
var possuiApartamento = false;

//Estruturas condicionais - Estrutura composta

if(possuiCasa){ // Se o valor da condição for true, o que está dentro do bloco sera executado
  console.log("Ele possui casa.");
} else { // Casa não seja, o bloco do else será executado.
  console.log("Ele não possui casa.");
}

//Estrutura simples
//Diferente do IF e ELSE, nessa apenas temos o IF. Sendo assim, só será executado quando a condição for verdadeira, se não, seguira o fluxo normal do código.
if(possuiApartamento){
  console.log("Ele possui apartamento");
}

//ELSE IF
var idade = 8;
if( idade >= 18){ // False
  console.log("Maior de idade");
} else if( idade >= 12){ // False
  console.log("Adolescente");
} else{
  console.log("Criança");
}
//Vai executar else pois nenhuma das condições foram verdadeiras

//Truthy e Falsy
//Valores booleanos verdadeiros e falsos.

//Falsy
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if('');

//Operador de negação " ! "
var maiorIdade = true;

if(!!maiorIdade){ // Como o valor da vareável é true, e o sinal de negação inverte o valor boolean. Basta adicionar outro "!" para inverter o valor boolean novamente == (true -> false -> true.)
  console.log('Não possue')
}

//Operadores de comparação
var comp1 = 5 > 6; // true
var comp2 = 6 > 5; // true
var comp3 = 7 < 3; // false
var comp4 = 3 > 4; // false
var comp5 = 5 >= 5 // true
var comp6 = 5 <= 10 //false

//Operador de comparação, sinal de igual.
// == não testa o tipo de dado. === testa o tipo de dado.
var igual1 = 50 == 50; // true
var igual2 = 50 == "50" // true
var igual3 = 50 === 50; // true
var igual4 = 50 === "50" // false
var igual5 = 'Willian' === 'willian'
console.log(igual5);

//Direfente
var dife1 = 50 != 50 // false
var dife2 = 50 != "50" // false
var dife3 = 50 !== "50" // true
console.log(dife3);

//Operador &&, "e" lógico.
var op1 = true && true; // true
var op2 = true && false; // false
var op3 = false && true; // false
var op4 = 'Cachorro' && 'Gato'; //gato
var op5 = (2 - 2) && (4 + 4); // 0
console.log(op5)

var possuiFaculdade = (10 + 10) && (5 + 9)

if(possuiFaculdade){
  console.log('Verdadeiro')
  console.log(possuiFaculdade);
} else {
  console.log('Falso')
  console.log(possuiFaculdade);
}

//Switch
var cabelo = 'Cacheado'
switch(cabelo){
  case 'Liso':
    console.log('Seu cabelo é liso')
    break
  case 'Crespo':
    console.log('Seu cabelo é crespo');
    break
  case 'Cacheado':
    console.log('Seu cabelo é cacheado');
    break
  default:
    console.log('Você é careca');
}