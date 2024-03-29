const h1 = document.querySelector("h1");
console.log(Object.prototype.toString.call(h1));

// dataset - objeto do tipo DOMStringMap que armazena um conjunto de chaves/valores no HTML através de: data-
// Facilita a interação e manipulação do DOM com JavaScript
const div = document.querySelector("div");
console.log(div.dataset.height);

// Mesma forma de selecionar, porém através de outros seletores(parâmetros)
const div2 = document.querySelector("[data-background]")
const div3 = document.querySelector("[data-height='200']")