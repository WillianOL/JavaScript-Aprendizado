// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("section p")

const totalDeCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, paragrafo) => {
    return acumulador + paragrafo.innerText.length
}, 0)

console.log(totalDeCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function GerarNovoElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}

GerarNovoElemento('ul', "incolor") 


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novoElemento = GerarNovoElemento.bind(null, 'h1', 'titulo')
console.log(novoElemento("Vamos brincar"));
