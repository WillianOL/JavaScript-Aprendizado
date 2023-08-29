function criarSection(texto) {
    // É privado pois só vai sair da função se for retornado
    const numeroAleatorio = "193098429"
    function element(){
        const section = document.createElement("section")
        section.innerHTML = texto;
        return section
    }

    return {
        texto,
        element,
        numeroAleatorio,
    }
}
// Sua vantagem é não precisar utilizar a palavra chave "new"
const secaoCompra = criarSection("Pagina de compra")
const secaoVender = criarSection("Pagina de vendas")
console.log(secaoVender);
console.log(secaoCompra.element());