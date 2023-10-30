const cpfs = document.querySelectorAll(".cpf li");

const cpfInnerText = ([...elements]) => {
    return elements.map(cpf => cpf.innerText)
}

const limparCpf = (cpf) => {
    return cpf.replace(/\D/g, "")
}

const construirCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
}
// Quando for ativar uma função(em um map por exemplo), passando o mesmo resultado e mais nada além disso, pode-se a penas passar o nome da função sem ativar ela, exemplo:
const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCpf).map(construirCpf)
}

const substituiCPFS = (cpfsElements) => {
    const cpfs = cpfInnerText(cpfsElements)
    const cpfsFormatados = formatarCPFS(cpfs)
    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index]
    })
}

console.log(substituiCPFS(cpfs));