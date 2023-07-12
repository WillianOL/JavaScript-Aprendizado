// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const conteinerPiada = document.querySelector(".piada");
const proximaPiada = document.querySelector(".proximaPiada");

function gerarPiada() {
    piada();
}

function piada() {
    const novaPiada = fetch("https://api.chucknorris.io/jokes/random")

    novaPiada.then(r => r.json())
    .then(piada => {
        conteinerPiada.innerHTML = piada.value
    })
}

proximaPiada.addEventListener("click", gerarPiada)