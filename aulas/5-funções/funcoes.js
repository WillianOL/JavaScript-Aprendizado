//Funções
function coca(dinheiroCoca) {
  if(dinheiroCoca >= 2){
    return 'Oba, você comprou a coca'
  } else{
    return 'Dinheiro insuficente'
  }
}
console.log(coca(2))
//Vai retornar um dos dois dependendo do parãmetro passado na função.

//Peso e a altura são parâmetros
function imc(peso, altura){ //separados por vírgula.
  var res = peso / (altura ** 2)
  return res
}
console.log(imc(58, 1.73)) //Esses valores são os argumentos