let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
funcao1()


function contagem() {
    let total = 0;

    return function incremento() {
        total++
        console.log(total);
    }
}
// Feito isso pois ele só retorna a função incremento, porém não executa ela. Colocando ele dentro de uma variável, ele armazena a função sem estar ativada. Depoois pode-se ativar a função.
const ativarIncremento = contagem();
ativarIncremento()