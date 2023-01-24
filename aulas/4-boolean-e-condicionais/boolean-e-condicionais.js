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
//Vai executar else pois nenhuma das condições foram verdadeira

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
var maiorIdade = true

if(!maiorIdade){
  console.log('Não possue')
}