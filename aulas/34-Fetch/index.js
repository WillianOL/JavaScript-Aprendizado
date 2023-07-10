//Com a fetch podemos fazer requisições HTTP, e o que é retornado pra ela é uma PROMISE
const documento = fetch("documento.txt") // Caminho do arquivo
const conteudo = document.querySelector(".content")
// O método text() retorna outra promesa, e o valor dela é o texto do arquivo HTTP 
documento
.then(resultado => resultado.text())
.then(texto => {
    conteudo.innerHTML = texto
})

console.log(documento);

// API do banco de dados dos CEPS do Brasil
fetch("https://viacep.com.br/ws/57690000/json/")
.then(resultado => resultado.json())
.then(cep => {
    console.log(cep);
})