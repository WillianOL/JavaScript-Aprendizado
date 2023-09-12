// Destructuring permite a desestruturação de arrays e objetos.
const pessoa = {
    nome: "Willian",
    idade: 18,
    trabalhando: true,
    cidade: "Atalaia",
};
const nome1 = pessoa.nome;
const idade1 = pessoa.idade;
const trabalhando1 = pessoa.trabalhando;
const cidade1 = pessoa.cidade;

// Facilita para evitar repetições. E organiza o código
const { nome, idade, trabalhando, cidade } = pessoa;
console.log(nome, idade, trabalhando, cidade);

// Outro exemplo
const cliente = {
    nome: "Andre",
    compras: {
        digitais: {
            livros: ["Livro 1", "Livro 2"],
            videos: ["Video JS", "Video HTML"],
        },
        fisicas: {
            cadernos: ["Caderno 1"],
        },
    },
};
// Dessa forma é muito trabalhosa
const livros1 = cliente.compras.digitais.livros;
const videos1 = cliente.compras.digitais.livros;
// É preciso acessar por nivel, ou seja, ir até onde estão as propriedades.
// const { livros, videos } = cliente.compras.digitais;

// Forma de pegar propriedades dentro de uma propriedade
const {digitais, fisicas, digitais:{livros, videos} } = cliente.compras
console.log(livros, videos);


const cliente2 = {
    sobrenome: "Oliveira",
    compras: 10,
}

const {sobrenome, compras} = cliente;
// Forma de renomear o nome da variável
const {sobrenome: sobrenomeOliveira} = cliente2

const usuario = {
    user: "Willian",
    id: 29038203,
    nivel: 23,
}
// Caso alguma propriedade não exista, pode-se definir um valor padrão para o caso
const {user, id, nivel = 0} = usuario
console.log(nivel);

// Para funções, é a mesma coisa. Porém é com "[]" e o nome das variáveis é personalizado
const frutas = ["Limão", "Maçã", "Banana"];

const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]
// com o destructuring
const [primeira, segunda, terceira] = frutas
console.log(primeira, segunda, terceira);

// Desestruturação de argumentos
// Pegando diretamente as proprieades do objeto KeyboardEvent
function teclaAleatoria({key, keyCode}){
    console.log(key, keyCode);
}

document.addEventListener("keydown", teclaAleatoria)