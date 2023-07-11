const content = document.querySelector(".conteudo");

const estiloCss = fetch("./style.css");

estiloCss
    .then((r) => r.text())
    .then((css) => {
        const tagStyle = document.createElement("style");
        tagStyle.innerHTML = css;
        content.appendChild(tagStyle);
    });

const imagem = fetch("constructorPerfil.png");

imagem
    .then((r) => r.blob())
    .then((imagem) => {
        const imgDOM = document.querySelector("img");
        const imagemUrl = URL.createObjectURL(imagem);
        imgDOM.src = imagemUrl;
    });

// Com o clone, a resposta é clonada. Usar clone caso você necessite transformar uma resposta em diferentes valores.
const clone = fetch("https://viacep.com.br/ws/57690000/json/");
clone.then((r) => {
    const r2 = r.clone();
    r.text().then((texto) => console.log(texto));
    r2.json().then((objeto) => console.log(objeto));
});

const headers = fetch("https://viacep.com.br/ws/57690000/json/");
headers.then(response => {
    response.headers.forEach(header => console.log(header))
})

// O status diz se a página está funcionando ou não, ou se ela foi encontrada. Retornando 200 ou 404
const stats = fetch("https://viacep.com.br/ws/57690000/json/");
stats.then(response => {
    if(response.status === 404){
        console.log("Página inativa");
    }
})


const typeEurl = fetch("https://viacep.com.br/ws/57690000/json/");
typeEurl.then(response => {
    console.log(response.type);
    console.log(response.url);
})