const h1 = document.querySelector("h1");
console.log(Object.prototype.toString.call(h1));

// dataset - objeto do tipo DOMStringMap que armazena um conjunto de chaves/valores no HTML através de: data-
// Facilita a interação entre o DOM e o JavaScript
const div = document.querySelector("div");
console.log(div.dataset.height);