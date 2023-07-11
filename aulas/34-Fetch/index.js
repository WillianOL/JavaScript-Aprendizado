//Com a fetch podemos fazer requisições HTTP, e o que é retornado pra ela é uma PROMISE
const documento = fetch("./documento.txt") // Caminho do arquivo
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
// JSON é um tipo de formato de dados com JS. Possui a mesma sintax de um objeto JS
.then(resultado => resultado.json())
.then(cep => {
    conteudo.innerHTML = cep.localidade
})

fetch("./style.css")
.then(resultado => resultado.text())
.then((css) => {
    const style = document.createElement("style")
    style.innerHTML = css;
    conteudo.appendChild(style)
})

const div = document.createElement("div")

fetch("./login.html")
.then(resultado => resultado.text())
.then((texto) => {
    div.innerHTML = texto
    const titulo = div.querySelector("h1").innerHTML
    conteudo.innerHTML = titulo
})