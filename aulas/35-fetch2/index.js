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
