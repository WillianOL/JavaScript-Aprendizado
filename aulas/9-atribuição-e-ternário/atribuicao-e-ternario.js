//Atribuição
var n1 = 7;
var n2 = 10;
n1 += n2; // 17
n1 -= n2; // -3
n1 *= n2; // 70
n1 /= n2; // 0.7
n1 %= n2; // 3
n1 **= n2; // 282.475.249

//Operador ternário
//Funciona como se fosse uma abreviação das condicionais if e else
var idade = 17;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber);

//IF abreviado
var possuiCarteira = true;
if(possuiCarteira)
    console.log('Pode dirigir')
else
    console.log('Não pode dirigir')
// Pode-se escrever a estrutura desta forma quando ouver apenas uma linha de código. Se ouver mais uma linha de código, é nescessário abrir as cháves "{}".

