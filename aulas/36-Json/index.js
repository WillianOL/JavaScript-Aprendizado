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
