//Verificar o tipo de dado de uma vareável, usando o "typeof"
var nome = 'Willian';
var ano = 2004;
var cidade;
console.log(typeof ano);//Retornando number
console.log(typeof nome); //Retornando string
console.log(typeof cidade); //Retornando undefined

//Se o dado for null, é do tipo object
var comida = null;
console.log(typeof comida);

//Concatenação de strings
var nome = 'Willian';
var sobrenome = 'Oliveira';
var nomeCompleto = nome + " " + sobrenome; //Concatenando usando o sinal de soma "+"
console.log(nomeCompleto);

//Somando string e número
var km = 20;
console.log('Você estava a uma velocidade de ' + km + 'km/h');
//*Sempre que somamos uma string e um número, o resultado final sempre vai ser uma string.*

//Aspas Duplas, simples e Tamplate String
console.log('Olá "mundo", bom dia!');