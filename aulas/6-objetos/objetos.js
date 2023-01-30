// Objetos
var pessoa = { // Dai, o tipo dela passa a ser um objeto.
    nome: 'Willian',
    idade: 18,
    cidade: 'Alagoas',
    profissao: 'Programador',
} // Todas essas 'vareáveis' que estão dentro do objeto são chamados de propriedades.
console.log(pessoa.nome, pessoa.idade);
//Sempre constituídos por chave e valor.

//Metodo - É uma propriedade que recebe uma função no lugar de seu valor.
var metodo = {
    custo: 2,
    precoCoca: function(cocas){
        return `As cocas custam ${metodo.custo * cocas}R$ reais ao todo`
    },
    custoSapatos: 15,
    precoSapatos: function(sapatos){
        return `Os sapatos custam ${this.custoSapatos * sapatos}R$ ao todo`
    }, // Usar o this ao invez de ficar reescrevendo o nome do objeto para acessar sua propriedade ou método.

    number(numero) { // forma de escrever uma função no ES6+
        return numero
    }
}
console.log(metodo.precoCoca(4));
console.log(metodo.precoSapatos(20));
console.log(metodo.number(5));

// Criar um objeto
var carro = {};
var mochila = {};

// Dot notation get
var menu = {
    width: 500,
    height: 100,
    backgroundColor: "#97f",
    metadeWidth() {
        return this.width / 2
    }
}
var capa = menu.backgroundColor //Atribuir valores com objetos

menu.backgroundColor = '#3ff' // Atribuindo novos valores a propriedade
menu.color = '#f00' // Criando novas propriedades

menu.mensagem = function() {
    console.log('Adicionando um metodo a um objeto')
} // Com isso também pode-se criar novos métodos/funções