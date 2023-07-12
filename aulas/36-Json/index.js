const arquivoJson = fetch("./index.json")

// JSON é um objeto nativo de json do JavaScript
// .parce transforma uma string que é parecida com json em json(mesma coisa do .json())
arquivoJson.then(r => r.text())
.then(jsonText => {
    const novoJson = JSON.parse(jsonText)
    novoJson.forEach((json) => {
        console.log(json);
    })
})


const dados = {
    usuario: "Rodolfo33",
    senha: 2902830,
    publicacoes: 13,
    seguidores: 1493,
}

// Transforma um objeto javascript em uma string em formato de json
const stringConfig = JSON.stringify(dados)
console.log(stringConfig);

// Exemplo real com localstorage
const dados2 = {
    usuario: "Reinaldo33",
    senha: 2902830,
    publicacoes: 13,
    seguidores: 1493,
}

localStorage.dados = JSON.stringify(dados2);
const pegaDados = JSON.parse(localStorage.dados)

console.log(pegaDados);