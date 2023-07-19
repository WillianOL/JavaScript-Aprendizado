const api = fetch("https://pokeapi.co/api/v2/pokemon/37/");
api.then((r) => r.json()).then((pokemon) => {
    console.log(pokemon);
});

const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
// Por padrão, utilizamos o método GET para trabalharmos com a web, pois estamos pegando dados, não criando eles.
const apiObject = {
    method: "POST", // O POST serve para enviarmos dados
    body: '{"aula": "JavaScript-API"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

const apiFake = fetch(apiUrl, apiObject);
apiFake.then((r) => r.json())
.then((api) => {
    console.log(api);
});

// method - PUT
// Serve para atualizar dados, ou seja, substituir um dado por outro
const apiPUT = fetch(apiUrl + "100", {
    method: "PUT",
    body: '{"aula": "HTML&CSS"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
})

apiPUT.then(r => r.json())
.then(put => {
    console.log(put)
})

// method - DELETE
// Serve para deletar algum dado
const apiDELETE = fetch(apiUrl + "2", {
    method: "DELETE",
})

apiDELETE.then(r => r.json())
.then(delet => {
    console.log(delet)
})

// method - HEAD
// Serve para puxar todos os headers
const apiHEAD = fetch(apiUrl + "2", {
    method: "HEAD",
})

apiHEAD.then(response => {
    console.log(response.headers.forEach(console.log))
})

