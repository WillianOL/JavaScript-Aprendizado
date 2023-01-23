//Valores númericos sem estar em "" são números.
var idade = 18
var exp = 3e5 //exponencial - 300000
var ponto = 2.57 //usar ponto e não vírgula.

//Opreadores aritiméticos
var s = 10 + 2 // 12
var sub = 10 - 2 // 8
var mult = 10 * 2 // 20
var divi = 10 / 2 // 5
var exp = 10 ** 2 // 100
//resto da divisão
var modulo = 10 % 3 // 1

//Verificar se o valor não é um número NaN
var num = 18
console.log(isNaN(num)) //Vai retornar um valor booleano (true ou false)

//Ordem de precedência
var valor1 = 20 + 10 * 2 // 40
var valor2 = (10 - 2) * 2 // 16
var valor3 = 40 / 2 + 2 // 22
var valor4 = 10 + (3 + 2) * 5 - 20 / 2 // 25
console.log(valor4);