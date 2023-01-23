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
var idade = 18;
if( idade >= 18){
  console.log("Maior de idade");
} else if( idade >= 12){
  console.log("Adolescente");
} else if( idade >= 1){
  console.log("Criança");
}