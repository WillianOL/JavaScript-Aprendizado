// Retorne no console todas as imagens do site
const ImagensSite = document.querySelectorAll('img')
console.log(ImagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const comecaComImagem = document.querySelectorAll("[src^='img/imagem']")
console.log(comecaComImagem);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll("[href^='#']")
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.descricaoAnimais .animais h2')
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length]);