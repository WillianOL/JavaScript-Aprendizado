// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const botaoBuscar = document.querySelector("button");
const resultado = document.querySelector(".resultado");
const inputCep = document.querySelector("form input");


function cliqueBotao(event) {
    event.preventDefault()
    const cepValue = inputCep.value

    buscarCep(cepValue)
}

function buscarCep(cepValor) {
    const buscarCep = fetch(`https://viacep.com.br/ws/${cepValor}/json/`)

    buscarCep.then(response => response.json())
    .then(cep => {
        console.log(cep);
        resultado.innerHTML = `Localidade: ${cep.localidade} ${cep.uf},<br> Bairro: ${cep.bairro}, <br> Logradouro: ${cep.logradouro}, <br> Complemento: ${cep.complemento}.`
    })
}


botaoBuscar.addEventListener("click", cliqueBotao)