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
function imc(peso, altura) { //separados por vírgula.
  var res = peso / (altura ** 2)
  console.log(res)
}
console.log(imc(52, 1.73))
//Esses valores são os argumentos

// Outro exemplo
function GostoColinario(comidaFavorita){
  if(comidaFavorita === 'Lasanha'){
    return 'Você gosta de lasanha'
  } else if(comidaFavorita === 'Macarronada'){
    return 'Você gosta de Macarronada'
  } else{
    return 'Do que você gosta então?!'
  }
}
console.log(GostoColinario('Lasanha'))

// Argumentos é funções
//Pode-se criar funções a partir de eventos da Web. Chamadas de Callback.
  addEventListener('click', function(){
    console.log('Clicou!')
  }) // Evento de click e fução anônima.
