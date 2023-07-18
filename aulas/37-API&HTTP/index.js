const api = fetch("https://pokeapi.co/api/v2/pokemon/37/");
api.then((r) => r.json()).then((pokemon) => {
    console.log(pokemon);
});

const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
const apiObject = {
    method: "POST",
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
