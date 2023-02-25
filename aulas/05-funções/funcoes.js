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
  return res
}
console.log(imc(55, 1.73))
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

// Argumentos e funções
//Pode-se criar funções a partir de eventos da Web. Chamadas de Callback.
  addEventListener('click', function(){
    console.log('Clicou!')
  }) // Evento de click e função anônima.

function imc2(peso, altura){
  var result = peso / (altura ** 2)
  console.log(result)
}
imc2(52, 1.80)

// Funções podem retornar qualquer tipo de dado, até mesmo outras funções
function verificarIdade(idade){
  console.log(typeof idade)
  if(typeof idade !== 'number'){
    return 'Por favor, preencha com um número.'
  } else if(idade >= 60){
    return true
  } else{
    return false
  } // ATENÇÃO - Não é uma boa aplicação uma função returnar diferentes tipos de dados.
}
console.log(verificarIdade(60))

//Escopo
//Vareáveis e funções definidas em funções só existem dentro delas. Ou seja, se tentarmos puxar uma vareável de dentro de uma função, vai retornar undefined, pois aquela vareável só existe dentro do escopo da função.

function faltamVisitar(RestalrantesVisitados){
  var totalRestalrantes = 25
  return `Faltam visitar ${totalRestalrantes - RestalrantesVisitados} restalrantes.`
}
console.log(faltamVisitar(10))
console.log(totalRestalrantes) // Retorna undefined pois essa vareável só existe dentro da função.