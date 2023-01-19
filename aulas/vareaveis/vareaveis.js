//Responsaveis por armazenar dados na memória. Ex: var, let e const
var nome = 'Willian';
let idade = 18;
const Solteiro = true;

console.log(nome, idade, Solteiro);

//Evitam repetições desnecessárias:
var preco = 15;
var TotalCompras = 10;
var precoTotal = preco * TotalCompras;

console.log(precoTotal);

//Criar várias vareáveis usando a vírgula para separalas:
var nome2 = 'Willian',
    cidade = 'Alagoas',
    id = 18;

console.log(nome2, cidade, id);

//Pode-se criar a vareável e não definir nenhum valor inicialmente:
var idade3; //Retornando undefined (como valor INDEFINIDO)
console.log(idade3);
