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
//Pode-se criar uma String com aspas SIMPLES com um item de aspas DUPLAS dentro. E vice-versa
console.log('Olá "mundo", bom dia!');
console.log("Olá 'mundo', bom dia!");
//Não pode colocar aspas duplas dentro de duplas ou simples dentro de simples. Pois o JS identifica como fechamento de string

var velocidade = 120;
console.log(`Multado, você estava a uma velocidade de ${velocidade}km/h`)