const  links = document.querySelectorAll("a")

function cliqueAleatorio(event) {
    event.preventDefault()
    fetchPage(event.target.href)
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
    document.querySelector(".conteudo").innerHTML = "Carregando";
    const resposta = await fetch(url)
    const texto = await resposta.text()
    trocarPagina(texto)
}

function trocarPagina(novoTexto) {
    const novoHtml = document.createElement("div")
    novoHtml.innerHTML = novoTexto
    
    const conteudoAntigo = document.querySelector(".conteudo")
    const newContent = novoHtml.querySelector(".conteudo")

    document.title = novoHtml.querySelector("title").innerHTML

    conteudoAntigo.innerHTML = newContent.innerHTML
}

window.addEventListener("popstate", () => {
    fetchPage(window.location.href);
})

links.forEach((link) => {
    link.addEventListener("click", cliqueAleatorio)
})