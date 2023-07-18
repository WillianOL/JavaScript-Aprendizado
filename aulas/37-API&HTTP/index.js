const api = fetch("https://pokeapi.co/api/v2/pokemon/37/");
api.then((r) => r.json()).then((pokemon) => {
    console.log(pokemon);
});

const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
const apiObject = {
    // Por padrão, utilizamos o método GET para trabalharmos com a web, pois estamos pegando dados, não criando eles.
    method: "POST", // O POST serve para enviarmos dados
    body: '{"aula": "JavaScript-API"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

const apiFake = fetch(apiUrl, apiObject);
apiFake
    .then((r) => r.json())
    .then((api) => {
        console.log(api);
    });
