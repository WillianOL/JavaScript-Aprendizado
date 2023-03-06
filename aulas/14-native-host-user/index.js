// Exemplos de constutores dos objetos nativos
Object;
String;
Array;
Function;
// * Implementação da linguagem, independente do host.

// Objetos do host são aqueles implementados pelo próprio ambiente. (Navegadores).
HTMLCollection;
NodeList;

// User são objetos do usuário
const Pessoa = {
    nome: 'Willian',
    idade: 18,
}

// ECMA --> Organização criada com o intuito de estabelecer um padrão de tecnologias. ECMAScript é o padão do JavaScript

// Verificar se um método existe
if(typeof Array.from !== 'undefined') {
    console.log('Método existe.');
} else {
    console.log('Não existe')
}